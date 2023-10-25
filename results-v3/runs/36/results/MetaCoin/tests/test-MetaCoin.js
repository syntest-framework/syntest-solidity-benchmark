const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinZ2112fO = await MetaCoin.new({from: accounts[1]});
		const uintBXhKjRu = BigInt("129")
		const addressjQghYhd = accounts[3]
		const uintZOn5WYF = BigInt("1190")
		const addresspu2c8S5 = accounts[3]
		const uintzErkIKa = BigInt("914")
		const addresskEE0uUB = "0x0000000000000000000000000000000000000001"
		const booley9lTYF = await MetaCoinZ2112fO.sendCoin.call(addressjQghYhd, uintBXhKjRu, {from: accounts[2]});
		const booljUrdEgU = await MetaCoinZ2112fO.sendCoin.call(addresspu2c8S5, uintZOn5WYF, {from: accounts[4]});
		const boolRJ9EqKZ = await MetaCoinZ2112fO.sendCoin.call(addresskEE0uUB, uintzErkIKa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRJ9EqKZ, false)
		assert.equal(booley9lTYF, false)
		assert.equal(booljUrdEgU, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinQH0qt5L = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintshsd1DJ = BigInt("1304")
		const addressKcGyd7Q = accounts[1]
		const uintjZgCQ9p = BigInt("1932")
		const addressXnSi91F = accounts[0]
		const boolqnWbmoQ = await MetaCoinQH0qt5L.sendCoin.call(addressKcGyd7Q, uintshsd1DJ, {from: accounts[4]});
		const boolwh1QU3B = await MetaCoinQH0qt5L.sendCoin.call(addressXnSi91F, uintjZgCQ9p, {from: accounts[0]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinDGIG9l = await MetaCoin.new({from: accounts[1]});
		const uintWNDGUyP = BigInt("1611")
		const addressyXBWaEO = accounts[2]
		const uintGAjzYJ4 = BigInt("121")
		const addresswm0EJVB = accounts[1]
		const uintFqnt9UZ = BigInt("240")
		const addressfKaU5U = accounts[3]
		const boolVPDnBb0 = await MetaCoinDGIG9l.sendCoin.call(addressyXBWaEO, uintWNDGUyP, {from: accounts[1]});
		const boolj6m06e5 = await MetaCoinDGIG9l.sendCoin.call(addresswm0EJVB, uintGAjzYJ4, {from: accounts[4]});
		const boolCfdTCoT = await MetaCoinDGIG9l.sendCoin.call(addressfKaU5U, uintFqnt9UZ, {from: accounts[3]});

		assert.equal(boolCfdTCoT, false)
		assert.equal(boolVPDnBb0, true)
		assert.equal(boolj6m06e5, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinDGIG9l = await MetaCoin.new({from: accounts[1]});
		const uintiddOx4R = BigInt("522")
		const addresseAQdRm4 = accounts[2]
		const uintQLCZqOL = BigInt("560")
		const addressWdmX2sL = accounts[5]
		const uintpq0LvaE = BigInt("1701")
		const addresscHc0Dn8 = accounts[1]
		const uintxBmSFNa = BigInt("1984")
		const addresshaQvWAQ = accounts[3]
		const uintXAv9Li = BigInt("482")
		const addressBzAfNo = accounts[5]
		const uintu1MyDq9 = BigInt("30")
		const addressQxKIWe2 = accounts[2]
		const uintjsSFHxz = BigInt("1409")
		const addressGIPKTC0 = accounts[4]
		const uintTgsqmMf = BigInt("1921")
		const addressGhneyiB = accounts[0]
		const uintudrlbks = BigInt("0")
		const addressbTOptk = accounts[2]
		const uintzWnnPQ = BigInt("240")
		const addressQ7Jt2s = accounts[3]
		const boolAI11FMQ = await MetaCoinDGIG9l.sendCoin.call(addresseAQdRm4, uintiddOx4R, {from: accounts[1]});
		const boolX91hnfg = await MetaCoinDGIG9l.sendCoin.call(addressWdmX2sL, uintQLCZqOL, {from: accounts[0]});
		const boolosJwVN6 = await MetaCoinDGIG9l.sendCoin.call(addresscHc0Dn8, uintpq0LvaE, {from: accounts[4]});
		const boolC1HYDv7 = await MetaCoinDGIG9l.sendCoin.call(addresshaQvWAQ, uintxBmSFNa, {from: accounts[1]});
		const bool67giSK = await MetaCoinDGIG9l.sendCoin.call(addressBzAfNo, uintXAv9Li, {from: "0x0000000000000000000000000000000000000001"});
		const boolnflxJAC = await MetaCoinDGIG9l.sendCoin.call(addressQxKIWe2, uintu1MyDq9, {from: accounts[1]});
		const boolRY2f1c4 = await MetaCoinDGIG9l.sendCoin.call(addressGIPKTC0, uintjsSFHxz, {from: accounts[0]});
		const boolXN2F1jj = await MetaCoinDGIG9l.sendCoin.call(addressGhneyiB, uintTgsqmMf, {from: accounts[2]});
		const booldgqtSMP = await MetaCoinDGIG9l.sendCoin.call(addressbTOptk, uintudrlbks, {from: accounts[5]});
		const boolCfdTCoT = await MetaCoinDGIG9l.sendCoin.call(addressQ7Jt2s, uintzWnnPQ, {from: accounts[3]});

		assert.equal(bool67giSK, false)
		assert.equal(boolAI11FMQ, true)
		assert.equal(boolC1HYDv7, true)
		assert.equal(boolCfdTCoT, false)
		assert.equal(boolRY2f1c4, false)
		assert.equal(boolX91hnfg, false)
		assert.equal(boolXN2F1jj, false)
		assert.equal(booldgqtSMP, true)
		assert.equal(boolnflxJAC, true)
		assert.equal(boolosJwVN6, false)
	});
})