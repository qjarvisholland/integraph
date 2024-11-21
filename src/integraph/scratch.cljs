(ns integraph.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.dom :as rd]
            [cljsjs.d3]))

(enable-console-print!)
(println "This text is printed from src/integraph/core.cljs. Go ahead and edit it and see reloading in action.")

(defonce app-state (atom {:text "Hello world!"
                          :nodes [{:id "node1" :label "Quinn JH"}
                                  {:id "node2" :label "about"}
                                  {:id "node3" :label "projects"}
                                  {:id "node4" :label "contact"}
                                  {:id "node5" :label "e"}]
                          :edges [{:source "node2" :target "node1"}
                                  {:source "node3" :target "node1"}
                                  {:source "node4" :target "node1"}
                                  {:source "node5" :target "node1"}]}))

(defn create-visualization []
  (let [svg (js/d3.select "#viz")
        width 500
        height 300
        colors (js/d3.scaleOrdinal js/d3.schemeCategory10)
        simulation (js/d3.forceSimulation (clj->js (:nodes @app-state)))
        link-force (js/d3.forceLink (clj->js (:edges @app-state)))]

    (.id link-force (fn [d] (.-id d)))
    (.force simulation "link" link-force)
    (.force simulation "charge" (js/d3.forceManyBody))
    (.force simulation "center" (js/d3.forceCenter (/ width 2) (/ height 2)))

    (.selectAll svg "*").remove()

    (let [edges (-> svg
                    (.selectAll "line")
                    (.data (clj->js (:edges @app-state)))
                    (.enter)
                    (.append "line")
                    (.attr "stroke" "gray")
                    (.attr "stroke-width" 2))
          nodes (-> svg
                    (.selectAll "circle")
                    (.data (clj->js (:nodes @app-state)))
                    (.enter)
                    (.append "circle")
                    (.attr "r" 20)
                    (.attr "fill" #(colors (:id %))))
          labels (-> svg
                     (.selectAll "text")
                     (.data (clj->js (:nodes @app-state)))
                     (.enter)
                     (.append "text")
                     (.attr "dy" ".35em")
                     (.style "text-anchor" "middle")
                     (.text #(-> % :label)))]

      (let [drag (js/d3.drag)]
        (.on drag "start" (fn [d]
                            (.restart simulation)
                            (.alphaTarget simulation 0.3)
                            (aset d "fx" (.-x d))
                            (aset d "fy" (.-y d))))
        (.on drag "drag" (fn [d]
                           (aset d "fx" (.-x js/d3.event))
                           (aset d "fy" (.-y js/d3.event))))
        (.on drag "end" (fn [d]
                          (aset d "fx" nil)
                          (aset d "fy" nil)
                          (.alphaTarget simulation 0)))
        (.call nodes drag))

      (.on simulation "tick" (fn []
                               (doseq [e (:edges @app-state)]
                                 (.attr edges "x1" (.-x (:source e)))
                                 (.attr edges "y1" (.-y (:source e)))
                                 (.attr edges "x2" (.-x (:target e)))
                                 (.attr edges "y2" (.-y (:target e))))
                               (doseq [n (:nodes @app-state)]
                                 (.attr nodes "cx" (.-x n))
                                 (.attr nodes "cy" (.-y n))
                                 (.attr labels "x" (.-x n))
                                 (.attr labels "y" (.-y n))))))))

(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:h3 "Edit this and watch it change! Omg wow so cool!"]
   [:svg {:id "viz" :width 500 :height 300}]])

(rd/render [hello-world]
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; Re-run visualization setup on code reload
  (create-visualization))

;; Initial call to draw the visualization
(create-visualization)
