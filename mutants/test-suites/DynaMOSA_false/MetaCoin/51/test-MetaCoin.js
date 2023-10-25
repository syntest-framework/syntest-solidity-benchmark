const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinK65xf7M = await MetaCoin.new({from: accounts[0]});
		const uintIjOcITU = BigInt("1929")
		const addressLOyEXU = accounts[4]
		const uintTlArAHW = BigInt("796")
		const addresssFz8RMQ = accounts[5]
		const uintiFgC04 = BigInt("1462")
		const address1ksPOd = accounts[0]
		const uintU5BWhyh = BigInt("1630")
		const addressmtw2erL = accounts[4]
		const booltuhSUdF = await MetaCoinK65xf7M.sendCoin.call(addressLOyEXU, uintIjOcITU, {from: accounts[4]});
		const boolC2EbGRs = await MetaCoinK65xf7M.sendCoin.call(addresssFz8RMQ, uintTlArAHW, {from: accounts[0]});
		const boolcT20F4s = await MetaCoinK65xf7M.sendCoin.call(address1ksPOd, uintiFgC04, {from: accounts[3]});
		const boollaR7jKq = await MetaCoinK65xf7M.sendCoin.call(addressmtw2erL, uintU5BWhyh, {from: accounts[4]});

		assert.equal(boolC2EbGRs, true)
		assert.equal(boolcT20F4s, false)
		assert.equal(boollaR7jKq, false)
		assert.equal(booltuhSUdF, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinVfGRkKP = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQfBmtWD = BigInt("1615")
		const addresszvaizhd = accounts[0]
		const uintMP6428R = BigInt("1515")
		const addressZcAzK1G = accounts[1]
		const uintomlgrZI = BigInt("125")
		const addressnInjzHo = accounts[5]
		const uintJ2duteU = BigInt("667")
		const addressHAwr5xt = accounts[1]
		const uintu26KTbt = BigInt("1270")
		const addressYd6Bgfq = accounts[5]
		const boolarZmzFc = await MetaCoinVfGRkKP.sendCoin.call(addresszvaizhd, uintQfBmtWD, {from: "0x0000000000000000000000000000000000000001"});
		const boolhBNgRdA = await MetaCoinVfGRkKP.sendCoin.call(addressZcAzK1G, uintMP6428R, {from: accounts[1]});
		const boolrWK7WvO = await MetaCoinVfGRkKP.sendCoin.call(addressnInjzHo, uintomlgrZI, {from: accounts[2]});
		const booloOOwSr5 = await MetaCoinVfGRkKP.sendCoin.call(addressHAwr5xt, uintJ2duteU, {from: accounts[4]});
		const bools1xyGZV = await MetaCoinVfGRkKP.sendCoin.call(addressYd6Bgfq, uintu26KTbt, {from: accounts[5]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinJUXznO = await MetaCoin.new({from: accounts[4]});
		const uintJBioLa = BigInt("621")
		const addressJU1WeDQ = accounts[3]
		const uintMtuaD2P = BigInt("4")
		const addresseW58y7m = accounts[2]
		const uintJ9p4Zpm = BigInt("1832")
		const addressG02zyx = accounts[2]
		const uintOjwahL = BigInt("62")
		const addressSfi8jqv = accounts[2]
		const uintHUj8grE = BigInt("816")
		const addresskGikID = accounts[2]
		const boolGqy2DPw = await MetaCoinJUXznO.sendCoin.call(addressJU1WeDQ, uintJBioLa, {from: accounts[4]});
		const boolbfjRdqa = await MetaCoinJUXznO.sendCoin.call(addresseW58y7m, uintMtuaD2P, {from: accounts[4]});
		const boolfmXqKiT = await MetaCoinJUXznO.sendCoin.call(addressG02zyx, uintJ9p4Zpm, {from: accounts[0]});
		const boolxmSZJkB = await MetaCoinJUXznO.sendCoin.call(addressSfi8jqv, uintOjwahL, {from: accounts[4]});
		const boolM4bSq4e = await MetaCoinJUXznO.sendCoin.call(addresskGikID, uintHUj8grE, {from: accounts[3]});

		assert.equal(boolGqy2DPw, true)
		assert.equal(boolM4bSq4e, false)
		assert.equal(boolbfjRdqa, true)
		assert.equal(boolfmXqKiT, false)
		assert.equal(boolxmSZJkB, true)
	});
})