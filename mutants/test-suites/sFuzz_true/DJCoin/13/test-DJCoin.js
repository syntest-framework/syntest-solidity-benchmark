const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinc6vjxU = await DJCoin.new({from: accounts[5]});
		const addresseEyTyRI = accounts[4]
		const addressDQaGacA = accounts[1]
		const uintQHO0SAj = BigInt("216")
		const addressZY7Vxw = accounts[1]
		const addressxvcxHub = accounts[4]
		const addressYnVenZG = accounts[2]
		const addressevyfXYe = accounts[3]
		const uintJb9DXez = BigInt("53")
		const addressOiDWUyC = accounts[2]
		const uintey7DDN8 = BigInt("277")
		const addressKEdcdLe = accounts[0]
		const uint256kdzl30k = await DJCoinc6vjxU.allowance.call(addressDQaGacA, addresseEyTyRI, {from: accounts[4]});
//		const boolVg5k9I4 = await DJCoinc6vjxU.transferFrom.call(addressxvcxHub, addressZY7Vxw, uintQHO0SAj, {from: accounts[4]});
//		const uint256QYmhowi = await DJCoinc6vjxU.allowance.call(addressevyfXYe, addressYnVenZG, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDye84cK = await DJCoinc6vjxU.decreaseAllowance.call(addressOiDWUyC, uintJb9DXez, {from: accounts[3]});
//		const boolU3exKC = await DJCoinc6vjxU.approve.call(addressKEdcdLe, uintey7DDN8, {from: accounts[4]});

		assert.equal(uint256kdzl30k, BigInt("0"))
		await expect(DJCoinc6vjxU.transferFrom.call(addressxvcxHub, addressZY7Vxw, uintQHO0SAj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinNg1M7s = await DJCoin.new({from: accounts[2]});
		const uintU8zXKHq = BigInt("993")
		const addressbl076Uq = accounts[5]
		const addressFmNz6Jx = accounts[5]
		const uintZIrbd6R = BigInt("375")
		const boolqum3XhA = await DJCoinNg1M7s.increaseAllowance.call(addressbl076Uq, uintU8zXKHq, {from: accounts[3]});
//		const addresslZreOpg = await DJCoinNg1M7s.validRecipient.call(addressFmNz6Jx, {from: accounts[4]});
//		const boolBnkuCHA = await DJCoinNg1M7s.changetokensPerBlock.call(uintZIrbd6R, {from: accounts[3]});

		assert.equal(boolqum3XhA, true)
		await expect(DJCoinNg1M7s.validRecipient.call(addressFmNz6Jx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinQKtDte2 = await DJCoin.new({from: accounts[2]});
		const uintpNUxlm6 = BigInt("1959")
		const addressDUCjX1p = accounts[1]
		const uint256rGL6tFW = await DJCoinQKtDte2.totalSupply.call({from: accounts[0]});
		const boolLUtztrU = await DJCoinQKtDte2.decreaseAllowance.call(addressDUCjX1p, uintpNUxlm6, {from: accounts[4]});

		assert.equal(boolLUtztrU, true)
		assert.equal(uint256rGL6tFW, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinoLQIrH = await DJCoin.new({from: accounts[0]});
		const addressBbNceJ7 = accounts[1]
		const addresswRn1vu1 = accounts[2]
		const uintjCdZ0g9 = BigInt("1270")
		const addressQSuUeu = accounts[2]
		const uintL5ThAYj = BigInt("1243")
		const address6bmPLi = accounts[4]
		const addressGt1Qgns = await DJCoinoLQIrH.transferOwnership.call(addressBbNceJ7, {from: accounts[0]});
//		const addressT6UWzOI = await DJCoinoLQIrH.validRecipient.call(addresswRn1vu1, {from: accounts[1]});
//		await DJCoinoLQIrH.renounceOwnership.call({from: accounts[4]});
//		const boolJ8QqsLb = await DJCoinoLQIrH.transfer.call(addressQSuUeu, uintjCdZ0g9, {from: accounts[0]});
//		await DJCoinoLQIrH.onlyOwner.call({from: accounts[3]});
//		const booleMh9SMU = await DJCoinoLQIrH.increaseAllowance.call(address6bmPLi, uintL5ThAYj, {from: accounts[5]});

		await expect(DJCoinoLQIrH.validRecipient.call(addresswRn1vu1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinpiELKpf = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscozmCTb = accounts[5]
		const uintQfjI2n = BigInt("1405")
		const addressKypBOXY = await DJCoinpiELKpf.transferOwnership.call(addresscozmCTb, {from: accounts[0]});
		const boolBO9Cs9y = await DJCoinpiELKpf.changetokensPerBlock.call(uintQfjI2n, {from: accounts[0]});
		const uint256GPnFbH = await DJCoinpiELKpf.totalSupply.call({from: accounts[1]});
		await DJCoinpiELKpf.onlyOwner.call({from: accounts[4]});
	});

	it('test for DJCoin', async () => {
		const DJCoinkPCTGty = await DJCoin.new({from: accounts[2]});
		const addressgYbj9b1 = accounts[1]
		const uintDD73ZKV = BigInt("1693")
		const uintbpzWIQ = BigInt("1016")
		const uintlXD0d0N = BigInt("1307")
		const uintYJ51ofk = BigInt("588")
		const uint256fU0oJyU = await DJCoinkPCTGty.balanceOf.call(addressgYbj9b1, {from: accounts[3]});
//		await DJCoinkPCTGty.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256fXxTK8k = await DJCoinkPCTGty.totalSupply.call({from: accounts[4]});
//		const uint256C2eGBJz = await DJCoinkPCTGty.burn.call(uintbpzWIQ, uintDD73ZKV, {from: accounts[1]});
//		const uint256D4VZHX2 = await DJCoinkPCTGty.burn.call(uintYJ51ofk, uintlXD0d0N, {from: accounts[2]});

		assert.equal(uint256fU0oJyU, BigInt("0"))
		await expect(DJCoinkPCTGty.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinQKtDte2 = await DJCoin.new({from: accounts[2]});
		const uintCUic6b8 = BigInt("1077")
		const uintkr7y3ay = BigInt("1424")
		const uintx2d7f9U = BigInt("1959")
		const addressP7Z24f = accounts[1]
		const uint256CaysR4q = await DJCoinQKtDte2.burn.call(uintkr7y3ay, uintCUic6b8, {from: accounts[2]});
		const uint256rGL6tFW = await DJCoinQKtDte2.totalSupply.call({from: accounts[0]});
		const boolLUtztrU = await DJCoinQKtDte2.decreaseAllowance.call(addressP7Z24f, uintx2d7f9U, {from: accounts[4]});

		assert.equal(boolLUtztrU, true)
		assert.equal(uint256CaysR4q, BigInt("1873830000000"))
		assert.equal(uint256rGL6tFW, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinQKtDte2 = await DJCoin.new({from: accounts[2]});
		const uintj5RkXgu = BigInt("786")
		const uintVEX5ri5 = BigInt("1962")
		const addressUDuU8Pv = accounts[1]
		const uintK8HhENN = BigInt("906")
		const addressKLgc13s = accounts[0]
		const boolQBVktuj = await DJCoinQKtDte2.changetokensPerBlock.call(uintj5RkXgu, {from: accounts[2]});
		const boolLUtztrU = await DJCoinQKtDte2.decreaseAllowance.call(addressUDuU8Pv, uintVEX5ri5, {from: accounts[4]});
//		const boolYUK1y0T = await DJCoinQKtDte2.transfer.call(addressKLgc13s, uintK8HhENN, {from: accounts[1]});

		assert.equal(boolLUtztrU, true)
		assert.equal(boolQBVktuj, true)
		await expect(DJCoinQKtDte2.transfer.call(addressKLgc13s, uintK8HhENN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinQKtDte2 = await DJCoin.new({from: accounts[2]});
		const uintOgHdwXO = BigInt("86")
		const addressAbKj28 = accounts[2]
		const uintImKfBsx = BigInt("1959")
		const addressIWXuCTI = accounts[1]
		const boolVVRDv43 = await DJCoinQKtDte2.approve.call(addressAbKj28, uintOgHdwXO, {from: accounts[3]});
//		await DJCoinQKtDte2.onlyOwner.call({from: accounts[3]});
//		const boolLUtztrU = await DJCoinQKtDte2.decreaseAllowance.call(addressIWXuCTI, uintImKfBsx, {from: accounts[4]});

		assert.equal(boolVVRDv43, true)
		await expect(DJCoinQKtDte2.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinQKtDte2 = await DJCoin.new({from: accounts[2]});
		const uintHi3HKQs = BigInt("49")
		const addressjlGgFjR = accounts[2]
		const uintHjIziHO = BigInt("1959")
		const addressVHsamdF = accounts[2]
		const addressEXWa7u = accounts[1]
		const boolSFkIRR = await DJCoinQKtDte2.approve.call(addressjlGgFjR, uintHi3HKQs, {from: accounts[3]});
		const addressf2mvJaH = await DJCoinQKtDte2.owner.call({from: accounts[3]});
		const boolLUtztrU = await DJCoinQKtDte2.decreaseAllowance.call(addressVHsamdF, uintHjIziHO, {from: accounts[4]});
//		const addresstld0cdt = await DJCoinQKtDte2.validRecipient.call(addressEXWa7u, {from: accounts[0]});

		assert.equal(addressf2mvJaH, 0x414A78665F22f98B427284E604518040A8d162f2)
		assert.equal(boolLUtztrU, true)
		assert.equal(boolSFkIRR, true)
		await expect(DJCoinQKtDte2.validRecipient.call(addressEXWa7u, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinQKtDte2 = await DJCoin.new({from: accounts[2]});
		const uintHsKJsOV = BigInt("135")
		const addressPkGk5s = accounts[5]
//		await DJCoinQKtDte2.renounceOwnership.call({from: accounts[2]});
//		const booln4rwU1I = await DJCoinQKtDte2.transfer.call(addressPkGk5s, uintHsKJsOV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DJCoinQKtDte2.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinQKtDte2 = await DJCoin.new({from: accounts[2]});
		const uintpyquQMm = BigInt("0")
		const addressoe2skyW = "0x0000000000000000000000000000000000000001"
		const uintUbZotV = BigInt("993")
		const addressZWkHcNI = accounts[3]
		const boolWdHCOtE = await DJCoinQKtDte2.transfer.call(addressoe2skyW, uintpyquQMm, {from: accounts[0]});
		const boolv0L78Xe = await DJCoinQKtDte2.approve.call(addressZWkHcNI, uintUbZotV, {from: accounts[1]});
		const uint256PczD5i8 = await DJCoinQKtDte2.totalSupply.call({from: accounts[0]});

		assert.equal(boolWdHCOtE, true)
		assert.equal(boolv0L78Xe, true)
		assert.equal(uint256PczD5i8, BigInt("2100000000000"))
	});
})