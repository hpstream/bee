/**
 * Created by sunday on 04/05/2017.
 */
export default {
  /**
   * Method used to load a view
   *
   * @param main The name of the main view
   * @param view The name of the view
   */
  view(main, view) {
    return require(`./../views/${main}/${view}/${view}.vue`)
  },

  /**
   * Method used to load a layout
   *
   * @param layout The name of the layout
   * @returns {*} The layout
   */
  layout(layout) {
    return require(`./../layouts/${layout}/${layout}.vue`)
  },

  /**
   * Method used to load a component
   *
   * @param component The name of the component
   * @returns {*} The components
   */
  component(component) {
    return require(`./../components/${component}/${component}.vue`)
  }
}
