const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinlxeH2r = await FreakCoin.new({from: accounts[0]});
		const addresstWLNrLs = accounts[4]
		const addressIiFwq4K = accounts[1]
		const uintH2ucGn = BigInt("1346")
		const addressq2RFM8d = accounts[0]
		const addresschb1f75 = accounts[1]
		const uint256RMX9wt = await FreakCoinlxeH2r.allUserBalances.call(addresstWLNrLs, {from: accounts[3]});
		const uint256LhEpvgc = await FreakCoinlxeH2r.allUserBalances.call(addressIiFwq4K, {from: accounts[4]});
		const uint256tXg4SOw = await FreakCoinlxeH2r.totalSupply.call({from: accounts[5]});
		const boolqdWwKws = await FreakCoinlxeH2r.transferFrom.call(addresschb1f75, addressq2RFM8d, uintH2ucGn, {from: accounts[2]});

		await expect(FreakCoinlxeH2r.allUserBalances.call(addresstWLNrLs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoiniSO0yOv = await FreakCoin.new({from: accounts[1]});
		const addresst1qH9Po = accounts[1]
		const addresseml87cs = accounts[5]
		const uint256SzosqHZ = await FreakCoiniSO0yOv.totalSupply.call({from: accounts[4]});
		const addressNbvw4px = await FreakCoiniSO0yOv.uniswapAddress.call({from: accounts[3]});
		const addressHgsdRM2 = await FreakCoiniSO0yOv.setUniswapAddress.call(addresst1qH9Po, {from: accounts[5]});
		const addressGFQJwKD = await FreakCoiniSO0yOv.setUniswapAddress.call(addresseml87cs, {from: accounts[1]});

		assert.equal(addressNbvw4px, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256SzosqHZ, BigInt("1000000"))
		await expect(FreakCoiniSO0yOv.setUniswapAddress.call(addresst1qH9Po, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinEvrnis = await FreakCoin.new({from: accounts[1]});
		const uintWedJNHD = BigInt("1519")
		const addressDtdWT6d = accounts[0]
		const addressGdJJhrh = accounts[5]
		const addressiYilKdw = accounts[4]
		const uintPwWNsS = BigInt("280")
		const addressILiPUNu = accounts[2]
		const addresseeuNoM = accounts[4]
		const boolJDsZw9E = await FreakCoinEvrnis.transfer.call(addressDtdWT6d, uintWedJNHD, {from: accounts[5]});
		const addresskOngdfH = await FreakCoinEvrnis.setUniswapAddress.call(addressGdJJhrh, {from: accounts[1]});
		const uint256Bk4CO97 = await FreakCoinEvrnis.balanceOf.call(addressiYilKdw, {from: accounts[5]});
		const addressP5xnV9r = await FreakCoinEvrnis.uniswapAddress.call({from: accounts[3]});
		const boolWnNw6ee = await FreakCoinEvrnis.transferFrom.call(addresseeuNoM, addressILiPUNu, uintPwWNsS, {from: accounts[5]});

		await expect(FreakCoinEvrnis.transfer.call(addressDtdWT6d, uintWedJNHD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinY5aTYSq = await FreakCoin.new({from: accounts[1]});
		const addressj13TZxL = accounts[0]
		const uintzSvidr = BigInt("1706")
		const addressBdnosmU = accounts[2]
		const addressTrQPlqr = accounts[1]
		const uint256IVTPrwz = await FreakCoinY5aTYSq.balanceOf.call(addressj13TZxL, {from: accounts[3]});
		const boolOWUHtSS = await FreakCoinY5aTYSq.approve.call(addressBdnosmU, uintzSvidr, {from: accounts[2]});
		const addressJ5BEGdp = await FreakCoinY5aTYSq.uniswapAddress.call({from: accounts[1]});
		const uint2565kaMf8 = await FreakCoinY5aTYSq.balanceOf.call(addressTrQPlqr, {from: accounts[0]});

		assert.equal(addressJ5BEGdp, 0x0000000000000000000000000000000000000000)
		assert.equal(boolOWUHtSS, true)
		assert.equal(uint2565kaMf8, BigInt("1000000"))
		assert.equal(uint256IVTPrwz, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinnMI2bc = await FreakCoin.new({from: accounts[1]});
		const uintEH8AbqO = BigInt("782")
		const addressY7SvsiX = accounts[3]
		const addressGiRmmcA = accounts[0]
		const addressnvnuAhe = accounts[1]
		const bool1wrS7l = await FreakCoinnMI2bc.transferFrom.call(addressGiRmmcA, addressY7SvsiX, uintEH8AbqO, {from: accounts[2]});
		const uint256IroqIXw = await FreakCoinnMI2bc.balanceOf.call(addressnvnuAhe, {from: accounts[0]});
		const addressurEbbmx = await FreakCoinnMI2bc.uniswapAddress.call({from: accounts[2]});

		await expect(FreakCoinnMI2bc.transferFrom.call(addressGiRmmcA, addressY7SvsiX, uintEH8AbqO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinOxpzbVt = await FreakCoin.new({from: accounts[0]});
		const addressL2piJ4 = accounts[3]
		const addressc9rgN3j = accounts[2]
		const addressbf0oH09 = accounts[1]
		const addresseZsXP2m = accounts[2]
		const uintE7uC0vx = BigInt("736")
		const addressMTDKkoH = accounts[4]
		const uint256kLIVymS = await FreakCoinOxpzbVt.allowance.call(addressc9rgN3j, addressL2piJ4, {from: accounts[2]});
		const addressylJWmVh = await FreakCoinOxpzbVt.uniswapAddress.call({from: accounts[3]});
		const uint256R6zoFbz = await FreakCoinOxpzbVt.allUserBalances.call(addressbf0oH09, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jMQTgIG = await FreakCoinOxpzbVt.balanceOf.call(addresseZsXP2m, {from: accounts[0]});
		const boolCrRQipZ = await FreakCoinOxpzbVt.transfer.call(addressMTDKkoH, uintE7uC0vx, {from: accounts[3]});

		assert.equal(addressylJWmVh, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256kLIVymS, BigInt("0"))
		await expect(FreakCoinOxpzbVt.allUserBalances.call(addressbf0oH09, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinnMI2bc = await FreakCoin.new({from: accounts[1]});
		const uintZ0Hea3t = BigInt("1265")
		const addressMBCFZS = accounts[0]
		const uintHMRLLO = BigInt("1723")
		const addresszU8Ofrg = accounts[1]
		const addressIcBLFSr = accounts[1]
		const addressVMBYsno = accounts[3]
		const boolfymWOYJ = await FreakCoinnMI2bc.transfer.call(addressMBCFZS, uintZ0Hea3t, {from: accounts[1]});
		const booljln1oQB = await FreakCoinnMI2bc.transfer.call(addresszU8Ofrg, uintHMRLLO, {from: accounts[0]});
		const uint256IroqIXw = await FreakCoinnMI2bc.balanceOf.call(addressIcBLFSr, {from: accounts[0]});
		const uint256J3AuVBT = await FreakCoinnMI2bc.balanceOf.call(addressVMBYsno, {from: accounts[3]});

		assert.equal(boolfymWOYJ, true)
		await expect(FreakCoinnMI2bc.transfer.call(addresszU8Ofrg, uintHMRLLO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinnMI2bc = await FreakCoin.new({from: accounts[1]});
		const uintbSZsNRQ = BigInt("1265")
		const addresskaEWG2a = accounts[1]
		const addresszea72V7 = "0x0000000000000000000000000000000000000001"
		const uinteelwMeT = BigInt("1723")
		const addressR6albwr = accounts[1]
		const addressFUIG0bh = accounts[1]
		const boolfymWOYJ = await FreakCoinnMI2bc.transfer.call(addresskaEWG2a, uintbSZsNRQ, {from: accounts[1]});
		const uint256QWx3z1 = await FreakCoinnMI2bc.balanceOf.call(addresszea72V7, {from: accounts[2]});
		const booljln1oQB = await FreakCoinnMI2bc.transfer.call(addressR6albwr, uinteelwMeT, {from: accounts[0]});
		const uint256IroqIXw = await FreakCoinnMI2bc.balanceOf.call(addressFUIG0bh, {from: accounts[0]});
		const addressQyz5alX = await FreakCoinnMI2bc.uniswapAddress.call({from: accounts[4]});

		assert.equal(boolfymWOYJ, true)
		assert.equal(uint256QWx3z1, BigInt("0"))
		await expect(FreakCoinnMI2bc.transfer.call(addressR6albwr, uinteelwMeT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinOiFEKo4 = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressHFVElaI = accounts[2]
		const uintBbEhoyT = BigInt("12")
		const addressUPCkBCo = accounts[2]
		const addressjqTuqv = accounts[0]
		const uintmmJE6PC = BigInt("1399")
		const addressifiA5nv = accounts[0]
		const addressaNfKGqp = accounts[0]
		const uint256rix8QKy = await FreakCoinOiFEKo4.balanceOf.call(addressHFVElaI, {from: accounts[3]});
		const boolxuHSVmA = await FreakCoinOiFEKo4.transferFrom.call(addressjqTuqv, addressUPCkBCo, uintBbEhoyT, {from: accounts[1]});
		const boolJBPy50C = await FreakCoinOiFEKo4.transferFrom.call(addressaNfKGqp, addressifiA5nv, uintmmJE6PC, {from: accounts[4]});
	});
})