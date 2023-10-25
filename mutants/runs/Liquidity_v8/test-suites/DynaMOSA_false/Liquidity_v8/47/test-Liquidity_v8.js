const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringk6BTci = "DVjEjVfFB3IDE4Hu95sLBEqIVbJGwK9H4vmdQi5zdWy0B9X8qgIEgMFUIb2JtpT89QoYT"
		const addressQapcGn2 = accounts[2]
		const addresscdGHOgX = accounts[5]
		const uintPtoUJaC = BigInt("1582")
		const uintml4m239 = BigInt("363")
		const Liquidity_v8jLXpKi = await Liquidity_v8.new(stringk6BTci, addressQapcGn2, addresscdGHOgX, uintPtoUJaC, uintml4m239, {from: accounts[4]});
		const addressatuGmO = accounts[1]
		const addressHMGDkSn = accounts[2]
		const uintMx41aPA = BigInt("1955")
		const uint256kq2kM7d = await Liquidity_v8jLXpKi.calculate.call(addressatuGmO, {from: accounts[3]});
		await Liquidity_v8jLXpKi.renounceOwnership.call({from: accounts[2]});
		const uint256LonIinB = await Liquidity_v8jLXpKi.calculate.call(addressHMGDkSn, {from: accounts[1]});
		const boolEidbEJt = await Liquidity_v8jLXpKi.emergencyWithdraw.call({from: accounts[0]});
		const uint256trrOT7 = await Liquidity_v8jLXpKi.changeLockDuration.call(uintMx41aPA, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringKr9iThD = "lTYmN7LkRwQaYF397tg7AA4cywufA57O8JvuubPbsqIhV8bz04krlTRmybN665VIcTN2MUaI"
		const addressnZlBueZ = accounts[4]
		const addressAAVmj6s = accounts[4]
		const uintLTC3V3 = BigInt("1257")
		const uintOlarjm = BigInt("1678")
		const Liquidity_v8j2lp6pG = await Liquidity_v8.new(stringKr9iThD, addressnZlBueZ, addressAAVmj6s, uintLTC3V3, uintOlarjm, {from: accounts[3]});
		const uintx3JRsd = BigInt("525")
		const uint256rmQcEv7 = await Liquidity_v8j2lp6pG.changeLockDuration.call(uintx3JRsd, {from: accounts[3]});
		const boolzQkr9J = await Liquidity_v8j2lp6pG.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolH6hYVA2 = await Liquidity_v8j2lp6pG.isOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringdN8z5Pf = "PmkCmbS"
		const addressFLF14Ht = "0x0000000000000000000000000000000000000001"
		const addressuA7biBU = accounts[3]
		const uintPfQ2Vrb = BigInt("742")
		const uintSgmLoj = BigInt("1263")
		const Liquidity_v8oOAXzex = await Liquidity_v8.new(stringdN8z5Pf, addressFLF14Ht, addressuA7biBU, uintPfQ2Vrb, uintSgmLoj, {from: accounts[3]});
		const addressSuIcvwY = accounts[0]
		const uintAvsZ7I = BigInt("695")
		const addressHwPnBX4 = accounts[3]
		const uintiJQgHD = BigInt("153")
		const 
dKkc5On = await Liquidity_v8oOAXzex._hasAllowance.call(addressHwPnBX4, uintAvsZ7I, addressSuIcvwY, {from: accounts[3]});
		const boolK1f8Rb1 = await Liquidity_v8oOAXzex.stake.call(uintiJQgHD, {from: "0x0000000000000000000000000000000000000001"});
		const boolTrt5rI3 = await Liquidity_v8oOAXzex.emergencyWithdraw.call({from: accounts[2]});
		await Liquidity_v8oOAXzex.onlyOwner.call({from: accounts[3]});
		const boolLuHXQ5 = await Liquidity_v8oOAXzex.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringHsDn6ZO = "FcXPjvzlX7cbfEkA9Io7AckjuOvYHBQyHnL8gMRwr5h57A5yh8c4Nv7Ps9EP6HhP0rl4IOTdg"
		const addressGWOE8kn = accounts[2]
		const addressvlLSIA4 = accounts[1]
		const uintfaoxuWx = BigInt("678")
		const uintz0w7ZRW = BigInt("479")
		const Liquidity_v8s4PaYsY = await Liquidity_v8.new(stringHsDn6ZO, addressGWOE8kn, addressvlLSIA4, uintfaoxuWx, uintz0w7ZRW, {from: accounts[5]});
		const uintKwRzD24 = BigInt("1380")
		const uintMW8AQR = BigInt("1784")
		const boolRfZ3USc = await Liquidity_v8s4PaYsY.emergencyWithdraw.call({from: accounts[0]});
		const uint64odaPkd4 = await Liquidity_v8s4PaYsY.setRate.call(uintKwRzD24, {from: accounts[3]});
		const uint64neHKsg = await Liquidity_v8s4PaYsY.setRate.call(uintMW8AQR, {from: accounts[4]});
		const addressd4wtTtt = await Liquidity_v8s4PaYsY.owner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringG18uwWh = "ux2rsjQ6HdA3RqgLX0p5JFvT4g9XLh8AF0koOcgHnjXIVBKIwulCkSgUtrAvxO2MM3JGTkVNdSLjNGW0s"
		const addressuly8Pbg = "0x0000000000000000000000000000000000000001"
		const addressfiRYHq8 = accounts[4]
		const uintI141G8s = BigInt("628")
		const uintDFZMt8B = BigInt("595")
		const Liquidity_v8odQUOSk = await Liquidity_v8.new(stringG18uwWh, addressuly8Pbg, addressfiRYHq8, uintI141G8s, uintDFZMt8B, {from: accounts[0]});
		const uintGKLGEUS = BigInt("77")
		const uintgXl86pa = BigInt("1354")
		const addressirIX4K3 = await Liquidity_v8odQUOSk.owner.call({from: accounts[5]});
		const boolP2RsuhG = await Liquidity_v8odQUOSk.addReward.call(uintGKLGEUS, {from: accounts[3]});
		const boolQV9jIKb = await Liquidity_v8odQUOSk.addReward.call(uintgXl86pa, {from: "0x0000000000000000000000000000000000000001"});
		const boold8lQ6lQ = await Liquidity_v8odQUOSk.withdraw.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringJcm9gQd = "BFE1C7donm4nxsjbGPcOUiI"
		const addressdFIZvBt = accounts[4]
		const addressyrjtMcL = accounts[2]
		const uintA7lBRt6 = BigInt("318")
		const uintG0KbgS = BigInt("2004")
		const Liquidity_v8nct1gDL = await Liquidity_v8.new(stringJcm9gQd, addressdFIZvBt, addressyrjtMcL, uintA7lBRt6, uintG0KbgS, {from: accounts[5]});
		const addressDcQ1G9k = accounts[4]
		const uintSLdKrFa = BigInt("1259")
		const uintXyGYmiw = BigInt("594")
		const boolEBxtgR = await Liquidity_v8nct1gDL.withdraw.call({from: accounts[1]});
		const addressoupS0kB = await Liquidity_v8nct1gDL.transferOwnership.call(addressDcQ1G9k, {from: accounts[1]});
		const uint64FflFBWf = await Liquidity_v8nct1gDL.setRate.call(uintSLdKrFa, {from: accounts[0]});
		await Liquidity_v8nct1gDL.renounceOwnership.call({from: accounts[0]});
		const uint64dwLdZAD = await Liquidity_v8nct1gDL.setRate.call(uintXyGYmiw, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringdN8z5Pf = "PmkCmbS"
		const addressUyejVbs = "0x0000000000000000000000000000000000000001"
		const address5xilBV = accounts[3]
		const uintHqA8liO = BigInt("742")
		const uintrAFbOlP = BigInt("1263")
		const Liquidity_v8oOAXzex = await Liquidity_v8.new(stringdN8z5Pf, addressUyejVbs, address5xilBV, uintHqA8liO, uintrAFbOlP, {from: accounts[3]});
		const addressSvmwKyK = accounts[1]
		const addressFael1Xj = accounts[2]
		const uintMInvECa = BigInt("695")
		const addresssnsbriO = accounts[3]
		const uintkLSUzXt = BigInt("1299")
		const uintSffdDOL = BigInt("153")
		const 
wHXlMVp = await Liquidity_v8oOAXzex.userDeposits.call(addressSvmwKyK, {from: accounts[2]});
		const 
dKkc5On = await Liquidity_v8oOAXzex._hasAllowance.call(addresssnsbriO, uintMInvECa, addressFael1Xj, {from: accounts[3]});
		const uint256SfZjRmH = await Liquidity_v8oOAXzex.changeLockDuration.call(uintkLSUzXt, {from: accounts[2]});
		const boolK1f8Rb1 = await Liquidity_v8oOAXzex.stake.call(uintSffdDOL, {from: "0x0000000000000000000000000000000000000001"});
		const boolTrt5rI3 = await Liquidity_v8oOAXzex.emergencyWithdraw.call({from: accounts[2]});
		await Liquidity_v8oOAXzex.onlyOwner.call({from: accounts[3]});
		const boolLuHXQ5 = await Liquidity_v8oOAXzex.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringk6BTci = "DVjEjVfFB3IDE4Hu95sLBEqIVbJGwK9H4vmdQi5zdWy0B9X8qgIEgMFUIb2JtpT89QoYT"
		const addressUYRnxYO = accounts[2]
		const addressxntvSjy = accounts[5]
		const uintxvKRuCa = BigInt("1582")
		const uintOI7N0x = BigInt("363")
		const Liquidity_v8jLXpKi = await Liquidity_v8.new(stringk6BTci, addressUYRnxYO, addressxntvSjy, uintxvKRuCa, uintOI7N0x, {from: accounts[4]});
		const addresseiAw1rQ = accounts[1]
		const uintfyjm1dX = BigInt("945")
		const addressFcfvSBS = accounts[2]
		const uintBXoQ2VP = BigInt("1955")
		const boolDXEAOL6 = await Liquidity_v8jLXpKi.isOwner.call({from: accounts[3]});
		const uint256kq2kM7d = await Liquidity_v8jLXpKi.calculate.call(addresseiAw1rQ, {from: accounts[3]});
		const uint64caFGlE = await Liquidity_v8jLXpKi.setRate.call(uintfyjm1dX, {from: accounts[4]});
		await Liquidity_v8jLXpKi.renounceOwnership.call({from: accounts[2]});
		const uint256LonIinB = await Liquidity_v8jLXpKi.calculate.call(addressFcfvSBS, {from: accounts[1]});
		const boolEidbEJt = await Liquidity_v8jLXpKi.emergencyWithdraw.call({from: accounts[0]});
		const uint256trrOT7 = await Liquidity_v8jLXpKi.changeLockDuration.call(uintBXoQ2VP, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringk6BTci = "DVjEjVfFB3IDE4Hu95sLBEqIVbJGwK9H4vmdQi5zdWy0B9X8qgIEgMFUIb2JtpT89QoYT"
		const addressn8RQ2mF = accounts[2]
		const addressA5PCrFE = accounts[5]
		const uintzgq4mmy = BigInt("1582")
		const uintjcothV1 = BigInt("363")
		const Liquidity_v8jLXpKi = await Liquidity_v8.new(stringk6BTci, addressn8RQ2mF, addressA5PCrFE, uintzgq4mmy, uintjcothV1, {from: accounts[4]});
		const addressSszQv1K = accounts[2]
		await Liquidity_v8jLXpKi.renounceOwnership.call({from: accounts[4]});
		const uint256kq2kM7d = await Liquidity_v8jLXpKi.calculate.call(addressSszQv1K, {from: accounts[3]});
		await Liquidity_v8jLXpKi.renounceOwnership.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringk6BTci = "DVjEjVfFB3IDE4Hu95sLBEqIVbJGwK9H4vmdQi5zdWy0B9X8qgIEgMFUIb2JtpT89QoYT"
		const addressWQccpdB = accounts[2]
		const addressIMgHC0Y = accounts[5]
		const uintSs79Q7w = BigInt("1582")
		const uintDY6UJB = BigInt("363")
		const Liquidity_v8jLXpKi = await Liquidity_v8.new(stringk6BTci, addressWQccpdB, addressIMgHC0Y, uintSs79Q7w, uintDY6UJB, {from: accounts[4]});
		const addressFHxXBen = accounts[1]
		const addressdy5F9DA = accounts[5]
		const uintM74AOtC = BigInt("1123")
		const addressBOXcbkV = await Liquidity_v8jLXpKi.transferOwnership.call(addressFHxXBen, {from: accounts[4]});
		const 
zAoP70K = await Liquidity_v8jLXpKi.userDeposits.call(addressdy5F9DA, {from: accounts[3]});
		const boolcCXkRJU = await Liquidity_v8jLXpKi.stake.call(uintM74AOtC, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringyHK7rvn = "FdbaDbDjoEgWTGNqLQgDzpFM"
		const addressCuBHwH8 = accounts[3]
		const addressMrRiRuc = accounts[2]
		const uintVf1yJ1Y = BigInt("745")
		const uintrfRpgSJ = BigInt("1815")
		const Liquidity_v8ovhu3W8 = await Liquidity_v8.new(stringyHK7rvn, addressCuBHwH8, addressMrRiRuc, uintVf1yJ1Y, uintrfRpgSJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintwr2NF0K = BigInt("786")
		const booluUJmP25 = await Liquidity_v8ovhu3W8.emergencyWithdraw.call({from: accounts[0]});
		const uint256JWAdAo = await Liquidity_v8ovhu3W8.changeLockDuration.call(uintwr2NF0K, {from: accounts[2]});
		const boolR5IZZn = await Liquidity_v8ovhu3W8.emergencyWithdraw.call({from: accounts[4]});
	});
})