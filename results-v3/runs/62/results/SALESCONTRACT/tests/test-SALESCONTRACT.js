const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTYZ1zoa1 = await SALESCONTRACT.new({from: accounts[0]});
		const uintg0aPvUh = BigInt("34")
		const uintYJzUZN = BigInt("1619")
		const address1hyMlx = accounts[3]
		await SALESCONTRACTYZ1zoa1.clearTokens.call({from: accounts[4]});
		const uintrfWv4j = await SALESCONTRACTYZ1zoa1._setStage.call(uintg0aPvUh, {from: accounts[3]});
		const uintlDLnzAq = await SALESCONTRACTYZ1zoa1._setStage.call(uintYJzUZN, {from: accounts[4]});
		await SALESCONTRACTYZ1zoa1.ff.call({from: accounts[1]});
		const addressV3bii4q = await SALESCONTRACTYZ1zoa1.setToken.call(address1hyMlx, {from: accounts[1]});

		await expect(SALESCONTRACTYZ1zoa1.clearTokens.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTWORwaho = await SALESCONTRACT.new({from: accounts[5]});
		const addressIEevv4 = accounts[0]
		const uintA0c6gk9 = BigInt("309")
		const uintrT1Rs03 = BigInt("1593")
		const addressJ17I0zg = accounts[2]
		const addressvGRe1yy = accounts[5]
		const addressY3OwUiI = accounts[0]
		const boolPaCCil8 = await SALESCONTRACTWORwaho.tokenSale.call(addressIEevv4, {from: accounts[0]});
		const uintvEZ9nfb = await SALESCONTRACTWORwaho._setStage.call(uintA0c6gk9, {from: accounts[3]});
		const addressu55anro = await SALESCONTRACTWORwaho._setSalesPool.call(addressJ17I0zg, uintrT1Rs03, {from: accounts[3]});
		const addressGGhGwJ = await SALESCONTRACTWORwaho.setToken.call(addressvGRe1yy, {from: accounts[0]});
		const addressfR1alWV = await SALESCONTRACTWORwaho.setToken.call(addressY3OwUiI, {from: accounts[2]});
		await SALESCONTRACTWORwaho.clearETH.call({from: accounts[4]});

		await expect(SALESCONTRACTWORwaho.tokenSale.call(addressIEevv4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTzlIdeaD = await SALESCONTRACT.new({from: accounts[2]});
		await SALESCONTRACTzlIdeaD.ff.call({from: accounts[3]});
		await SALESCONTRACTzlIdeaD.clearTokens.call({from: accounts[3]});
		await SALESCONTRACTzlIdeaD.clearTokens.call({from: accounts[4]});

		await expect(SALESCONTRACTzlIdeaD.ff.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTzlIdeaD = await SALESCONTRACT.new({from: accounts[2]});
		const uintobCd0UK = BigInt("988")
		const addressvO2szSF = accounts[1]
		const addresspfRtLhD = await SALESCONTRACTzlIdeaD._setSalesPool.call(addressvO2szSF, uintobCd0UK, {from: accounts[2]});
		await SALESCONTRACTzlIdeaD.ff.call({from: accounts[3]});
		await SALESCONTRACTzlIdeaD.clearTokens.call({from: accounts[3]});
		await SALESCONTRACTzlIdeaD.clearTokens.call({from: accounts[4]});

		await expect(SALESCONTRACTzlIdeaD.ff.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTzlIdeaD = await SALESCONTRACT.new({from: accounts[2]});
		const uintFIP8xlU = BigInt("174")
		const uintkAvgVWT = await SALESCONTRACTzlIdeaD._setStage.call(uintFIP8xlU, {from: accounts[2]});
		await SALESCONTRACTzlIdeaD.ff.call({from: accounts[3]});
		await SALESCONTRACTzlIdeaD.clearTokens.call({from: accounts[4]});

		await expect(SALESCONTRACTzlIdeaD.ff.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTXqP7r45 = await SALESCONTRACT.new({from: accounts[4]});
		const uintpcYt8gr = BigInt("1715")
		const addressLBLn5E7 = accounts[3]
		const addressUoK1Unw = accounts[5]
		const addressq6JSP1i = await SALESCONTRACTXqP7r45._setSalesPool.call(addressLBLn5E7, uintpcYt8gr, {from: accounts[4]});
		const addressHYVkwYM = await SALESCONTRACTXqP7r45.setToken.call(addressUoK1Unw, {from: accounts[4]});
		await SALESCONTRACTXqP7r45.clearETH.call({from: accounts[3]});

		await expect(SALESCONTRACTXqP7r45.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTX6JjcAY = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressdcsr7Q0 = accounts[2]
		const addressYo3uNy6 = accounts[0]
		await SALESCONTRACTX6JjcAY.clearTokens.call({from: accounts[4]});
		const boolaFvl7qn = await SALESCONTRACTX6JjcAY.tokenSale.call(addressdcsr7Q0, {from: accounts[4]});
		await SALESCONTRACTX6JjcAY.clearTokens.call({from: accounts[3]});
		const boolzI9243K = await SALESCONTRACTX6JjcAY.tokenSale.call(addressYo3uNy6, {from: accounts[4]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTXqP7r45 = await SALESCONTRACT.new({from: accounts[4]});
		const addressP9OO4ik = accounts[1]
		await SALESCONTRACTXqP7r45.clearTokens.call({from: accounts[4]});
		const boolBRlGnrr = await SALESCONTRACTXqP7r45.tokenSale.call(addressP9OO4ik, {from: accounts[3]});
		await SALESCONTRACTXqP7r45.clearETH.call({from: accounts[3]});

		await expect(SALESCONTRACTXqP7r45.clearTokens.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTXqP7r45 = await SALESCONTRACT.new({from: accounts[4]});
		await SALESCONTRACTXqP7r45.clearETH.call({from: accounts[4]});
		await SALESCONTRACTXqP7r45.clearETH.call({from: accounts[3]});

		await expect(SALESCONTRACTXqP7r45.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})