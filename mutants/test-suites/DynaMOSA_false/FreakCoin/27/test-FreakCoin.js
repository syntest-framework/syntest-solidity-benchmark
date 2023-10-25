const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinvQXWEsY = await FreakCoin.new({from: accounts[2]});
		const addressfrLbVBq = accounts[1]
		const uintWSPZevD = BigInt("1844")
		const addressc380xN0 = accounts[2]
		const addresseEPdXW0 = accounts[4]
		const uintuKHVGTm = BigInt("1065")
		const addressQGTvzJV = accounts[2]
		const addressTHtSGQm = accounts[3]
		const addressfcIQGWq = await FreakCoinvQXWEsY.uniswapAddress.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressQcqmggG = await FreakCoinvQXWEsY.setUniswapAddress.call(addressfrLbVBq, {from: accounts[4]});
//		const boolVPKnBt1 = await FreakCoinvQXWEsY.transfer.call(addressc380xN0, uintWSPZevD, {from: accounts[4]});
//		const addresshI1gTyX = await FreakCoinvQXWEsY.setUniswapAddress.call(addresseEPdXW0, {from: accounts[3]});
//		const boolpzYVHH6 = await FreakCoinvQXWEsY.transferFrom.call(addressTHtSGQm, addressQGTvzJV, uintuKHVGTm, {from: accounts[3]});

		assert.equal(addressfcIQGWq, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinvQXWEsY.setUniswapAddress.call(addressfrLbVBq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinGKl8fL2 = await FreakCoin.new({from: accounts[3]});
		const addresszoGSTtw = accounts[5]
		const addressW6d0D0P = "0x0000000000000000000000000000000000000001"
		const addressWkWxYer = accounts[0]
		const addresstO6QpQ2 = accounts[3]
		const addresswmuO5Z3 = accounts[5]
		const addressRpfc954 = accounts[2]
		const addressjMEaP6g = accounts[2]
		const addressHKiR7s = accounts[5]
		const addressMJkzmAM = accounts[1]
		const uint256E1RcDi = await FreakCoinGKl8fL2.allowance.call(addressW6d0D0P, addresszoGSTtw, {from: accounts[4]});
		const uint256DeW480U = await FreakCoinGKl8fL2.balanceOf.call(addressWkWxYer, {from: accounts[5]});
		const uint256Om97Ewp = await FreakCoinGKl8fL2.allowance.call(addresswmuO5Z3, addresstO6QpQ2, {from: accounts[2]});
		const uint256MyQw0TD = await FreakCoinGKl8fL2.allowance.call(addressjMEaP6g, addressRpfc954, {from: accounts[2]});
		const uint256S8K8hA9 = await FreakCoinGKl8fL2.allowance.call(addressMJkzmAM, addressHKiR7s, {from: accounts[2]});

		assert.equal(uint256DeW480U, BigInt("0"))
		assert.equal(uint256E1RcDi, BigInt("0"))
		assert.equal(uint256MyQw0TD, BigInt("0"))
		assert.equal(uint256Om97Ewp, BigInt("0"))
		assert.equal(uint256S8K8hA9, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoincu77Yw0 = await FreakCoin.new({from: accounts[3]});
		const uintaK79PeW = BigInt("1576")
		const addressjgq24S9 = accounts[2]
		const addressS6SAMKs = accounts[0]
		const addressCJlesns = accounts[2]
		const boolvxWIBMZ = await FreakCoincu77Yw0.approve.call(addressjgq24S9, uintaK79PeW, {from: accounts[3]});
		const uint256M483c2b = await FreakCoincu77Yw0.allowance.call(addressCJlesns, addressS6SAMKs, {from: accounts[3]});

		assert.equal(boolvxWIBMZ, true)
		assert.equal(uint256M483c2b, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinPNHqWyV = await FreakCoin.new({from: accounts[0]});
		const uintqrgN15O = BigInt("1611")
		const addressGUAjgo7 = accounts[4]
		const addresscsLBU0h = accounts[4]
		const uintO0v4jQ = BigInt("1759")
		const addressX1tukt9 = accounts[0]
//		const booliG1YMgH = await FreakCoinPNHqWyV.transferFrom.call(addresscsLBU0h, addressGUAjgo7, uintqrgN15O, {from: accounts[5]});
//		const boolIZ6ah4U = await FreakCoinPNHqWyV.transfer.call(addressX1tukt9, uintO0v4jQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FreakCoinPNHqWyV.transferFrom.call(addresscsLBU0h, addressGUAjgo7, uintqrgN15O, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinhZqImAI = await FreakCoin.new({from: accounts[5]});
		const addressi4poKxg = accounts[1]
		const addressZ7ZDaFj = accounts[3]
		const uintfUsuyN9 = BigInt("539")
		const addressEWOroRn = accounts[1]
		const uintaw5SAyB = BigInt("1733")
		const addressNmnqyKS = accounts[3]
		const addressVfzGx22 = accounts[4]
		const addressbTrrJxT = accounts[3]
//		const uint256uzc2dkr = await FreakCoinhZqImAI.allUserBalances.call(addressi4poKxg, {from: accounts[1]});
//		const uint256gFWL587 = await FreakCoinhZqImAI.balanceOf.call(addressZ7ZDaFj, {from: accounts[2]});
//		const boolq3uRaf3 = await FreakCoinhZqImAI.transfer.call(addressEWOroRn, uintfUsuyN9, {from: accounts[4]});
//		const booltZOlgZw = await FreakCoinhZqImAI.approve.call(addressNmnqyKS, uintaw5SAyB, {from: accounts[0]});
//		const uint256ieXfynS = await FreakCoinhZqImAI.balanceOf.call(addressVfzGx22, {from: accounts[2]});
//		const uint256Pm1nOrL = await FreakCoinhZqImAI.allUserBalances.call(addressbTrrJxT, {from: accounts[4]});

		await expect(FreakCoinhZqImAI.allUserBalances.call(addressi4poKxg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinNOsqSA = await FreakCoin.new({from: accounts[1]});
		const addressnwfZSUJ = accounts[1]
		const addressRCWyoaI = "0x0000000000000000000000000000000000000001"
		const uintCVuODQ = BigInt("717")
		const addresstUSpr4R = accounts[0]
		const uintvTHxwLl = BigInt("1387")
		const addressaon1PXc = accounts[5]
		const addressF6qqYh = accounts[2]
		const uint256L7d9hIA = await FreakCoinNOsqSA.allowance.call(addressRCWyoaI, addressnwfZSUJ, {from: accounts[0]});
//		const boolK9AFBG6 = await FreakCoinNOsqSA.transfer.call(addresstUSpr4R, uintCVuODQ, {from: accounts[0]});
//		const boolP6A7O4a = await FreakCoinNOsqSA.transferFrom.call(addressF6qqYh, addressaon1PXc, uintvTHxwLl, {from: accounts[1]});
//		const uint256oTMaH44 = await FreakCoinNOsqSA.totalSupply.call({from: accounts[1]});

		assert.equal(uint256L7d9hIA, BigInt("0"))
		await expect(FreakCoinNOsqSA.transfer.call(addresstUSpr4R, uintCVuODQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinV0dAK4q = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const address405pNV = accounts[4]
		const addressDkxSx71 = "0x0000000000000000000000000000000000000001"
		const addressyRze1Pl = accounts[4]
		const addressEmozUyt = accounts[0]
		const uint256czpOmDA = await FreakCoinV0dAK4q.allUserBalances.call(address405pNV, {from: accounts[4]});
		const addressesjYWo = await FreakCoinV0dAK4q.uniswapAddress.call({from: accounts[3]});
		const uint256m5BZpzV = await FreakCoinV0dAK4q.allowance.call(addressyRze1Pl, addressDkxSx71, {from: accounts[0]});
		const addressMjvBWm = await FreakCoinV0dAK4q.setUniswapAddress.call(addressEmozUyt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zzBgDPN = await FreakCoinV0dAK4q.totalSupply.call({from: accounts[4]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinKobpp8l = await FreakCoin.new({from: accounts[0]});
		const addresssduPKi = accounts[1]
		const addressWXal8V3 = accounts[4]
		const addressEzIRvY = accounts[1]
		const uintTesCRM1 = BigInt("734")
		const addressf9oqqhk = accounts[1]
		const uinteIVMAhU = BigInt("1047")
		const addresslV7Imqq = accounts[2]
		const uint256OQ10l5 = await FreakCoinKobpp8l.balanceOf.call(addresssduPKi, {from: accounts[3]});
		const uint256KUN1HlU = await FreakCoinKobpp8l.allowance.call(addressEzIRvY, addressWXal8V3, {from: accounts[5]});
		const bool5mWRN6 = await FreakCoinKobpp8l.transfer.call(addressf9oqqhk, uintTesCRM1, {from: accounts[0]});
		const boolnJEWCgv = await FreakCoinKobpp8l.approve.call(addresslV7Imqq, uinteIVMAhU, {from: accounts[4]});

		assert.equal(bool5mWRN6, true)
		assert.equal(boolnJEWCgv, true)
		assert.equal(uint256KUN1HlU, BigInt("0"))
		assert.equal(uint256OQ10l5, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinKobpp8l = await FreakCoin.new({from: accounts[0]});
		const uintvHwHwd6 = BigInt("371")
		const addresswWSGnxd = accounts[0]
		const addressy7L9vL6 = accounts[1]
		const addressByzcxAv = accounts[4]
		const addressRwNKykC = accounts[1]
		const addresslirfCil = accounts[3]
		const addresssmyekKR = accounts[4]
		const addressPIGdXXO = accounts[3]
		const addressqofMvs = accounts[4]
		const uintazZSeMS = BigInt("734")
		const addressjtLd9Pg = accounts[2]
		const uintsVaNdYk = BigInt("396")
		const addressQyh53Ar = accounts[2]
		const uintpHne09c = BigInt("1047")
		const addressgkeuAk = accounts[2]
		const boolaEUXLuA = await FreakCoinKobpp8l.transfer.call(addresswWSGnxd, uintvHwHwd6, {from: accounts[0]});
		const uint256OQ10l5 = await FreakCoinKobpp8l.balanceOf.call(addressy7L9vL6, {from: accounts[3]});
		const uint256KUN1HlU = await FreakCoinKobpp8l.allowance.call(addressRwNKykC, addressByzcxAv, {from: accounts[5]});
		const uint256JV0QK38 = await FreakCoinKobpp8l.allowance.call(addresssmyekKR, addresslirfCil, {from: accounts[1]});
		const uint256DEDEzUN = await FreakCoinKobpp8l.allowance.call(addressqofMvs, addressPIGdXXO, {from: accounts[2]});
		const bool5mWRN6 = await FreakCoinKobpp8l.transfer.call(addressjtLd9Pg, uintazZSeMS, {from: accounts[0]});
//		const boolIyZcGHQ = await FreakCoinKobpp8l.transfer.call(addressQyh53Ar, uintsVaNdYk, {from: accounts[1]});
//		const boolnJEWCgv = await FreakCoinKobpp8l.approve.call(addressgkeuAk, uintpHne09c, {from: accounts[4]});

		assert.equal(bool5mWRN6, true)
		assert.equal(boolaEUXLuA, true)
		assert.equal(uint256DEDEzUN, BigInt("0"))
		assert.equal(uint256JV0QK38, BigInt("0"))
		assert.equal(uint256KUN1HlU, BigInt("0"))
		assert.equal(uint256OQ10l5, BigInt("0"))
		await expect(FreakCoinKobpp8l.transfer.call(addressQyh53Ar, uintsVaNdYk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})