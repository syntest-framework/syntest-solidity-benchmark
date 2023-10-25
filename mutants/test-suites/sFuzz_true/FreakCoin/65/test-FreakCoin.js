const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinXSxxsIP = await FreakCoin.new({from: accounts[3]});
		const addressB58T3j8 = "0x0000000000000000000000000000000000000001"
		const uintbFXkYFM = BigInt("302")
		const addressyRjlVYq = accounts[0]
//		const addressDWBsd6v = await FreakCoinXSxxsIP.setUniswapAddress.call(addressB58T3j8, {from: accounts[0]});
//		const boolne8eaCP = await FreakCoinXSxxsIP.approve.call(addressyRjlVYq, uintbFXkYFM, {from: accounts[4]});
//		const uint256Q4txCh1 = await FreakCoinXSxxsIP.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ggluPkb = await FreakCoinXSxxsIP.totalSupply.call({from: accounts[0]});

		await expect(FreakCoinXSxxsIP.setUniswapAddress.call(addressB58T3j8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinomwevP0 = await FreakCoin.new({from: accounts[4]});
		const uintjsdsPsi = BigInt("1792")
		const addressB4ToFbp = accounts[2]
		const uintMw35U46 = BigInt("970")
		const addressTjZgeul = accounts[1]
		const addresso1ld6RJ = accounts[2]
//		const boolAnBNB9o = await FreakCoinomwevP0.transfer.call(addressB4ToFbp, uintjsdsPsi, {from: accounts[3]});
//		const boolJsB5QAX = await FreakCoinomwevP0.approve.call(addressTjZgeul, uintMw35U46, {from: accounts[2]});
//		const uint256BBcZxyl = await FreakCoinomwevP0.allUserBalances.call(addresso1ld6RJ, {from: accounts[3]});

		await expect(FreakCoinomwevP0.transfer.call(addressB4ToFbp, uintjsdsPsi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinfSPmeh7 = await FreakCoin.new({from: accounts[4]});
		const addressmfkK02 = accounts[5]
		const addressWWu2KHA = accounts[1]
		const uint256X29yAhj = await FreakCoinfSPmeh7.totalSupply.call({from: accounts[4]});
//		const uint256kOcPtEo = await FreakCoinfSPmeh7.allUserBalances.call(addressmfkK02, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HEoe9OI = await FreakCoinfSPmeh7.totalSupply.call({from: accounts[2]});
//		const addressoLEmnCP = await FreakCoinfSPmeh7.setUniswapAddress.call(addressWWu2KHA, {from: accounts[2]});

		assert.equal(uint256X29yAhj, BigInt("1000000"))
		await expect(FreakCoinfSPmeh7.allUserBalances.call(addressmfkK02, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCointT8XGE = await FreakCoin.new({from: accounts[4]});
		const uintrJQrCei = BigInt("1279")
		const addressG4JPd3l = accounts[2]
		const uintXN6ySM9 = BigInt("650")
		const addressd8p47qD = accounts[1]
		const uintPhgFJLl = BigInt("1224")
		const addressdIg1on = accounts[0]
		const addressvQ1q04w = accounts[0]
		const addressieUUtu = accounts[5]
		const addressSh5DEKs = accounts[3]
		const boolgimlo6b = await FreakCointT8XGE.approve.call(addressG4JPd3l, uintrJQrCei, {from: accounts[4]});
//		const booldenMTtV = await FreakCointT8XGE.transfer.call(addressd8p47qD, uintXN6ySM9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolsKJWTHd = await FreakCointT8XGE.transferFrom.call(addressvQ1q04w, addressdIg1on, uintPhgFJLl, {from: accounts[2]});
//		const uint256lYY3ge4 = await FreakCointT8XGE.allowance.call(addressSh5DEKs, addressieUUtu, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolgimlo6b, true)
		await expect(FreakCointT8XGE.transfer.call(addressd8p47qD, uintXN6ySM9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinIwkGYbt = await FreakCoin.new({from: accounts[1]});
		const uintGvcnQYo = BigInt("619")
		const addressZH5bNWJ = accounts[5]
		const addressmLxoMxN = accounts[2]
		const boolIw6gSal = await FreakCoinIwkGYbt.approve.call(addressZH5bNWJ, uintGvcnQYo, {from: accounts[2]});
		const uint256tte9VSY = await FreakCoinIwkGYbt.balanceOf.call(addressmLxoMxN, {from: accounts[4]});
		const addresszbADS4 = await FreakCoinIwkGYbt.uniswapAddress.call({from: accounts[5]});

		assert.equal(addresszbADS4, 0x0000000000000000000000000000000000000000)
		assert.equal(boolIw6gSal, true)
		assert.equal(uint256tte9VSY, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinOGRJ47 = await FreakCoin.new({from: accounts[0]});
		const uintSCuulmX = BigInt("1424")
		const addressw8HSR61 = "0x0000000000000000000000000000000000000001"
		const addressRmHk6Gx = accounts[0]
		const addressSV5Zmwl = accounts[3]
		const boole4V8mSF = await FreakCoinOGRJ47.approve.call(addressw8HSR61, uintSCuulmX, {from: accounts[0]});
		const uint256PjBCtLw = await FreakCoinOGRJ47.allowance.call(addressSV5Zmwl, addressRmHk6Gx, {from: accounts[3]});

		assert.equal(boole4V8mSF, true)
		assert.equal(uint256PjBCtLw, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinXSxxsIP = await FreakCoin.new({from: accounts[3]});
		const uint654bww = BigInt("216")
		const addressWNPYhTa = accounts[1]
		const uintSA31QZb = BigInt("1137")
		const addresswEOQpxX = accounts[3]
		const addressqa2ni9s = accounts[1]
		const addressROxDD0x = "0x0000000000000000000000000000000000000001"
		const uintlYYNPOc = BigInt("302")
		const addressvOmzDlM = accounts[1]
		const boolSpNOTwK = await FreakCoinXSxxsIP.transfer.call(addressWNPYhTa, uint654bww, {from: accounts[3]});
//		const booljoQOuBs = await FreakCoinXSxxsIP.transferFrom.call(addressqa2ni9s, addresswEOQpxX, uintSA31QZb, {from: accounts[1]});
//		const addressDWBsd6v = await FreakCoinXSxxsIP.setUniswapAddress.call(addressROxDD0x, {from: accounts[0]});
//		const boolne8eaCP = await FreakCoinXSxxsIP.approve.call(addressvOmzDlM, uintlYYNPOc, {from: accounts[4]});
//		const uint256ggluPkb = await FreakCoinXSxxsIP.totalSupply.call({from: accounts[0]});

		assert.equal(boolSpNOTwK, true)
		await expect(FreakCoinXSxxsIP.transferFrom.call(addressqa2ni9s, addresswEOQpxX, uintSA31QZb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoincyyG3gG = await FreakCoin.new({from: accounts[2]});
		const addresswVQVsKv = "0x0000000000000000000000000000000000000001"
		const addressynYPv4T = "0x0000000000000000000000000000000000000001"
		const addressw8WSKoh = accounts[2]
		const addressZrMwBAV = accounts[1]
		const addressxDZ2nPj = "0x0000000000000000000000000000000000000001"
		const addressRvNEGVg = accounts[0]
		const uintlPrD07w = BigInt("642")
		const addressfnnOBBY = accounts[0]
		const addressiFHxdBg = accounts[4]
		const uint256oHteSCe = await FreakCoincyyG3gG.balanceOf.call(addresswVQVsKv, {from: accounts[0]});
		const addressuOc9U2 = await FreakCoincyyG3gG.setUniswapAddress.call(addressynYPv4T, {from: accounts[2]});
		const uint256cvBSpNs = await FreakCoincyyG3gG.allowance.call(addressZrMwBAV, addressw8WSKoh, {from: accounts[5]});
		const uint256Bl8E6IP = await FreakCoincyyG3gG.allowance.call(addressRvNEGVg, addressxDZ2nPj, {from: accounts[1]});
//		const boolqcts71 = await FreakCoincyyG3gG.transferFrom.call(addressiFHxdBg, addressfnnOBBY, uintlPrD07w, {from: accounts[0]});

		assert.equal(uint256Bl8E6IP, BigInt("0"))
		assert.equal(uint256cvBSpNs, BigInt("0"))
		assert.equal(uint256oHteSCe, BigInt("0"))
		await expect(FreakCoincyyG3gG.transferFrom.call(addressiFHxdBg, addressfnnOBBY, uintlPrD07w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinOGRJ47 = await FreakCoin.new({from: accounts[0]});
		const addressrebNGn = accounts[1]
		const addressY1QxcG = accounts[3]
		const uintQufQCD2 = BigInt("73")
		const addressiSAPaCl = accounts[0]
		const uint256PjBCtLw = await FreakCoinOGRJ47.allowance.call(addressY1QxcG, addressrebNGn, {from: accounts[3]});
		const boolqvzCa3W = await FreakCoinOGRJ47.transfer.call(addressiSAPaCl, uintQufQCD2, {from: accounts[0]});

		assert.equal(boolqvzCa3W, true)
		assert.equal(uint256PjBCtLw, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoincBTNNN = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uinto9WwndW = BigInt("1273")
		const addressYTyz4wO = accounts[5]
		const uint256EkJ8KtO = await FreakCoincBTNNN.totalSupply.call({from: accounts[4]});
		const boolu4C12H5 = await FreakCoincBTNNN.transfer.call(addressYTyz4wO, uinto9WwndW, {from: accounts[2]});
	});
})