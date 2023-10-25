const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3k3Y6H6l = await Core_Fi_V3.new({from: accounts[1]});
		const uintmXdnq9 = BigInt("1862")
		const addressN58oVlP = accounts[1]
		const addresseCfRGi5 = accounts[1]
		const addressuq0DSf3 = accounts[2]
		const addressK3EOjHJ = accounts[4]
		const addressNWz1g9 = accounts[0]
		const boolqON4JgO = await Core_Fi_V3k3Y6H6l.transfer.call(addressN58oVlP, uintmXdnq9, {from: accounts[2]});
		const uintP4i7k5O = await Core_Fi_V3k3Y6H6l.allowance.call(addressuq0DSf3, addresseCfRGi5, {from: accounts[0]});
		const uintn3RmuHK = await Core_Fi_V3k3Y6H6l.allowance.call(addressNWz1g9, addressK3EOjHJ, {from: accounts[4]});

		assert.equal(boolqON4JgO, false)
		assert.equal(uintP4i7k5O, BigInt("0"))
		assert.equal(uintn3RmuHK, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3s1jATI0 = await Core_Fi_V3.new({from: accounts[4]});
		const uintVvuMf0F = BigInt("113")
		const addressBr6k1k0 = accounts[4]
		const addressvYdNj6z = accounts[5]
		const uintx1QGets = BigInt("135")
		const addressSpE3emy = "0x0000000000000000000000000000000000000001"
		const addresskeNXsNv = accounts[0]
		const addressf2r7pJE = accounts[1]
		const boolm76rbIj = await Core_Fi_V3s1jATI0.transferFrom.call(addressvYdNj6z, addressBr6k1k0, uintVvuMf0F, {from: accounts[3]});
		const boole5dryR4 = await Core_Fi_V3s1jATI0.transfer.call(addressSpE3emy, uintx1QGets, {from: accounts[3]});
		const uintFFWBBC = await Core_Fi_V3s1jATI0.allowance.call(addressf2r7pJE, addresskeNXsNv, {from: accounts[3]});

		assert.equal(boole5dryR4, false)
		assert.equal(boolm76rbIj, false)
		assert.equal(uintFFWBBC, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3CVdUrZr = await Core_Fi_V3.new({from: accounts[4]});
		const addressbNuUOdB = accounts[3]
		const uintzkVGOKW = BigInt("219")
		const addressiSIPwob = accounts[3]
		const addresstsyk9aO = accounts[1]
		const uintPqWWaSJ = BigInt("736")
		const address4cnGOW = accounts[1]
		const uintqXS19j = BigInt("1253")
		const addressOt4rV7v = accounts[0]
		const uint256QnrA4hQ = await Core_Fi_V3CVdUrZr.balanceOf.call(addressbNuUOdB, {from: accounts[0]});
		const boolv0dhxup = await Core_Fi_V3CVdUrZr.transferFrom.call(addresstsyk9aO, addressiSIPwob, uintzkVGOKW, {from: accounts[5]});
		const boolRumQa1F = await Core_Fi_V3CVdUrZr.transfer.call(address4cnGOW, uintPqWWaSJ, {from: accounts[4]});
		const uint256q52liZ1 = await Core_Fi_V3CVdUrZr.totalSupply.call({from: accounts[1]});
		const boolhddYfKC = await Core_Fi_V3CVdUrZr.transfer.call(addressOt4rV7v, uintqXS19j, {from: accounts[2]});

		assert.equal(boolRumQa1F, true)
		assert.equal(boolhddYfKC, false)
		assert.equal(boolv0dhxup, false)
		assert.equal(uint256QnrA4hQ, BigInt("0"))
		assert.equal(uint256q52liZ1, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3dKrL9Sg = await Core_Fi_V3.new({from: accounts[1]});
		const uinteqtoXmS = BigInt("409")
		const addresswgIN8p2 = accounts[0]
		const addressP16PLHy = accounts[2]
		const addressoxIdNg6 = accounts[1]
		const addressPYH3pAa = accounts[4]
		const addressTnviOqK = accounts[0]
		const addressfD2YU8o = accounts[1]
		const uintACtvRuF = BigInt("109")
		const addressbV4oHGJ = accounts[4]
		const uintkPAP5fI = BigInt("2001")
		const address2ambS0 = accounts[2]
		const addressdiqHuna = accounts[3]
		const uintqEO0zMS = BigInt("1550")
		const addressHmqLgOp = accounts[3]
		const boolRMm5JSk = await Core_Fi_V3dKrL9Sg.transferFrom.call(addressP16PLHy, addresswgIN8p2, uinteqtoXmS, {from: accounts[1]});
		const uintuUo2Eq2 = await Core_Fi_V3dKrL9Sg.allowance.call(addressPYH3pAa, addressoxIdNg6, {from: accounts[1]});
		const uintk4YQV5y = await Core_Fi_V3dKrL9Sg.allowance.call(addressfD2YU8o, addressTnviOqK, {from: accounts[2]});
		const boolapLFgoM = await Core_Fi_V3dKrL9Sg.approve.call(addressbV4oHGJ, uintACtvRuF, {from: accounts[1]});
		const boolZVjFxFp = await Core_Fi_V3dKrL9Sg.transferFrom.call(addressdiqHuna, address2ambS0, uintkPAP5fI, {from: accounts[3]});
		const boolvFoPAGJ = await Core_Fi_V3dKrL9Sg.transfer.call(addressHmqLgOp, uintqEO0zMS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRMm5JSk, false)
		assert.equal(boolZVjFxFp, false)
		assert.equal(boolapLFgoM, true)
		assert.equal(boolvFoPAGJ, false)
		assert.equal(uintk4YQV5y, BigInt("0"))
		assert.equal(uintuUo2Eq2, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3oZU2wV = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQONYfRv = BigInt("1276")
		const addressRtZQ8iG = accounts[1]
		const addressyLcUVC7 = accounts[3]
		const addressUnNF3qD = accounts[3]
		const uintBJLDycI = BigInt("1850")
		const addressZMxaEzW = accounts[3]
		const uintbxzHPa1 = BigInt("454")
		const addressItikTYs = accounts[1]
		const uint256eQRcBoj = await Core_Fi_V3oZU2wV.totalSupply.call({from: accounts[3]});
		const boolZmtzZf5 = await Core_Fi_V3oZU2wV.transferFrom.call(addressyLcUVC7, addressRtZQ8iG, uintQONYfRv, {from: accounts[2]});
		const uint256RoK1zLh = await Core_Fi_V3oZU2wV.totalSupply.call({from: accounts[1]});
		const uint256b7dq2kW = await Core_Fi_V3oZU2wV.balanceOf.call(addressUnNF3qD, {from: accounts[1]});
		const booluir1Yqa = await Core_Fi_V3oZU2wV.transfer.call(addressZMxaEzW, uintBJLDycI, {from: accounts[2]});
		const boolINAXuBe = await Core_Fi_V3oZU2wV.transfer.call(addressItikTYs, uintbxzHPa1, {from: accounts[1]});
	});
})