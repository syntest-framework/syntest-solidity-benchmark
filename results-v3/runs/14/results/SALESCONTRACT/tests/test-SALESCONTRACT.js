const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTb6CSffL = await SALESCONTRACT.new({from: accounts[1]});
		const addressXa9i5iF = accounts[1]
		const addressqQJ3VCV = accounts[3]
		await SALESCONTRACTb6CSffL.ff.call({from: accounts[1]});
		await SALESCONTRACTb6CSffL.ff.call({from: accounts[4]});
		const boolElQTJEI = await SALESCONTRACTb6CSffL.tokenSale.call(addressXa9i5iF, {from: accounts[2]});
		const addresstzamyB = await SALESCONTRACTb6CSffL.setToken.call(addressqQJ3VCV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTb6CSffL.ff.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTTJ6ucx = await SALESCONTRACT.new({from: accounts[5]});
		const uintvszYoAb = BigInt("1853")
		const addressbIYQPPt = accounts[3]
		const addresskao15lC = await SALESCONTRACTTJ6ucx._setSalesPool.call(addressbIYQPPt, uintvszYoAb, {from: accounts[1]});
		await SALESCONTRACTTJ6ucx.clearTokens.call({from: accounts[4]});

		await expect(SALESCONTRACTTJ6ucx._setSalesPool.call(addressbIYQPPt, uintvszYoAb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTrWsTIND = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressETwBOZq = accounts[4]
		const uintrYlrHWb = BigInt("59")
		const addresspIZFXJB = accounts[4]
		const addressW5n9rA = await SALESCONTRACTrWsTIND.setToken.call(addressETwBOZq, {from: accounts[1]});
		await SALESCONTRACTrWsTIND.clearTokens.call({from: accounts[1]});
		await SALESCONTRACTrWsTIND.clearTokens.call({from: accounts[5]});
		const addressCmKqQtv = await SALESCONTRACTrWsTIND._setSalesPool.call(addresspIZFXJB, uintrYlrHWb, {from: accounts[2]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTqLXx9I = await SALESCONTRACT.new({from: accounts[5]});
		const addressptWaDXH = "0x0000000000000000000000000000000000000001"
		const addressXWOadCL = accounts[4]
		const uintaSbvdOj = BigInt("98")
		const address64hRL8 = accounts[2]
		const addresslSXZFR5 = accounts[1]
		const boolFBA1lB9 = await SALESCONTRACTqLXx9I.tokenSale.call(addressptWaDXH, {from: accounts[3]});
		const boolBV3GxS = await SALESCONTRACTqLXx9I.tokenSale.call(addressXWOadCL, {from: accounts[2]});
		const uintmgOXQ4Y = await SALESCONTRACTqLXx9I._setStage.call(uintaSbvdOj, {from: accounts[4]});
		const boolJwIgTRQ = await SALESCONTRACTqLXx9I.tokenSale.call(address64hRL8, {from: accounts[2]});
		const addressr8YlhgL = await SALESCONTRACTqLXx9I.setToken.call(addresslSXZFR5, {from: accounts[0]});

		await expect(SALESCONTRACTqLXx9I.tokenSale.call(addressptWaDXH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTpFrVkjK = await SALESCONTRACT.new({from: accounts[1]});
		const addressDOgrm0W = accounts[1]
		const addressdhzgbXW = await SALESCONTRACTpFrVkjK.setToken.call(addressDOgrm0W, {from: accounts[1]});
		await SALESCONTRACTpFrVkjK.ff.call({from: accounts[5]});
		await SALESCONTRACTpFrVkjK.clearETH.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTpFrVkjK.ff.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTGlm4JmA = await SALESCONTRACT.new({from: accounts[2]});
		const uintW5bab5q = BigInt("1566")
		const addressqOGUmVn = "0x0000000000000000000000000000000000000001"
		const addressXxluXx7 = accounts[0]
		const addressevU6Af = await SALESCONTRACTGlm4JmA._setSalesPool.call(addressqOGUmVn, uintW5bab5q, {from: accounts[2]});
		const boolGO0o89 = await SALESCONTRACTGlm4JmA.tokenSale.call(addressXxluXx7, {from: accounts[0]});
		await SALESCONTRACTGlm4JmA.clearTokens.call({from: accounts[0]});

		await expect(SALESCONTRACTGlm4JmA.tokenSale.call(addressXxluXx7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTTJ6ucx = await SALESCONTRACT.new({from: accounts[5]});
		const uintpA1OAGq = BigInt("1853")
		const addressWp3OwGb = accounts[4]
		await SALESCONTRACTTJ6ucx.clearTokens.call({from: accounts[5]});
		const addresskao15lC = await SALESCONTRACTTJ6ucx._setSalesPool.call(addressWp3OwGb, uintpA1OAGq, {from: accounts[1]});

		await expect(SALESCONTRACTTJ6ucx.clearTokens.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTTJ6ucx = await SALESCONTRACT.new({from: accounts[5]});
		const uintSNrX3D8 = BigInt("1156")
		const uinti5Yd3r1 = BigInt("1832")
		const addressGeL3alK = accounts[3]
		const uintmLPvs2W = await SALESCONTRACTTJ6ucx._setStage.call(uintSNrX3D8, {from: accounts[5]});
		const addresskao15lC = await SALESCONTRACTTJ6ucx._setSalesPool.call(addressGeL3alK, uinti5Yd3r1, {from: accounts[1]});

		await expect(SALESCONTRACTTJ6ucx._setSalesPool.call(addressGeL3alK, uinti5Yd3r1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTTJ6ucx = await SALESCONTRACT.new({from: accounts[5]});
		const addressoqWBUi2 = accounts[0]
		const uintUSLIPWl = BigInt("1849")
		const addressGcYx1nN = accounts[3]
		await SALESCONTRACTTJ6ucx.clearETH.call({from: accounts[5]});
		const bools7UAMLk = await SALESCONTRACTTJ6ucx.tokenSale.call(addressoqWBUi2, {from: accounts[5]});
		const addresskao15lC = await SALESCONTRACTTJ6ucx._setSalesPool.call(addressGcYx1nN, uintUSLIPWl, {from: accounts[1]});

		await expect(SALESCONTRACTTJ6ucx.clearETH.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})