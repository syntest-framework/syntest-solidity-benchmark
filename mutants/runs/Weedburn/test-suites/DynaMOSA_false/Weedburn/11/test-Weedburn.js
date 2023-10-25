const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnA94X1G2 = await Weedburn.new({from: accounts[3]});
		const uintP66OHe3 = BigInt("219")
		const addressoXLVCYT = accounts[3]
		const boolwZKH70 = await WeedburnA94X1G2.approve.call(addressoXLVCYT, uintP66OHe3, {from: accounts[1]});
		const stringPEK0boq = await WeedburnA94X1G2.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8LVwDNXy = await WeedburnA94X1G2.decimals.call({from: accounts[2]});

		assert.equal(boolwZKH70, true)
		assert.equal(stringPEK0boq, "Weedburn")
		assert.equal(uint8LVwDNXy, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const stringBXVlBOB = "TloznSU7SvzpSjB9ndCdybFSYRTCTR0V6jK8KvwddgxNXsFIeA"
		const stringEszAVZ5 = "jR9VIDuNPyqKgEycJiKoYFoNiN"
		const uintkKfUZF = BigInt("45")
		const WeedburnWxfaHJx = await Weedburn.new(stringBXVlBOB, stringEszAVZ5, uintkKfUZF, {from: accounts[4]});
		const uintbKBYlz3 = BigInt("1432")
		const addressth8M5mv = accounts[2]
		const addressr5igabN = accounts[4]
		const uintg1a25CP = BigInt("1575")
		const addresshuFrlx = accounts[2]
		const uintacfUrkk = BigInt("248")
		const uintshi8kqD = BigInt("258")
		const addressAsnynt8 = accounts[0]
		const booloCdnxJO = await WeedburnWxfaHJx.transferFrom.call(addressr5igabN, addressth8M5mv, uintbKBYlz3, {from: accounts[5]});
		const addresszW1RBP = await WeedburnWxfaHJx.burnFrom.call(addresshuFrlx, uintg1a25CP, {from: accounts[4]});
		const uint2567PSHtx = await WeedburnWxfaHJx.burn.call(uintacfUrkk, {from: accounts[0]});
		await WeedburnWxfaHJx.disableLimitMode.call({from: accounts[1]});
		const uint256l56J81l = await WeedburnWxfaHJx.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressC6KHI0 = await WeedburnWxfaHJx.burnFrom.call(addressAsnynt8, uintshi8kqD, {from: accounts[4]});
	});

	it('test for Weedburn', async () => {
		const Weedburncq8Rv2I = await Weedburn.new({from: accounts[4]});
		const addressqpTkzVA = accounts[5]
		const addressvU4xDYQ = accounts[3]
		const uint256IucTsYi = await Weedburncq8Rv2I.balanceOf.call(addressqpTkzVA, {from: accounts[1]});
		const uint256CIxUQku = await Weedburncq8Rv2I.balanceOf.call(addressvU4xDYQ, {from: accounts[0]});
		const uint256KIRRi7r = await Weedburncq8Rv2I.totalSupply.call({from: accounts[2]});

		assert.equal(uint256CIxUQku, BigInt("0"))
		assert.equal(uint256IucTsYi, BigInt("0"))
		assert.equal(uint256KIRRi7r, BigInt("100000000000000000000000"))
	});

	it('test for Weedburn', async () => {
		const WeedburnydhtjE = await Weedburn.new({from: accounts[4]});
		const uintHiHUrsm = BigInt("2014")
		const addressLUkygv4 = accounts[5]
		const addressQUNXT15 = accounts[0]
		const addressthMv0V = accounts[4]
		const addressxE3InRw = accounts[0]
		const stringWV7i5hi = await WeedburnydhtjE.symbol.call({from: accounts[2]});
		const boolT4sanQ = await WeedburnydhtjE.transferFrom.call(addressQUNXT15, addressLUkygv4, uintHiHUrsm, {from: accounts[2]});
		const uint256TStDru2 = await WeedburnydhtjE.allowance.call(addressxE3InRw, addressthMv0V, {from: accounts[4]});

		assert.equal(stringWV7i5hi, "Weedburn")
		await expect(WeedburnydhtjE.transferFrom.call(addressQUNXT15, addressLUkygv4, uintHiHUrsm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJ8C6suX = await Weedburn.new({from: accounts[0]});
		const uintOIiDAe4 = BigInt("1208")
		const addressibp9TwF = accounts[1]
		await WeedburnJ8C6suX.disableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});
		await WeedburnJ8C6suX.disableLimitMode.call({from: accounts[1]});
		const stringPaiJOXG = await WeedburnJ8C6suX.symbol.call({from: accounts[2]});
		const boolXCNybeX = await WeedburnJ8C6suX.approve.call(addressibp9TwF, uintOIiDAe4, {from: accounts[1]});

		await expect(WeedburnJ8C6suX.disableLimitMode.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnU5CWU1C = await Weedburn.new({from: accounts[3]});
		const uintMM70Hj8 = BigInt("1454")
		const addressmmHbd4m = accounts[3]
		const uintJiCeLMq = BigInt("1776")
		const addressp0Lvcto = accounts[1]
		const uintJcLkKw = BigInt("1696")
		const addresshEjSQR = accounts[2]
		const addressyt9mg7X = accounts[0]
		const bool4uiLEt = await WeedburnU5CWU1C.decreaseAllowance.call(addressmmHbd4m, uintMM70Hj8, {from: accounts[1]});
		const boolfQ11Ywz = await WeedburnU5CWU1C.increaseAllowance.call(addressp0Lvcto, uintJiCeLMq, {from: accounts[2]});
		await WeedburnU5CWU1C.disableLimitMode.call({from: accounts[0]});
		await WeedburnU5CWU1C.disableLimitMode.call({from: accounts[3]});
		const booljlMQUzH = await WeedburnU5CWU1C.transferFrom.call(addressyt9mg7X, addresshEjSQR, uintJcLkKw, {from: accounts[5]});

		await expect(WeedburnU5CWU1C.decreaseAllowance.call(addressmmHbd4m, uintMM70Hj8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnA94X1G2 = await Weedburn.new({from: accounts[3]});
		const uintebAufsP = BigInt("219")
		const addressCVsyMJn = accounts[3]
		const boolwZKH70 = await WeedburnA94X1G2.approve.call(addressCVsyMJn, uintebAufsP, {from: accounts[1]});
		const stringPEK0boq = await WeedburnA94X1G2.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await WeedburnA94X1G2.enableLimitMode.call({from: accounts[5]});
		const uint8LVwDNXy = await WeedburnA94X1G2.decimals.call({from: accounts[2]});

		assert.equal(boolwZKH70, true)
		assert.equal(stringPEK0boq, "Weedburn")
		await expect(WeedburnA94X1G2.enableLimitMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnydhtjE = await Weedburn.new({from: accounts[4]});
		const addressgajp4Jz = accounts[4]
		const addressvrZpuJx = accounts[0]
		const uintZ8RUsu = BigInt("273")
		const addressXCfDUpS = accounts[3]
		const stringWV7i5hi = await WeedburnydhtjE.symbol.call({from: accounts[2]});
		const uint256TStDru2 = await WeedburnydhtjE.allowance.call(addressvrZpuJx, addressgajp4Jz, {from: accounts[4]});
		const boolg2JwlXk = await WeedburnydhtjE.increaseAllowance.call(addressXCfDUpS, uintZ8RUsu, {from: accounts[0]});

		assert.equal(boolg2JwlXk, true)
		assert.equal(stringWV7i5hi, "Weedburn")
		assert.equal(uint256TStDru2, BigInt("0"))
	});

	it('test for Weedburn', async () => {
		const WeedburnA94X1G2 = await Weedburn.new({from: accounts[3]});
		const uintLAu8Vc = BigInt("219")
		const addressXRiq9T8 = accounts[3]
		const boolwZKH70 = await WeedburnA94X1G2.approve.call(addressXRiq9T8, uintLAu8Vc, {from: accounts[1]});
		await WeedburnA94X1G2.enableDevMode.call({from: accounts[3]});
		const stringPEK0boq = await WeedburnA94X1G2.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8LVwDNXy = await WeedburnA94X1G2.decimals.call({from: accounts[2]});

		assert.equal(boolwZKH70, true)
		await expect(WeedburnA94X1G2.enableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnydhtjE = await Weedburn.new({from: accounts[4]});
		const addresslu8F7Eq = accounts[1]
		const addressx9pN1tS = accounts[0]
		const uintoFXYkmT = BigInt("507")
		const uintr4jx6Nu = BigInt("2014")
		const addressIr6C5l = accounts[6]
		const addressxq9iOu = accounts[0]
		const addressxOZ8v4X = accounts[4]
		const addresst4lalx4 = accounts[1]
		const stringWV7i5hi = await WeedburnydhtjE.symbol.call({from: accounts[2]});
		const uint256qmfdto6 = await WeedburnydhtjE.allowance.call(addressx9pN1tS, addresslu8F7Eq, {from: accounts[1]});
		const uint256kKZBrcV = await WeedburnydhtjE.burn.call(uintoFXYkmT, {from: accounts[2]});
		const boolT4sanQ = await WeedburnydhtjE.transferFrom.call(addressxq9iOu, addressIr6C5l, uintr4jx6Nu, {from: accounts[2]});
		const uint256TStDru2 = await WeedburnydhtjE.allowance.call(addresst4lalx4, addressxOZ8v4X, {from: accounts[4]});

		assert.equal(stringWV7i5hi, "Weedburn")
		assert.equal(uint256qmfdto6, BigInt("0"))
		await expect(WeedburnydhtjE.burn.call(uintoFXYkmT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnovM7rWD = await Weedburn.new({from: accounts[0]});
		const uintqS3JqN = BigInt("238")
		const addressJmg8oLq = accounts[4]
		const uintxpf5AQU = BigInt("1111")
		const addressCoGOawk = "0x0000000000000000000000000000000000000001"
		const boolvro6p51 = await WeedburnovM7rWD.approve.call(addressJmg8oLq, uintqS3JqN, {from: "0x0000000000000000000000000000000000000001"});
		const addressuZx6MPA = await WeedburnovM7rWD.burnFrom.call(addressCoGOawk, uintxpf5AQU, {from: accounts[3]});
		await WeedburnovM7rWD.disableLimitMode.call({from: accounts[5]});

		assert.equal(boolvro6p51, true)
		await expect(WeedburnovM7rWD.burnFrom.call(addressCoGOawk, uintxpf5AQU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnydhtjE = await Weedburn.new({from: accounts[4]});
		const uinti4Oo09G = BigInt("2014")
		const addressMKVBNxv = accounts[6]
		const addressOKiF8fs = accounts[0]
		await WeedburnydhtjE.disableDevMode.call({from: accounts[0]});
		const boolT4sanQ = await WeedburnydhtjE.transferFrom.call(addressOKiF8fs, addressMKVBNxv, uinti4Oo09G, {from: accounts[2]});

		await expect(WeedburnydhtjE.disableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnydhtjE = await Weedburn.new({from: accounts[4]});
		const uintL40aJLy = BigInt("2003")
		const addressBTL5I9K = accounts[3]
		const uintZwmHwul = BigInt("2049")
		const addressDrqWQ7 = accounts[6]
		const addressHkifL1Y = accounts[4]
		const uinthBEmXsx = BigInt("684")
		const boolqj6iKQI = await WeedburnydhtjE.transfer.call(addressBTL5I9K, uintL40aJLy, {from: accounts[3]});
		await WeedburnydhtjE.enableDevMode.call({from: accounts[0]});
		const booliH0mRJR = await WeedburnydhtjE.transferFrom.call(addressHkifL1Y, addressDrqWQ7, uintZwmHwul, {from: accounts[2]});
		const uint256sYopPm = await WeedburnydhtjE.burn.call(uinthBEmXsx, {from: accounts[0]});

		await expect(WeedburnydhtjE.transfer.call(addressBTL5I9K, uintL40aJLy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnydhtjE = await Weedburn.new({from: accounts[4]});
		const uintZBF64qA = BigInt("1604")
		const addressFofRfBx = accounts[1]
		const uintqkoTFeo = BigInt("677")
		const addressAs0Hsoy = accounts[3]
		const stringjtaLHyR = await WeedburnydhtjE.name.call({from: accounts[3]});
		const boolaIxqnnm = await WeedburnydhtjE.approve.call(addressFofRfBx, uintZBF64qA, {from: accounts[3]});
		const booluu0ZDuM = await WeedburnydhtjE.transfer.call(addressAs0Hsoy, uintqkoTFeo, {from: accounts[1]});

		assert.equal(boolaIxqnnm, true)
		assert.equal(stringjtaLHyR, "t.me/burnweed1")
		await expect(WeedburnydhtjE.transfer.call(addressAs0Hsoy, uintqkoTFeo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnydhtjE = await Weedburn.new({from: accounts[4]});
		const uintlruXuQ4 = BigInt("116")
		const addressAkxM5mH = accounts[1]
		const uintcekZA19 = BigInt("2046")
		const address5vP1f8 = accounts[5]
		const addresshJGwArb = accounts[4]
		const uinte0JlRus = BigInt("2014")
		const addressCaexN2m = accounts[7]
		const addresshxWGrNX = accounts[0]
		const boolHloMveX = await WeedburnydhtjE.transfer.call(addressAkxM5mH, uintlruXuQ4, {from: accounts[4]});
		await WeedburnydhtjE.enableLimitMode.call({from: accounts[4]});
		const booliH0mRJR = await WeedburnydhtjE.transferFrom.call(addresshJGwArb, address5vP1f8, uintcekZA19, {from: accounts[2]});
		const boolT4sanQ = await WeedburnydhtjE.transferFrom.call(addresshxWGrNX, addressCaexN2m, uinte0JlRus, {from: accounts[2]});

		assert.equal(boolHloMveX, true)
		await expect(WeedburnydhtjE.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnadUmAZ = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDM9HfF0 = BigInt("1700")
		const addressS1QTDA6 = accounts[1]
		const addressS0Qtov1 = "0x0000000000000000000000000000000000000001"
		const uintpvh9X7T = BigInt("1089")
		const addressjtvxFla = accounts[0]
		const uintvYyf0oY = BigInt("1785")
		const addresstt4VO62 = accounts[4]
		const boolQvg6iAo = await WeedburnadUmAZ.decreaseAllowance.call(addressS1QTDA6, uintDM9HfF0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pvnUAl = await WeedburnadUmAZ.balanceOf.call(addressS0Qtov1, {from: accounts[2]});
		const boolFJASV62 = await WeedburnadUmAZ.decreaseAllowance.call(addressjtvxFla, uintpvh9X7T, {from: accounts[5]});
		const addressTcLzBmu = await WeedburnadUmAZ.burnFrom.call(addresstt4VO62, uintvYyf0oY, {from: accounts[4]});
	});
})