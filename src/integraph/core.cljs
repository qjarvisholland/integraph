

(ns integraph.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.dom :as rd]
              [cljsjs.d3]))

(enable-console-print!)
(println "This text is printed from src/integraph/core.cljs. Go ahead and edit it and see reloading in action.")

(defonce app-state (atom {:text "Hello world!"
                          :nodes [{:id "node1" :label "a"}
                                  {:id "node2" :label "b"}
                                  {:id "node3" :label "c"}
                                  {:id "node4" :label "d"}
                                  {:id "node5" :label "e"}]
                          :edges [{:source "node1" :target "node2"}
                                  {:source "node4" :target "node5"}
                                  {:source "node5" :target "node3"}
                                  {:source "node5" :target "node1"}]}))




(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:h3 "Edit this and watch it change! omg wow deeeeso dsscool yeah"]
   [:svag {:id "viz" :width 500 :height 300}]])



(rd/render [hello-world]
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering
             (. js/document (getElementById "viz")))
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

