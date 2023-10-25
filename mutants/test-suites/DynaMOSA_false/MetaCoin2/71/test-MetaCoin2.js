const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2H9LjvlN = await MetaCoin2.new({from: accounts[4]});
		const address8hgphV = accounts[5]
		const addressd3ed9Hd = "0x0000000000000000000000000000000000000001"
		const uintkLciKfh = await MetaCoin2H9LjvlN.getBalance.call(address8hgphV, {from: accounts[0]});
		const uinthsQgY1s = await MetaCoin2H9LjvlN.getBalance.call(addressd3ed9Hd, {from: accounts[2]});

		assert.equal(uinthsQgY1s, BigInt("0"))
		assert.equal(uintkLciKfh, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2PDYjlpq = await MetaCoin2.new({from: accounts[5]});
		const addresslZhgE8 = accounts[0]
		const addressCEmptAl = accounts[5]
		const addressgSiWOAU = accounts[1]
		const addressl1QlrA = accounts[2]
		const addresskugP1KP = accounts[1]
		const addressDcczun = accounts[1]
		const uintRcrgghi = await MetaCoin2PDYjlpq.getBalance.call(addresslZhgE8, {from: accounts[0]});
		const uintxj06kiv = await MetaCoin2PDYjlpq.getBalanceInEth.call(addressCEmptAl, {from: accounts[5]});
		const uintfZqYEdH = await MetaCoin2PDYjlpq.getBalanceInEth.call(addressgSiWOAU, {from: accounts[0]});
		const uintoyVBpKn = await MetaCoin2PDYjlpq.getBalanceInEth.call(addressl1QlrA, {from: accounts[0]});
		const uintfLBvKZw = await MetaCoin2PDYjlpq.getBalance.call(addresskugP1KP, {from: accounts[2]});
		const uintPoXrjPG = await MetaCoin2PDYjlpq.getBalance.call(addressDcczun, {from: accounts[4]});

		assert.equal(uintPoXrjPG, BigInt("0"))
		assert.equal(uintRcrgghi, BigInt("0"))
		assert.equal(uintfLBvKZw, BigInt("0"))
		assert.equal(uintfZqYEdH, BigInt("0"))
		assert.equal(uintoyVBpKn, BigInt("0"))
		assert.equal(uintxj06kiv, BigInt("20000"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2tV5fRuR = await MetaCoin2.new({from: accounts[5]});
		const addressMvLyTm = accounts[3]
		const addressV8mKqw = "0x0000000000000000000000000000000000000001"
		const uintTJwkZwx = BigInt("1945")
		const addressFS9pWc = accounts[3]
		const addressO8prx6D = accounts[5]
		const uinth9of9lZ = await MetaCoin2tV5fRuR.getBalanceInEth.call(addressMvLyTm, {from: accounts[0]});
		const uinttNh5esi = await MetaCoin2tV5fRuR.getBalanceInEth.call(addressV8mKqw, {from: accounts[0]});
		const boolydR54Yq = await MetaCoin2tV5fRuR.sendCoin.call(addressFS9pWc, uintTJwkZwx, {from: accounts[5]});
		const uintfjpuAA4 = await MetaCoin2tV5fRuR.getBalanceInEth.call(addressO8prx6D, {from: accounts[0]});

		assert.equal(boolydR54Yq, true)
		assert.equal(uintfjpuAA4, BigInt("20000"))
		assert.equal(uinth9of9lZ, BigInt("0"))
		assert.equal(uinttNh5esi, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2tL8js6B = await MetaCoin2.new({from: accounts[0]});
		const addressapDMLvX = accounts[0]
		const addressVzhxWh1 = accounts[2]
		const addressgjCoGFS = accounts[2]
		const addressinlSv4p = "0x0000000000000000000000000000000000000001"
		const uintLaZdPVR = BigInt("1371")
		const addressWaMEIdc = accounts[3]
		const uintHRjRM7l = await MetaCoin2tL8js6B.getBalanceInEth.call(addressapDMLvX, {from: accounts[4]});
		const uintMdxeCeb = await MetaCoin2tL8js6B.getBalance.call(addressVzhxWh1, {from: accounts[4]});
		const uintGvhklfE = await MetaCoin2tL8js6B.getBalance.call(addressgjCoGFS, {from: accounts[4]});
		const uintmQAUtig = await MetaCoin2tL8js6B.getBalanceInEth.call(addressinlSv4p, {from: accounts[0]});
		const boolFBpXsGa = await MetaCoin2tL8js6B.sendCoin.call(addressWaMEIdc, uintLaZdPVR, {from: accounts[4]});

		assert.equal(boolFBpXsGa, false)
		assert.equal(uintGvhklfE, BigInt("0"))
		assert.equal(uintHRjRM7l, BigInt("20000"))
		assert.equal(uintMdxeCeb, BigInt("0"))
		assert.equal(uintmQAUtig, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin27BDEXO = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressafMCugl = accounts[0]
		const addressk6MBzTQ = accounts[2]
		const addressCmPOVuG = accounts[3]
		const addressnfz0O0 = accounts[4]
		const addressLnVHYfE = accounts[4]
		const uintdjQXJuS = await MetaCoin27BDEXO.getBalanceInEth.call(addressafMCugl, {from: accounts[3]});
		const uintWmOWMGI = await MetaCoin27BDEXO.getBalance.call(addressk6MBzTQ, {from: accounts[3]});
		const uintIcN29Hy = await MetaCoin27BDEXO.getBalance.call(addressCmPOVuG, {from: accounts[0]});
		const uintJ9t4SLe = await MetaCoin27BDEXO.getBalanceInEth.call(addressnfz0O0, {from: accounts[3]});
		const uintaWyNdVc = await MetaCoin27BDEXO.getBalance.call(addressLnVHYfE, {from: accounts[1]});
	});
})