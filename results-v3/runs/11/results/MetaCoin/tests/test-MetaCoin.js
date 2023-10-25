const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinKeymUP = await MetaCoin.new({from: accounts[5]});
		const uintxRTNzMa = BigInt("575")
		const addressA2MeJsO = accounts[4]
		const uintRcbctXv = BigInt("1869")
		const addressCF6rRMg = accounts[0]
		const boolK8XNlAq = await MetaCoinKeymUP.sendCoin.call(addressA2MeJsO, uintxRTNzMa, {from: accounts[5]});
		const boolLyGPMyH = await MetaCoinKeymUP.sendCoin.call(addressCF6rRMg, uintRcbctXv, {from: accounts[2]});

		assert.equal(boolK8XNlAq, true)
		assert.equal(boolLyGPMyH, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinqsorHGi = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintoXfVoXz = BigInt("1412")
		const addressoidovWZ = accounts[2]
		const uintIs0DYxF = BigInt("1858")
		const addressaYJ8GNe = accounts[0]
		const uintPlaARYx = BigInt("911")
		const addressvpoHFXc = accounts[4]
		const uintwjJvp1o = BigInt("1017")
		const addresstFnEos = accounts[0]
		const uintqooPdIg = BigInt("216")
		const addressOOo1Foq = accounts[0]
		const boolRGAV8R = await MetaCoinqsorHGi.sendCoin.call(addressoidovWZ, uintoXfVoXz, {from: accounts[2]});
		const boolB2fB2Gr = await MetaCoinqsorHGi.sendCoin.call(addressaYJ8GNe, uintIs0DYxF, {from: accounts[5]});
		const boolP4FJ9Gl = await MetaCoinqsorHGi.sendCoin.call(addressvpoHFXc, uintPlaARYx, {from: "0x0000000000000000000000000000000000000001"});
		const booliA9jgVu = await MetaCoinqsorHGi.sendCoin.call(addresstFnEos, uintwjJvp1o, {from: accounts[2]});
		const boolN5Tpnrs = await MetaCoinqsorHGi.sendCoin.call(addressOOo1Foq, uintqooPdIg, {from: accounts[3]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinapyNYvD = await MetaCoin.new({from: accounts[5]});
		const uintkv5K5W = BigInt("1028")
		const addressqQ0ht9g = accounts[2]
		const uintrIdFfPb = BigInt("814")
		const addressZfcxIX = accounts[1]
		const uintW6gXikt = BigInt("0")
		const addressLs3OYW = accounts[2]
		const uinteJbriKh = BigInt("204")
		const addressEwrK9qN = accounts[2]
		const uintowOAySz = BigInt("1517")
		const addressZDXKhsv = accounts[0]
		const boolQeD27sh = await MetaCoinapyNYvD.sendCoin.call(addressqQ0ht9g, uintkv5K5W, {from: accounts[3]});
		const boolUOkzEmv = await MetaCoinapyNYvD.sendCoin.call(addressZfcxIX, uintrIdFfPb, {from: accounts[2]});
		const boolUKDAf66 = await MetaCoinapyNYvD.sendCoin.call(addressLs3OYW, uintW6gXikt, {from: accounts[5]});
		const boolgyenx1t = await MetaCoinapyNYvD.sendCoin.call(addressEwrK9qN, uinteJbriKh, {from: accounts[4]});
		const boollcWzZRp = await MetaCoinapyNYvD.sendCoin.call(addressZDXKhsv, uintowOAySz, {from: accounts[2]});

		assert.equal(boolQeD27sh, false)
		assert.equal(boolUKDAf66, true)
		assert.equal(boolUOkzEmv, false)
		assert.equal(boolgyenx1t, false)
		assert.equal(boollcWzZRp, false)
	});
})