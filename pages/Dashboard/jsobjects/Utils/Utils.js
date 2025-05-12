export default {
  baseUrl: "https://testnetfaucet-api.fabriclabs.org",
	
	 getBaseUrl() {
    return this.baseUrl || appsmith.store.baseUrl;
  }
}