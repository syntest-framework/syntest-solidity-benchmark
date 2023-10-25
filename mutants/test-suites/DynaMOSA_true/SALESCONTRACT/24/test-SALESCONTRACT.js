const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTOErP4GT = await SALESCONTRACT.new({from: accounts[4]});
		const addressy7Cdx79 = accounts[2]
		const addressnCzO3tD = accounts[0]
		const addressCsDWFBD = accounts[3]
//		await SALESCONTRACTOErP4GT.clearTokens.call({from: accounts[5]});
//		const boolItHSCYe = await SALESCONTRACTOErP4GT.tokenSale.call(addressy7Cdx79, {from: accounts[3]});
//		const boolDfIJM0 = await SALESCONTRACTOErP4GT.tokenSale.call(addressnCzO3tD, {from: accounts[1]});
//		const addressYX11aJl = await SALESCONTRACTOErP4GT.setToken.call(addressCsDWFBD, {from: accounts[4]});
//		await SALESCONTRACTOErP4GT.ff.call({from: accounts[4]});

		await expect(SALESCONTRACTOErP4GT.clearTokens.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTAOiBJZ = await SALESCONTRACT.new({from: accounts[2]});
		const addressPgUxi4b = accounts[3]
		const addressIEeIEIL = accounts[5]
		const addressFIJrVpq = "0x0000000000000000000000000000000000000001"
		const addressB7lY02 = "0x0000000000000000000000000000000000000001"
		const addressv8dMWju = await SALESCONTRACTAOiBJZ.setToken.call(addressPgUxi4b, {from: accounts[2]});
//		const boolsXjAdx7 = await SALESCONTRACTAOiBJZ.tokenSale.call(addressIEeIEIL, {from: accounts[4]});
//		await SALESCONTRACTAOiBJZ.ff.call({from: accounts[1]});
//		const boolyxIw5De = await SALESCONTRACTAOiBJZ.tokenSale.call(addressFIJrVpq, {from: accounts[4]});
//		const address1zySrJ = await SALESCONTRACTAOiBJZ.setToken.call(addressB7lY02, {from: accounts[2]});

		await expect(SALESCONTRACTAOiBJZ.tokenSale.call(addressIEeIEIL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTslEaVBz = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCm7b91C = BigInt("71")
		const addressJm19L6w = accounts[0]
		const addressWHnq8sf = accounts[4]
		await SALESCONTRACTslEaVBz.clearETH.call({from: accounts[2]});
		await SALESCONTRACTslEaVBz.clearETH.call({from: accounts[5]});
		const addressV8NITnA = await SALESCONTRACTslEaVBz._setSalesPool.call(addressJm19L6w, uintCm7b91C, {from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTslEaVBz.clearTokens.call({from: accounts[2]});
		const addressS1Jlfe = await SALESCONTRACTslEaVBz.setToken.call(addressWHnq8sf, {from: accounts[2]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTwlBIv8k = await SALESCONTRACT.new({from: accounts[4]});
		const uintkMG05oD = BigInt("460")
		const addressrGW4rmS = accounts[0]
		const uintOOQUW4L = BigInt("869")
		const addressc7Vvuhz = accounts[3]
		const addressTPrHw26 = accounts[4]
		const uinttPydmzw = BigInt("1719")
		const addressrDjHluG = await SALESCONTRACTwlBIv8k._setSalesPool.call(addressrGW4rmS, uintkMG05oD, {from: accounts[4]});
//		const addressmqTQlod = await SALESCONTRACTwlBIv8k._setSalesPool.call(addressc7Vvuhz, uintOOQUW4L, {from: accounts[3]});
//		const addressYzRspMx = await SALESCONTRACTwlBIv8k.setToken.call(addressTPrHw26, {from: accounts[2]});
//		const uintmpbrpNt = await SALESCONTRACTwlBIv8k._setStage.call(uinttPydmzw, {from: "0x0000000000000000000000000000000000000001"});
//		await SALESCONTRACTwlBIv8k.clearTokens.call({from: accounts[1]});
//		await SALESCONTRACTwlBIv8k.clearTokens.call({from: accounts[4]});

		await expect(SALESCONTRACTwlBIv8k._setSalesPool.call(addressc7Vvuhz, uintOOQUW4L, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTAOiBJZ = await SALESCONTRACT.new({from: accounts[2]});
		const addresskxYrvxq = accounts[3]
		const addressyYh7g6x = accounts[7]
		const addressfA2hOXq = "0x0000000000000000000000000000000000000001"
		const addressG1DhZxN = "0x0000000000000000000000000000000000000001"
//		await SALESCONTRACTAOiBJZ.ff.call({from: accounts[3]});
//		const addressv8dMWju = await SALESCONTRACTAOiBJZ.setToken.call(addresskxYrvxq, {from: accounts[2]});
//		const boolsXjAdx7 = await SALESCONTRACTAOiBJZ.tokenSale.call(addressyYh7g6x, {from: accounts[4]});
//		await SALESCONTRACTAOiBJZ.ff.call({from: accounts[1]});
//		const boolyxIw5De = await SALESCONTRACTAOiBJZ.tokenSale.call(addressfA2hOXq, {from: accounts[4]});
//		const address1zySrJ = await SALESCONTRACTAOiBJZ.setToken.call(addressG1DhZxN, {from: accounts[2]});

		await expect(SALESCONTRACTAOiBJZ.ff.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTm1nKMuV = await SALESCONTRACT.new({from: accounts[1]});
		const uintclN7NU5 = BigInt("47")
		const addresswrsKMGO = accounts[0]
		const addressLLscCGH = accounts[6]
		const addressGqRWRDb = accounts[3]
		const addressAaGjqA6 = accounts[1]
		const uintGeExpUi = BigInt("563")
		const addressuiqswr = accounts[4]
		const uinttBmS2f = await SALESCONTRACTm1nKMuV._setStage.call(uintclN7NU5, {from: accounts[1]});
//		await SALESCONTRACTm1nKMuV.clearTokens.call({from: accounts[3]});
//		const boolM51mGaN = await SALESCONTRACTm1nKMuV.tokenSale.call(addresswrsKMGO, {from: accounts[2]});
//		const addressbywh0PR = await SALESCONTRACTm1nKMuV.setToken.call(addressLLscCGH, {from: accounts[2]});
//		const boolKPb2dl0 = await SALESCONTRACTm1nKMuV.tokenSale.call(addressGqRWRDb, {from: accounts[4]});
//		await SALESCONTRACTm1nKMuV.ff.call({from: accounts[2]});
//		const boolqqQXbJ = await SALESCONTRACTm1nKMuV.tokenSale.call(addressAaGjqA6, {from: accounts[5]});
//		const addressHUTYzkC = await SALESCONTRACTm1nKMuV._setSalesPool.call(addressuiqswr, uintGeExpUi, {from: accounts[0]});

		await expect(SALESCONTRACTm1nKMuV.clearTokens.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTAt203d2 = await SALESCONTRACT.new({from: accounts[4]});
		const addressQIlLize = accounts[1]
//		await SALESCONTRACTAt203d2.clearETH.call({from: accounts[4]});
//		await SALESCONTRACTAt203d2.ff.call({from: accounts[1]});
//		const boolKaLsfUh = await SALESCONTRACTAt203d2.tokenSale.call(addressQIlLize, {from: accounts[5]});
//		await SALESCONTRACTAt203d2.clearETH.call({from: accounts[1]});

		await expect(SALESCONTRACTAt203d2.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTF4T4nO3 = await SALESCONTRACT.new({from: accounts[4]});
		const uintiWKUfBs = BigInt("1231")
		const addresse3zsiQO = accounts[0]
		const addressAGZBcRq = accounts[1]
//		await SALESCONTRACTF4T4nO3.clearTokens.call({from: accounts[4]});
//		await SALESCONTRACTF4T4nO3.clearTokens.call({from: accounts[5]});
//		const addresso93Nque = await SALESCONTRACTF4T4nO3._setSalesPool.call(addresse3zsiQO, uintiWKUfBs, {from: accounts[2]});
//		await SALESCONTRACTF4T4nO3.clearTokens.call({from: accounts[1]});
//		const addressOMlelBI = await SALESCONTRACTF4T4nO3.setToken.call(addressAGZBcRq, {from: accounts[0]});

		await expect(SALESCONTRACTF4T4nO3.clearTokens.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})