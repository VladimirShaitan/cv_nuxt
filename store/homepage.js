export const state = () => ({
  homePage: {},
});

export const mutations = {
  setHomePageData(state, data) {
    state.homePage = data;
  }

};

export const actions = {

  async getData({commit}) {
    const {data} = await this.$axios.get('/home-page');
    commit('setHomePageData', data);
  }

};

export const getters = {
  getHomePageData: state => state.homePage
}
