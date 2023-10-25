const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringenqmdv = "RPcf93Poadcly5gHLOmqqWgCcuCvnrIeeM0yJ4LYLlWUnIrqdaTC5e34WkAzarc0V8G"
		const addresshWsfu6v = accounts[4]
		const addressAPkQc2 = accounts[5]
		const uintmJJNqTH = BigInt("446")
		const uintLtTahES = BigInt("126")
		const Liquidity_v8TpTYrMk = await Liquidity_v8.new(stringenqmdv, addresshWsfu6v, addressAPkQc2, uintmJJNqTH, uintLtTahES, {from: accounts[1]});
		const uintfFpUE2 = BigInt("901")
		const addressF5PRM9C = accounts[0]
		const uintackTz5u = BigInt("1032")
		const addressOHywJvp = accounts[1]
		const uint256MS4KinK = await Liquidity_v8TpTYrMk.changeLockDuration.call(uintfFpUE2, {from: accounts[0]});
		const boolY7l3nzV = await Liquidity_v8TpTYrMk.withdraw.call({from: accounts[5]});
		const 
PlvPPjP = await Liquidity_v8TpTYrMk._hasAllowance.call(addressOHywJvp, uintackTz5u, addressF5PRM9C, {from: accounts[4]});
		const boolaFpdOeh = await Liquidity_v8TpTYrMk.emergencyWithdraw.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringEdOx8BH = "5yO7x1us94sdjl4LIohtabj3Ukr94PIJWyCm9i1GR9wRYrIqtbFStckhfpInwolKc1ZUJ6MdberQFyb"
		const addressxXBDf2c = accounts[1]
		const addressOojKskE = accounts[4]
		const uintTtB4NVv = BigInt("197")
		const uintCw6Qz33 = BigInt("89")
		const Liquidity_v8fjbpsjr = await Liquidity_v8.new(stringEdOx8BH, addressxXBDf2c, addressOojKskE, uintTtB4NVv, uintCw6Qz33, {from: accounts[2]});
		const uintr8d28bs = BigInt("579")
		const boolFVS5cDw = await Liquidity_v8fjbpsjr.emergencyWithdraw.call({from: accounts[4]});
		const boolL57GNvG = await Liquidity_v8fjbpsjr.stake.call(uintr8d28bs, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringPye2RcQ = "cjGzoPR2Dv5HyAdUIL8hFoGXk5koCyWuvZQXDCm6oqdz25voRpJ"
		const addresswsmOLjB = accounts[4]
		const addressW2vJEw2 = accounts[1]
		const uintxFIdsX = BigInt("1522")
		const uintThhgmeg = BigInt("648")
		const Liquidity_v8X2rste = await Liquidity_v8.new(stringPye2RcQ, addresswsmOLjB, addressW2vJEw2, uintxFIdsX, uintThhgmeg, {from: accounts[2]});
		const uintQcisGpc = BigInt("835")
		const addressfVObFPH = accounts[1]
		const uintW6puvsH = BigInt("931")
		const boolULee4j = await Liquidity_v8X2rste.isOwner.call({from: accounts[1]});
		const boolHFmsulF = await Liquidity_v8X2rste.stake.call(uintQcisGpc, {from: accounts[0]});
		const uint256TbsapLC = await Liquidity_v8X2rste.calculate.call(addressfVObFPH, {from: accounts[2]});
		const boolbQERQ74 = await Liquidity_v8X2rste.stake.call(uintW6puvsH, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringqrv0oA2 = "hQPxTKirY84rhUXyUUaJg7sFL2Q3rYUZbVfaew2jFO4TkPHrV0LvXcoFnfU0p3oIUBjFD7nsiw7HhKXNO63G1eMppgDs5ozg"
		const addressJXFNs28 = accounts[1]
		const addressT3nQc81 = accounts[3]
		const uintWpKpEvd = BigInt("825")
		const uintqRzR6Yl = BigInt("1280")
		const Liquidity_v8L7A2zZ3 = await Liquidity_v8.new(stringqrv0oA2, addressJXFNs28, addressT3nQc81, uintWpKpEvd, uintqRzR6Yl, {from: accounts[1]});
		const uintt6YxtEV = BigInt("1403")
		const uintR1jDDok = BigInt("1787")
		const uint64gwI5bp = await Liquidity_v8L7A2zZ3.setRate.call(uintt6YxtEV, {from: accounts[1]});
		const uint256K4WaSyX = await Liquidity_v8L7A2zZ3.changeLockDuration.call(uintR1jDDok, {from: accounts[1]});
		await Liquidity_v8L7A2zZ3.renounceOwnership.call({from: accounts[0]});
		const boolZYcSJ6C = await Liquidity_v8L7A2zZ3.withdraw.call({from: accounts[3]});
		await Liquidity_v8L7A2zZ3.renounceOwnership.call({from: accounts[2]});
		const boolUiH4EaJ = await Liquidity_v8L7A2zZ3.emergencyWithdraw.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringfpanfZX = "mpgrD5o1tpYrbsYtReCSJQuD7nx9JJEbqaKbS4yRbbOd35R2KJ6BhgVK9epzlvXDbmwiYu7BXJLL8C5nSoJp5vD0g"
		const addressBPiVywC = accounts[1]
		const addressEpPJ0qe = accounts[1]
		const uint36RHXQ = BigInt("1742")
		const uintat10422 = BigInt("117")
		const Liquidity_v8wp6hgGG = await Liquidity_v8.new(stringfpanfZX, addressBPiVywC, addressEpPJ0qe, uint36RHXQ, uintat10422, {from: accounts[4]});
		const addressuTZW1E7 = "0x0000000000000000000000000000000000000001"
		const uintSN2luYg = BigInt("1056")
		const 
zxbUSsc = await Liquidity_v8wp6hgGG.userDeposits.call(addressuTZW1E7, {from: "0x0000000000000000000000000000000000000001"});
		const boolGOt0RC = await Liquidity_v8wp6hgGG.withdraw.call({from: accounts[0]});
		const uint64soRILNS = await Liquidity_v8wp6hgGG.setRate.call(uintSN2luYg, {from: accounts[2]});
		const boolJxpjtZv = await Liquidity_v8wp6hgGG.isOwner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringOq3p6Kw = "nBz7FUiHJoMRHQnkm2LGdptI5GqchEnZ5Yl7tHV5Mb8HciKip5CRsgWAy3fbl6PL"
		const addressfhbsZRo = "0x0000000000000000000000000000000000000001"
		const addressVshLLXF = "0x0000000000000000000000000000000000000001"
		const uintPX7ez3g = BigInt("1917")
		const uintMNOy9E2 = BigInt("1127")
		const Liquidity_v8I63b9nC = await Liquidity_v8.new(stringOq3p6Kw, addressfhbsZRo, addressVshLLXF, uintPX7ez3g, uintMNOy9E2, {from: "0x0000000000000000000000000000000000000001"});
		const boolCFtVs9J = await Liquidity_v8I63b9nC.isOwner.call({from: accounts[2]});
		const boolP5SWV1f = await Liquidity_v8I63b9nC.isOwner.call({from: accounts[0]});
		const boolIBlhW2b = await Liquidity_v8I63b9nC.withdraw.call({from: accounts[1]});
		const boolOjJ261D = await Liquidity_v8I63b9nC.isOwner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringYbMH4dx = "QtlFDq1DxXicR82MjCkoCTaaaiqaYaYXlEGN3yH5LKRjMt3cBH1PLTmAP"
		const addresshqm6RP5 = accounts[1]
		const addressPSwV3xu = accounts[3]
		const uintAP12Z6Y = BigInt("1983")
		const uintNtJK8Zl = BigInt("219")
		const Liquidity_v8eIE0GyH = await Liquidity_v8.new(stringYbMH4dx, addresshqm6RP5, addressPSwV3xu, uintAP12Z6Y, uintNtJK8Zl, {from: accounts[5]});
		const uintc6btdQ3 = BigInt("1243")
		const addressuC3FCqL = accounts[1]
		const uintLveeLix = BigInt("773")
		const addresswDJdrSm = "0x0000000000000000000000000000000000000001"
		await Liquidity_v8eIE0GyH.onlyOwner.call({from: accounts[4]});
		const boolvBK2awo = await Liquidity_v8eIE0GyH.withdraw.call({from: accounts[1]});
		const boolzZ1CSr6 = await Liquidity_v8eIE0GyH.addReward.call(uintc6btdQ3, {from: accounts[0]});
		const 
Fhdh8x = await Liquidity_v8eIE0GyH._hasAllowance.call(addresswDJdrSm, uintLveeLix, addressuC3FCqL, {from: accounts[0]});
		const boolVTpGk2 = await Liquidity_v8eIE0GyH.withdraw.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringJhuJkx6 = "ocVbLgPwEEM0hjN"
		const addressluiRl3N = accounts[1]
		const addressatNBbL = accounts[4]
		const uintY8MKnDA = BigInt("243")
		const uintEDTW5ON = BigInt("735")
		const Liquidity_v8JIm7pgq = await Liquidity_v8.new(stringJhuJkx6, addressluiRl3N, addressatNBbL, uintY8MKnDA, uintEDTW5ON, {from: accounts[4]});
		const addressFQmlij0 = accounts[1]
		const uintTDcpnuX = BigInt("563")
		const addressOuQnvvF = accounts[3]
		await Liquidity_v8JIm7pgq.renounceOwnership.call({from: accounts[4]});
		const 
Di8SMvs = await Liquidity_v8JIm7pgq._hasAllowance.call(addressOuQnvvF, uintTDcpnuX, addressFQmlij0, {from: "0x0000000000000000000000000000000000000001"});
		const boolBxdXLWK = await Liquidity_v8JIm7pgq.emergencyWithdraw.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringJhuJkx6 = "ocVbLgPwEEM0hjN"
		const addressIfFm7iG = accounts[1]
		const addressX1iP5Ia = accounts[4]
		const uintpElSFLy = BigInt("243")
		const uintg4yk48t = BigInt("735")
		const Liquidity_v8JIm7pgq = await Liquidity_v8.new(stringJhuJkx6, addressIfFm7iG, addressX1iP5Ia, uintpElSFLy, uintg4yk48t, {from: accounts[4]});
		const addressVubnvtl = accounts[4]
		const uintLethiam = BigInt("1751")
		const uint256TydJZBy = await Liquidity_v8JIm7pgq.calculate.call(addressVubnvtl, {from: accounts[0]});
		const boolBxdXLWK = await Liquidity_v8JIm7pgq.emergencyWithdraw.call({from: accounts[1]});
		const uint64hizw1sX = await Liquidity_v8JIm7pgq.setRate.call(uintLethiam, {from: accounts[2]});
		const boold4PbnOX = await Liquidity_v8JIm7pgq.emergencyWithdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringJhuJkx6 = "ocVbLgPwEEM0hjN"
		const addresshz7hPy = accounts[1]
		const addressDUfZJcM = accounts[4]
		const uintZdCG28h = BigInt("243")
		const uinta6BN1m = BigInt("735")
		const Liquidity_v8JIm7pgq = await Liquidity_v8.new(stringJhuJkx6, addresshz7hPy, addressDUfZJcM, uintZdCG28h, uinta6BN1m, {from: accounts[4]});
		const addressMBymnuk = accounts[2]
		const addressZXD8TzN = await Liquidity_v8JIm7pgq.owner.call({from: accounts[0]});
		const boolTwtOx0W = await Liquidity_v8JIm7pgq.withdraw.call({from: accounts[3]});
		const addresshdzc8rO = await Liquidity_v8JIm7pgq.owner.call({from: accounts[2]});
		const 
dIYRnhQ = await Liquidity_v8JIm7pgq.userDeposits.call(addressMBymnuk, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringR9ACWa5 = "ddbKm6"
		const addressiQGeYI = accounts[4]
		const addressDdXxLZ = accounts[2]
		const uint4ugJlt = BigInt("996")
		const uintfRorcxP = BigInt("250")
		const Liquidity_v8myGbNuG = await Liquidity_v8.new(stringR9ACWa5, addressiQGeYI, addressDdXxLZ, uint4ugJlt, uintfRorcxP, {from: accounts[0]});
		const addressAquqqWT = accounts[1]
		const addressVl1REqP = accounts[1]
		const uintZGlAqW = BigInt("1297")
		const addressZdzv1bL = await Liquidity_v8myGbNuG.owner.call({from: accounts[5]});
		const addressnTK6K0s = await Liquidity_v8myGbNuG.transferOwnership.call(addressAquqqWT, {from: accounts[0]});
		const uint256nO536Po = await Liquidity_v8myGbNuG.calculate.call(addressVl1REqP, {from: accounts[5]});
		const boolXAmMTSH = await Liquidity_v8myGbNuG.addReward.call(uintZGlAqW, {from: accounts[2]});
	});
})