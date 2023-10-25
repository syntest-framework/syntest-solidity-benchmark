const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinFREMLdp = await DJCoin.new({from: accounts[2]});
		const uint1LNxSC = BigInt("172")
		const addressgqsfkHV = accounts[0]
		const addressEZJPXj6 = "0x0000000000000000000000000000000000000001"
		const uintULiTC2Y = BigInt("338")
		const addressekBsYvA = accounts[1]
		const addressJk3ept = accounts[4]
		const addressCxd6QDi = accounts[1]
//		const boolqotRd6g = await DJCoinFREMLdp.transfer.call(addressgqsfkHV, uint1LNxSC, {from: accounts[0]});
//		const addresswJV3sYf = await DJCoinFREMLdp.transferOwnership.call(addressEZJPXj6, {from: accounts[0]});
//		const bool75i8vE = await DJCoinFREMLdp.approve.call(addressekBsYvA, uintULiTC2Y, {from: accounts[1]});
//		const uint256dQU88D = await DJCoinFREMLdp.allowance.call(addressCxd6QDi, addressJk3ept, {from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinFREMLdp.renounceOwnership.call({from: accounts[1]});

		await expect(DJCoinFREMLdp.transfer.call(addressgqsfkHV, uint1LNxSC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinD87xTab = await DJCoin.new({from: accounts[2]});
		const uintkRGusb4 = BigInt("1939")
		const addressGCNUNZD = accounts[2]
		const uintBIVvMuG = BigInt("782")
		const addressmVY4mlE = accounts[5]
		const uintITQBRL = BigInt("971")
		const boolnvmMVSS = await DJCoinD87xTab.increaseAllowance.call(addressGCNUNZD, uintkRGusb4, {from: accounts[2]});
//		const boolEqqP9Vh = await DJCoinD87xTab.transfer.call(addressmVY4mlE, uintBIVvMuG, {from: accounts[5]});
//		await DJCoinD87xTab.onlyOwner.call({from: accounts[5]});
//		await DJCoinD87xTab.renounceOwnership.call({from: accounts[0]});
//		const bool2ofrmi = await DJCoinD87xTab.changetokensPerBlock.call(uintITQBRL, {from: accounts[5]});

		assert.equal(boolnvmMVSS, true)
		await expect(DJCoinD87xTab.transfer.call(addressmVY4mlE, uintBIVvMuG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinIoBjM2 = await DJCoin.new({from: accounts[2]});
		const uintFFJgDSf = BigInt("771")
		const addressdyVAUCv = accounts[0]
		const addressb3T5b3o = accounts[4]
		const addressncOroTN = accounts[3]
		const addressSvNrs2y = accounts[1]
		const uintUxocKWV = BigInt("942")
		const uintbJcI4vH = BigInt("1522")
//		const boolyLQUlkE = await DJCoinIoBjM2.transferFrom.call(addressb3T5b3o, addressdyVAUCv, uintFFJgDSf, {from: accounts[2]});
//		await DJCoinIoBjM2.renounceOwnership.call({from: accounts[4]});
//		const uint256mq7tSxy = await DJCoinIoBjM2.allowance.call(addressSvNrs2y, addressncOroTN, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256MsGW5ph = await DJCoinIoBjM2.burn.call(uintbJcI4vH, uintUxocKWV, {from: accounts[1]});

		await expect(DJCoinIoBjM2.transferFrom.call(addressb3T5b3o, addressdyVAUCv, uintFFJgDSf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinYF38wEu = await DJCoin.new({from: accounts[0]});
		const uinth8CAH5p = BigInt("560")
		const addressp1Kq4cS = accounts[0]
		const addressxoNOpEO = accounts[3]
		const addressJzTjAQq = accounts[2]
		const uintQBhoixM = BigInt("6")
		const addressF5fITMA = "0x0000000000000000000000000000000000000001"
		const addressFffvtlP = accounts[0]
//		await DJCoinYF38wEu.renounceOwnership.call({from: accounts[0]});
//		const addressaAdDgLy = await DJCoinYF38wEu.owner.call({from: accounts[4]});
		await DJCoinYF38wEu.renounceOwnership.call({from: accounts[0]});
//		const boolVeIL7kc = await DJCoinYF38wEu.transferFrom.call(addressxoNOpEO, addressp1Kq4cS, uinth8CAH5p, {from: accounts[0]});
//		const addressDJOcr34 = await DJCoinYF38wEu.validRecipient.call(addressJzTjAQq, {from: accounts[3]});
//		const boolPFUH2FK = await DJCoinYF38wEu.transferFrom.call(addressFffvtlP, addressF5fITMA, uintQBhoixM, {from: accounts[0]});

		await expect(DJCoinYF38wEu.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinQskFknd = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTG5cOnb = BigInt("492")
		const addressZiJ1fwy = accounts[0]
		const addressJYaUy80 = accounts[4]
		const uinta9LTd6L = BigInt("304")
		const addressMd0pHeA = accounts[4]
		const uintKvowewN = BigInt("1477")
		const addressYYxzXb8 = accounts[1]
		const boolynjLS6m = await DJCoinQskFknd.approve.call(addressZiJ1fwy, uintTG5cOnb, {from: accounts[3]});
		const addresswd0GlTq = await DJCoinQskFknd.validRecipient.call(addressJYaUy80, {from: accounts[3]});
		await DJCoinQskFknd.renounceOwnership.call({from: accounts[3]});
		const booladVAjeL = await DJCoinQskFknd.decreaseAllowance.call(addressMd0pHeA, uinta9LTd6L, {from: accounts[3]});
		const boolPK2e0wn = await DJCoinQskFknd.transfer.call(addressYYxzXb8, uintKvowewN, {from: accounts[4]});
	});

	it('test for DJCoin', async () => {
		const DJCoinNBNheTW = await DJCoin.new({from: accounts[2]});
		const uintdoZ3FF9 = BigInt("1077")
		const uintTRmKJ2f = BigInt("607")
		const uintOfPZN2N = BigInt("1738")
		const addressFXFlFp = accounts[3]
		const uint3nrOkV = BigInt("2002")
		const addresscrkgGOB = accounts[4]
//		await DJCoinNBNheTW.renounceOwnership.call({from: accounts[3]});
//		const uint256ayb7hgH = await DJCoinNBNheTW.burn.call(uintTRmKJ2f, uintdoZ3FF9, {from: accounts[3]});
//		const boolHNyXg06 = await DJCoinNBNheTW.approve.call(addressFXFlFp, uintOfPZN2N, {from: accounts[4]});
//		const uint256SOF9xjj = await DJCoinNBNheTW.totalSupply.call({from: accounts[1]});
//		const boolM0tsRHa = await DJCoinNBNheTW.increaseAllowance.call(addresscrkgGOB, uint3nrOkV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DJCoinNBNheTW.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinmhgToRy = await DJCoin.new({from: accounts[2]});
		const uintj8NluaK = BigInt("623")
		const addressoNBY3yk = accounts[0]
		const uintyrWZhBa = BigInt("946")
		const uintnESvP09 = BigInt("568")
		const boolgA9eUcx = await DJCoinmhgToRy.approve.call(addressoNBY3yk, uintj8NluaK, {from: accounts[3]});
//		const uint256hrYsKVj = await DJCoinmhgToRy.burn.call(uintnESvP09, uintyrWZhBa, {from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinmhgToRy.renounceOwnership.call({from: accounts[0]});

		assert.equal(boolgA9eUcx, true)
		await expect(DJCoinmhgToRy.burn.call(uintnESvP09, uintyrWZhBa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinENqYK3U = await DJCoin.new({from: accounts[1]});
		const uintQitW0we = BigInt("2012")
		const uintN9Kna4w = BigInt("691")
		const uint256fyCchmE = await DJCoinENqYK3U.totalSupply.call({from: accounts[1]});
		const uint256ZDigM8H = await DJCoinENqYK3U.totalSupply.call({from: accounts[3]});
//		const uint256rNOogJi = await DJCoinENqYK3U.burn.call(uintN9Kna4w, uintQitW0we, {from: accounts[5]});
//		await DJCoinENqYK3U.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256ZDigM8H, BigInt("2100000000000"))
		assert.equal(uint256fyCchmE, BigInt("2100000000000"))
		await expect(DJCoinENqYK3U.burn.call(uintN9Kna4w, uintQitW0we, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinxM7ry2E = await DJCoin.new({from: accounts[4]});
		const uintDSU3Nax = BigInt("1548")
		const addressf5AK8VE = accounts[1]
		const addressRRTIuhp = accounts[2]
		const uintaHoY9WD = BigInt("158")
		const addressuvJ4EH = accounts[3]
		const addressDS1MeZ = accounts[4]
//		await DJCoinxM7ry2E.onlyOwner.call({from: accounts[0]});
//		const boolAFTPQBk = await DJCoinxM7ry2E.transfer.call(addressf5AK8VE, uintDSU3Nax, {from: accounts[0]});
//		const addressSzHnxHP = await DJCoinxM7ry2E.validRecipient.call(addressRRTIuhp, {from: accounts[3]});
//		const boolBelUFtJ = await DJCoinxM7ry2E.decreaseAllowance.call(addressuvJ4EH, uintaHoY9WD, {from: accounts[1]});
//		await DJCoinxM7ry2E.renounceOwnership.call({from: accounts[4]});
//		const addressQAbVxUW = await DJCoinxM7ry2E.transferOwnership.call(addressDS1MeZ, {from: accounts[5]});

		await expect(DJCoinxM7ry2E.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinmhgToRy = await DJCoin.new({from: accounts[2]});
		const uintyylljML = BigInt("623")
		const address7BvXGs = accounts[0]
		const addressfrZcZlk = accounts[1]
		const addressTqtAORY = accounts[1]
		const uintjo1THvX = BigInt("946")
		const uintyKXBrIM = BigInt("568")
		const boolgA9eUcx = await DJCoinmhgToRy.approve.call(address7BvXGs, uintyylljML, {from: accounts[3]});
		const uint256Tm1dBIA = await DJCoinmhgToRy.allowance.call(addressTqtAORY, addressfrZcZlk, {from: accounts[3]});
//		const uint256hrYsKVj = await DJCoinmhgToRy.burn.call(uintyKXBrIM, uintjo1THvX, {from: "0x0000000000000000000000000000000000000001"});
//		const addressmcEGicD = await DJCoinmhgToRy.owner.call({from: accounts[3]});

		assert.equal(boolgA9eUcx, true)
		assert.equal(uint256Tm1dBIA, BigInt("0"))
		await expect(DJCoinmhgToRy.burn.call(uintyKXBrIM, uintjo1THvX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinmhgToRy = await DJCoin.new({from: accounts[2]});
		const uintDZlfhrM = BigInt("1911")
		const uintcm0OlXV = BigInt("1124")
		const addressZp2n9i5 = accounts[0]
		const boolV45Y7ue = await DJCoinmhgToRy.changetokensPerBlock.call(uintDZlfhrM, {from: accounts[4]});
		const boolgA9eUcx = await DJCoinmhgToRy.approve.call(addressZp2n9i5, uintcm0OlXV, {from: accounts[3]});

		assert.equal(boolV45Y7ue, true)
		assert.equal(boolgA9eUcx, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinmhgToRy = await DJCoin.new({from: accounts[2]});
		const uintcAgsSZW = BigInt("623")
		const addressnuQyeKC = accounts[1]
		const uintMtZslpB = BigInt("878")
		const addressTOKGnZ = accounts[2]
		const boolgA9eUcx = await DJCoinmhgToRy.approve.call(addressnuQyeKC, uintcAgsSZW, {from: accounts[3]});
		const boolz71J4tv = await DJCoinmhgToRy.decreaseAllowance.call(addressTOKGnZ, uintMtZslpB, {from: accounts[2]});

		assert.equal(boolgA9eUcx, true)
		assert.equal(boolz71J4tv, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinmhgToRy = await DJCoin.new({from: accounts[2]});
		const uintBEB0lWD = BigInt("659")
		const addressEf0MQIF = accounts[0]
		const addresslyP34w = accounts[2]
		const boolgA9eUcx = await DJCoinmhgToRy.approve.call(addressEf0MQIF, uintBEB0lWD, {from: accounts[3]});
		const uint256BZKBWHv = await DJCoinmhgToRy.balanceOf.call(addresslyP34w, {from: accounts[0]});

		assert.equal(boolgA9eUcx, true)
		assert.equal(uint256BZKBWHv, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinMA8Gih = await DJCoin.new({from: accounts[5]});
		const uintsbhVBGU = BigInt("658")
		const addressupA3Rxw = accounts[3]
		const addressns7zKNa = accounts[1]
		const address5Cp9hP = "0x0000000000000000000000000000000000000001"
		const addressUCsjuTC = accounts[2]
		const uintsST8SAX = BigInt("201")
		const addressTZQJo5s = accounts[0]
		const addressYX63tkH = accounts[2]
		const boolpN7u947 = await DJCoinMA8Gih.decreaseAllowance.call(addressupA3Rxw, uintsbhVBGU, {from: accounts[3]});
		const addressIYBUvh7 = await DJCoinMA8Gih.transferOwnership.call(addressns7zKNa, {from: accounts[5]});
//		const addresshO1ywS = await DJCoinMA8Gih.validRecipient.call(address5Cp9hP, {from: accounts[4]});
//		const uint256bIHsJez = await DJCoinMA8Gih.balanceOf.call(addressUCsjuTC, {from: accounts[4]});
//		const boolt6WMqSS = await DJCoinMA8Gih.transferFrom.call(addressYX63tkH, addressTZQJo5s, uintsST8SAX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolpN7u947, true)
		await expect(DJCoinMA8Gih.validRecipient.call(address5Cp9hP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinmhgToRy = await DJCoin.new({from: accounts[2]});
		const uintAWu2bqd = BigInt("0")
		const addressgWpPkxN = accounts[5]
		const addressRg1FQXo = "0x0000000000000000000000000000000000000001"
		const boolCPbTNG9 = await DJCoinmhgToRy.transfer.call(addressgWpPkxN, uintAWu2bqd, {from: accounts[5]});
//		await DJCoinmhgToRy.renounceOwnership.call({from: accounts[3]});
//		const uint256WbaVnHG = await DJCoinmhgToRy.balanceOf.call(addressRg1FQXo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCPbTNG9, true)
		await expect(DJCoinmhgToRy.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinmhgToRy = await DJCoin.new({from: accounts[2]});
		const uintsMAzaak = BigInt("601")
		const address6G3pdE = accounts[0]
		const uintVwVyjtF = BigInt("2038")
		const uintYW2bqJd = BigInt("1534")
		const uinttN6RtXE = BigInt("1549")
		const addressmyb0LA7 = accounts[1]
		const boolgA9eUcx = await DJCoinmhgToRy.approve.call(address6G3pdE, uintsMAzaak, {from: accounts[3]});
		const uint256cvZRedM = await DJCoinmhgToRy.burn.call(uintYW2bqJd, uintVwVyjtF, {from: accounts[2]});
//		await DJCoinmhgToRy.onlyOwner.call({from: accounts[1]});
//		const boolQgMIquM = await DJCoinmhgToRy.decreaseAllowance.call(addressmyb0LA7, uinttN6RtXE, {from: accounts[1]});

		assert.equal(boolgA9eUcx, true)
		assert.equal(uint256cvZRedM, BigInt("1672020000000"))
		await expect(DJCoinmhgToRy.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})