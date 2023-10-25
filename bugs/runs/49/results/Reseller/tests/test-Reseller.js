const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrKZYHO4q = accounts[3]
		const FOSTERAddrteldalg = accounts[3]
		const initialRatetb5CxsO = BigInt("1794")
		const initialPeriodnWXwjfe = BigInt("1858")
		const initialOwnermZlvifi = accounts[1]
		const contractozFSiEs = await Reseller.new(USDTAddrKZYHO4q, FOSTERAddrteldalg, initialRatetb5CxsO, initialPeriodnWXwjfe, initialOwnermZlvifi, {from: accounts[2]});
		const accountu5gQjJY = accounts[2]
		const amountTGahTFN = BigInt("1189")
		const newBoss4RB5olq3 = accounts[4]
		const commentGkThcOk = "mihaJ1FCk1m9xMjmHXs2J61K75yC"
		const _ref5t9dwmIe = accounts[3]
		const _ref4vhfQIxl = "0x0000000000000000000000000000000000000001"
		const _ref3bYsg8ai = accounts[0]
		const _ref2mSIL9Mi = "0x0000000000000000000000000000000000000001"
		const _ref1sHPM7se = accounts[4]
		const valueIVP9vKR = BigInt("1562")
		const nullVnWtgm = await contractozFSiEs.balanceUSDT.call(accountu5gQjJY, {from: "0x0000000000000000000000000000000000000001"});
		const nullh5BVSco = await contractozFSiEs.getEstimation.call(amountTGahTFN, {from: accounts[1]});
		await contractozFSiEs.deposeBoss4.call(newBoss4RB5olq3, {from: accounts[4]});
		await contractozFSiEs.purchase.call(valueIVP9vKR, _ref1sHPM7se, _ref2mSIL9Mi, _ref3bYsg8ai, _ref4vhfQIxl, _ref5t9dwmIe, commentGkThcOk, {from: accounts[5]});

		await expect(contractozFSiEs.balanceUSDT.call(accountu5gQjJY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfynSzT = accounts[5]
		const FOSTERAddrRXQFv7Z = "0x0000000000000000000000000000000000000001"
		const initialRateXdZbiBt = BigInt("333")
		const initialPeriodgs4CgM5 = BigInt("828")
		const initialOwnerw5JkQq5 = accounts[5]
		const contractlXunRRl = await Reseller.new(USDTAddrfynSzT, FOSTERAddrRXQFv7Z, initialRateXdZbiBt, initialPeriodgs4CgM5, initialOwnerw5JkQq5, {from: accounts[4]});
		const newMinimumh6YOomF = BigInt("1191")
		await contractlXunRRl.switchState.call({from: accounts[5]});
		await contractlXunRRl.setMinimum.call(newMinimumh6YOomF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractlXunRRl.switchState.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrEh2B1Ul = accounts[3]
		const FOSTERAddrk5Chbkl = accounts[0]
		const initialRateGY0YoIC = BigInt("1615")
		const initialPeriodHZU4gFv = BigInt("744")
		const initialOwnerGjvd0A5 = accounts[0]
		const contractp0vRj7j = await Reseller.new(USDTAddrEh2B1Ul, FOSTERAddrk5Chbkl, initialRateGY0YoIC, initialPeriodHZU4gFv, initialOwnerGjvd0A5, {from: accounts[2]});
		const newFeeDjonKv5 = BigInt("113")
		const accountuLlX116 = accounts[5]
		const _periodyyOrnD = BigInt("1594")
		const amountCSIrK6R = BigInt("1831")
		const recipientffoMMUg = accounts[5]
		await contractp0vRj7j.setFee.call(newFeeDjonKv5, {from: accounts[3]});
		const nullHIz1GIr = await contractp0vRj7j.allowanceUSDT.call(accountuLlX116, {from: accounts[5]});
		await contractp0vRj7j.freezeAndTransfer.call(recipientffoMMUg, amountCSIrK6R, _periodyyOrnD, {from: accounts[4]});

		await expect(contractp0vRj7j.setFee.call(newFeeDjonKv5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrhXcfdk = accounts[5]
		const FOSTERAddrnJSJG0L = accounts[2]
		const initialRateuzwTVrm = BigInt("880")
		const initialPeriodOhDzNqT = BigInt("1886")
		const initialOwnerIiFFsO3 = accounts[3]
		const contractw3gG8bf = await Reseller.new(USDTAddrhXcfdk, FOSTERAddrnJSJG0L, initialRateuzwTVrm, initialPeriodOhDzNqT, initialOwnerIiFFsO3, {from: "0x0000000000000000000000000000000000000001"});
		const newBoss3BSSB3iI = accounts[1]
		const accountEzVmUp = accounts[3]
		const newBoss2AM3eCo6 = accounts[1]
		const level5F9G7vRa = BigInt("91")
		const level4xfhIXLh = BigInt("127")
		const level3EK9x56q = BigInt("77")
		const level2VrlEhlM = BigInt("204")
		const level1DdMHwYZ = BigInt("219")
		const _perioduYkKWQ = BigInt("1657")
		const amount9Rl9gk = BigInt("1309")
		const recipientFOEMUI = accounts[2]
		await contractw3gG8bf.deposeBoss3.call(newBoss3BSSB3iI, {from: accounts[4]});
		const nullLsQhxjL = await contractw3gG8bf.balanceUSDT.call(accountEzVmUp, {from: accounts[3]});
		await contractw3gG8bf.deposeBoss2.call(newBoss2AM3eCo6, {from: accounts[4]});
		await contractw3gG8bf.setRefBonus.call(level1DdMHwYZ, level2VrlEhlM, level3EK9x56q, level4xfhIXLh, level5F9G7vRa, {from: accounts[1]});
		await contractw3gG8bf.freezeAndTransfer.call(recipientFOEMUI, amount9Rl9gk, _perioduYkKWQ, {from: accounts[3]});
	});

	it('test for Reseller', async () => {
		const USDTAddrXCZLWVM = accounts[1]
		const FOSTERAddrquZJOP0 = accounts[0]
		const initialRateTf7o9ei = BigInt("1902")
		const initialPeriodzCBpF8 = BigInt("937")
		const initialOwnerOiTgrhz = accounts[1]
		const contractdnndXGe = await Reseller.new(USDTAddrXCZLWVM, FOSTERAddrquZJOP0, initialRateTf7o9ei, initialPeriodzCBpF8, initialOwnerOiTgrhz, {from: accounts[4]});
		const newBoss383o5NR = accounts[2]
		const newMinimumdLLLo8I = BigInt("1750")
		const accountUgofOlW = "0x0000000000000000000000000000000000000001"
		await contractdnndXGe.deposeBoss3.call(newBoss383o5NR, {from: accounts[2]});
		await contractdnndXGe.setMinimum.call(newMinimumdLLLo8I, {from: accounts[5]});
		await contractdnndXGe.switchState.call({from: accounts[1]});
		const nulluhunR1l = await contractdnndXGe.allowanceUSDT.call(accountUgofOlW, {from: accounts[5]});

		await expect(contractdnndXGe.deposeBoss3.call(newBoss383o5NR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCwLYjrs = accounts[2]
		const FOSTERAddrO6goxRv = accounts[0]
		const initialRateRbvh24k = BigInt("83")
		const initialPeriodJJRfyS3 = BigInt("768")
		const initialOwnerSd1kaWF = accounts[3]
		const contractegTg6iy = await Reseller.new(USDTAddrCwLYjrs, FOSTERAddrO6goxRv, initialRateRbvh24k, initialPeriodJJRfyS3, initialOwnerSd1kaWF, {from: accounts[1]});
		const newBoss2nyx0YXF = "0x0000000000000000000000000000000000000001"
		const newBoss4JPrDqlG = accounts[0]
		const accountMCXg0gK = "0x0000000000000000000000000000000000000001"
		const accountZJeFtgY = accounts[1]
		await contractegTg6iy.deposeBoss2.call(newBoss2nyx0YXF, {from: accounts[1]});
		await contractegTg6iy.deposeBoss4.call(newBoss4JPrDqlG, {from: accounts[2]});
		const nullRuTFqoN = await contractegTg6iy.balanceFOSTER.call(accountMCXg0gK, {from: accounts[1]});
		const nullsyixKtA = await contractegTg6iy.balanceUSDT.call(accountZJeFtgY, {from: accounts[4]});

		await expect(contractegTg6iy.deposeBoss2.call(newBoss2nyx0YXF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrEtlagQ2 = accounts[4]
		const FOSTERAddrwboGd45 = accounts[3]
		const initialRateuvOgkV = BigInt("675")
		const initialPeriodMeFb0C4 = BigInt("643")
		const initialOwneri7gI9TW = accounts[3]
		const contractzat0Q3x = await Reseller.new(USDTAddrEtlagQ2, FOSTERAddrwboGd45, initialRateuvOgkV, initialPeriodMeFb0C4, initialOwneri7gI9TW, {from: accounts[4]});
		const newBoss1AFhb9uw = accounts[4]
		const accountSDpPhHr = accounts[2]
		await contractzat0Q3x.deposeBoss1.call(newBoss1AFhb9uw, {from: accounts[4]});
		const nullDB9AndC = await contractzat0Q3x.allowanceFOSTER.call(accountSDpPhHr, {from: accounts[4]});

		await expect(contractzat0Q3x.deposeBoss1.call(newBoss1AFhb9uw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrwCrkXFF = accounts[0]
		const FOSTERAddr0CUAwR = accounts[3]
		const initialRateRqF4nt = BigInt("1307")
		const initialPerioda2JI5PO = BigInt("1444")
		const initialOwnerhNafZIg = accounts[0]
		const contractzspEmyU = await Reseller.new(USDTAddrwCrkXFF, FOSTERAddr0CUAwR, initialRateRqF4nt, initialPerioda2JI5PO, initialOwnerhNafZIg, {from: accounts[3]});
		const newBoss4ABPkukk = accounts[4]
		const newBoss3WlKYbz8 = accounts[0]
		const valueCHR21j0 = BigInt("444")
		const recipientnSfp5bJ = accounts[0]
		const ERC20TokenKJ4qhlG = accounts[5]
		const accounti8dknA = accounts[3]
		await contractzspEmyU.deposeBoss4.call(newBoss4ABPkukk, {from: accounts[0]});
		await contractzspEmyU.deposeBoss3.call(newBoss3WlKYbz8, {from: accounts[4]});
		await contractzspEmyU.withdrawERC20.call(ERC20TokenKJ4qhlG, recipientnSfp5bJ, valueCHR21j0, {from: accounts[0]});
		const nullgiawiY = await contractzspEmyU.allowanceFOSTER.call(accounti8dknA, {from: accounts[0]});

		await expect(contractzspEmyU.deposeBoss4.call(newBoss4ABPkukk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZUZv0dw = accounts[0]
		const FOSTERAddrUReqir5 = accounts[1]
		const initialRateYlJCy4E = BigInt("1243")
		const initialPeriodZFpMSO = BigInt("1310")
		const initialOwnerBRUmM61 = accounts[0]
		const contractoQz6aVV = await Reseller.new(USDTAddrZUZv0dw, FOSTERAddrUReqir5, initialRateYlJCy4E, initialPeriodZFpMSO, initialOwnerBRUmM61, {from: accounts[3]});
		const newBoss3rFY6fLM = accounts[4]
		const newRateYHOaWxU = BigInt("1681")
		await contractoQz6aVV.deposeBoss3.call(newBoss3rFY6fLM, {from: accounts[0]});
		await contractoQz6aVV.setRate.call(newRateYHOaWxU, {from: accounts[5]});

		await expect(contractoQz6aVV.deposeBoss3.call(newBoss3rFY6fLM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrISlNdt0 = accounts[5]
		const FOSTERAddrvdupEfM = "0x0000000000000000000000000000000000000001"
		const initialRateJRwcjqy = BigInt("333")
		const initialPeriodKHYnvzz = BigInt("828")
		const initialOwnerqrTjrMw = accounts[5]
		const contractrybfJFN = await Reseller.new(USDTAddrISlNdt0, FOSTERAddrvdupEfM, initialRateJRwcjqy, initialPeriodKHYnvzz, initialOwnerqrTjrMw, {from: accounts[4]});
		const valuegreiXbm = BigInt("391")
		const valuemg6zuoK = BigInt("280")
		const recipient9Q3D5B = accounts[2]
		const ERC20Token1vWQAY = accounts[5]
		const newMinimume3FesiF = BigInt("1182")
		await contractrybfJFN.switchState.call({from: accounts[5]});
		await contractrybfJFN.withdraw.call(valuegreiXbm, {from: accounts[3]});
		await contractrybfJFN.withdrawERC20.call(ERC20Token1vWQAY, recipient9Q3D5B, valuemg6zuoK, {from: accounts[1]});
		await contractrybfJFN.setMinimum.call(newMinimume3FesiF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractrybfJFN.switchState.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlF960MQ = accounts[5]
		const FOSTERAddr11WRkY = "0x0000000000000000000000000000000000000001"
		const initialRateKOGaC0l = BigInt("333")
		const initialPeriodNdYn5k = BigInt("828")
		const initialOwnerW58ykCc = accounts[5]
		const contractaBYV0t4 = await Reseller.new(USDTAddrlF960MQ, FOSTERAddr11WRkY, initialRateKOGaC0l, initialPeriodNdYn5k, initialOwnerW58ykCc, {from: accounts[4]});
		const _periodthnulEm = BigInt("1408")
		const amountzTN2RGn = BigInt("1540")
		const recipientMFxLGkO = accounts[0]
		const newMinimumOwyo3kT = BigInt("1191")
		await contractaBYV0t4.switchState.call({from: accounts[5]});
		await contractaBYV0t4.freezeAndTransfer.call(recipientMFxLGkO, amountzTN2RGn, _periodthnulEm, {from: accounts[0]});
		await contractaBYV0t4.setMinimum.call(newMinimumOwyo3kT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractaBYV0t4.switchState.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMSHfAWO = accounts[5]
		const FOSTERAddrFBkP7qf = "0x0000000000000000000000000000000000000001"
		const initialRateeoFrBZo = BigInt("333")
		const initialPeriodZ6nsjQ0 = BigInt("828")
		const initialOwnerf1TGhZ = accounts[5]
		const contractziX4Ajx = await Reseller.new(USDTAddrMSHfAWO, FOSTERAddrFBkP7qf, initialRateeoFrBZo, initialPeriodZ6nsjQ0, initialOwnerf1TGhZ, {from: accounts[4]});
		const newPeriodHFhE5Si = BigInt("1965")
		const accountps00Q0 = accounts[0]
		const newMinimumZdamPiv = BigInt("1191")
		await contractziX4Ajx.switchState.call({from: accounts[5]});
		await contractziX4Ajx.setPeriod.call(newPeriodHFhE5Si, {from: "0x0000000000000000000000000000000000000001"});
		const nullXclftI = await contractziX4Ajx.allowanceUSDT.call(accountps00Q0, {from: accounts[4]});
		await contractziX4Ajx.setMinimum.call(newMinimumZdamPiv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractziX4Ajx.switchState.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtmhMLaI = accounts[5]
		const FOSTERAddrEDpmtvg = "0x0000000000000000000000000000000000000001"
		const initialRateaWtU4P = BigInt("333")
		const initialPeriodiWUNclw = BigInt("828")
		const initialOwneriECsqCk = accounts[5]
		const contractQ2IGKRT = await Reseller.new(USDTAddrtmhMLaI, FOSTERAddrEDpmtvg, initialRateaWtU4P, initialPeriodiWUNclw, initialOwneriECsqCk, {from: accounts[4]});
		const accountIQVQtLG = accounts[2]
		const newMinimumbcx6mZJ = BigInt("1191")
		await contractQ2IGKRT.switchState.call({from: accounts[5]});
		const nullYDFNhas = await contractQ2IGKRT.allowanceUSDT.call(accountIQVQtLG, {from: accounts[4]});
		await contractQ2IGKRT.setMinimum.call(newMinimumbcx6mZJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractQ2IGKRT.switchState.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGA80c2O = accounts[5]
		const FOSTERAddrDE8MDys = "0x0000000000000000000000000000000000000001"
		const initialRateUtntuem = BigInt("333")
		const initialPeriodq51EgIT = BigInt("828")
		const initialOwnerTD8bjP9 = accounts[5]
		const contracthG63l4s = await Reseller.new(USDTAddrGA80c2O, FOSTERAddrDE8MDys, initialRateUtntuem, initialPeriodq51EgIT, initialOwnerTD8bjP9, {from: accounts[4]});
		const level5TSyPwp0 = BigInt("210")
		const level4m8ENly2 = BigInt("72")
		const level3JYmJ5gS = BigInt("66")
		const level2AueCFjP = BigInt("22")
		const level1aRRjEKH = BigInt("37")
		const newMinimumfh1pN16 = BigInt("1191")
		await contracthG63l4s.switchState.call({from: accounts[5]});
		await contracthG63l4s.setRefBonus.call(level1aRRjEKH, level2AueCFjP, level3JYmJ5gS, level4m8ENly2, level5TSyPwp0, {from: accounts[1]});
		await contracthG63l4s.setMinimum.call(newMinimumfh1pN16, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contracthG63l4s.switchState.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrI5RD9TB = accounts[5]
		const FOSTERAddrH7LRE3 = "0x0000000000000000000000000000000000000001"
		const initialRateIkBlmXF = BigInt("333")
		const initialPeriodIb2olRG = BigInt("828")
		const initialOwnerGVmhEzv = accounts[5]
		const contractkTKPeF3 = await Reseller.new(USDTAddrI5RD9TB, FOSTERAddrH7LRE3, initialRateIkBlmXF, initialPeriodIb2olRG, initialOwnerGVmhEzv, {from: accounts[4]});
		const commentjedmygj = "blHNmd1K7mQodTvJyy6Su0rL6zhRXpvbMPuDNv5WiI5Qvwq67TaDzJQIsrSf"
		const _ref5wkRp95K = accounts[3]
		const _ref4jnjoGnI = accounts[4]
		const _ref3HZtZ9CB = accounts[2]
		const _ref2W1sWsWj = accounts[1]
		const _ref1qGcJSJN = accounts[1]
		const valuehDQt8aP = BigInt("472")
		const newMinimumJ94Q1XM = BigInt("736")
		const level5xS53olD = BigInt("122")
		const level4xr571Hm = BigInt("238")
		const level3AIHqHIR = BigInt("227")
		const level2GRa29uB = BigInt("96")
		const level1K1vYheY = BigInt("135")
		await contractkTKPeF3.purchase.call(valuehDQt8aP, _ref1qGcJSJN, _ref2W1sWsWj, _ref3HZtZ9CB, _ref4jnjoGnI, _ref5wkRp95K, commentjedmygj, {from: accounts[1]});
		await contractkTKPeF3.setMinimum.call(newMinimumJ94Q1XM, {from: "0x0000000000000000000000000000000000000001"});
		await contractkTKPeF3.setRefBonus.call(level1K1vYheY, level2GRa29uB, level3AIHqHIR, level4xr571Hm, level5xS53olD, {from: accounts[2]});

		await expect(contractkTKPeF3.purchase.call(valuehDQt8aP, _ref1qGcJSJN, _ref2W1sWsWj, _ref3HZtZ9CB, _ref4jnjoGnI, _ref5wkRp95K, commentjedmygj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrqgrbqhd = accounts[5]
		const FOSTERAddrgNPdKZb = "0x0000000000000000000000000000000000000001"
		const initialRateHXzKkgS = BigInt("333")
		const initialPeriodZxtRHW3 = BigInt("828")
		const initialOwnerj7u7N9k = accounts[5]
		const contractSxJ0moj = await Reseller.new(USDTAddrqgrbqhd, FOSTERAddrgNPdKZb, initialRateHXzKkgS, initialPeriodZxtRHW3, initialOwnerj7u7N9k, {from: accounts[4]});
		const _ref5hTPNghg = accounts[1]
		const _ref4RBBfEKQ = accounts[5]
		const _ref3R5Rt6yn = accounts[2]
		const _ref2vaLQLT = accounts[3]
		const _ref1vQ7uhO3 = "0x0000000000000000000000000000000000000001"
		const valueGv5E0pW = BigInt("798")
		const newMinimumHF4Xa3 = BigInt("958")
		await contractSxJ0moj.buy.call(valueGv5E0pW, _ref1vQ7uhO3, _ref2vaLQLT, _ref3R5Rt6yn, _ref4RBBfEKQ, _ref5hTPNghg, {from: "0x0000000000000000000000000000000000000001"});
		await contractSxJ0moj.setMinimum.call(newMinimumHF4Xa3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractSxJ0moj.buy.call(valueGv5E0pW, _ref1vQ7uhO3, _ref2vaLQLT, _ref3R5Rt6yn, _ref4RBBfEKQ, _ref5hTPNghg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrSjvBLDW = accounts[5]
		const FOSTERAddrVWd4zES = "0x0000000000000000000000000000000000000001"
		const initialRateHtFMK6b = BigInt("333")
		const initialPeriodCwIaUy9 = BigInt("828")
		const initialOwnersB3KyxJ = accounts[5]
		const contractsKgJ12d = await Reseller.new(USDTAddrSjvBLDW, FOSTERAddrVWd4zES, initialRateHtFMK6b, initialPeriodCwIaUy9, initialOwnersB3KyxJ, {from: accounts[4]});
		const valueaZV6Huy = BigInt("1178")
		const recipient9AtxpW = accounts[1]
		const ERC20TokenMwYKkaZ = accounts[2]
		await contractsKgJ12d.withdrawERC20.call(ERC20TokenMwYKkaZ, recipient9AtxpW, valueaZV6Huy, {from: accounts[1]});

		await expect(contractsKgJ12d.withdrawERC20.call(ERC20TokenMwYKkaZ, recipient9AtxpW, valueaZV6Huy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNnOeL5s = accounts[5]
		const FOSTERAddrxb66tlS = "0x0000000000000000000000000000000000000001"
		const initialRateJSYxGyc = BigInt("333")
		const initialPeriodXempUzf = BigInt("828")
		const initialOwnersLYOlv = accounts[5]
		const contracty8YHKvn = await Reseller.new(USDTAddrNnOeL5s, FOSTERAddrxb66tlS, initialRateJSYxGyc, initialPeriodXempUzf, initialOwnersLYOlv, {from: accounts[4]});
		const amountIHTxfu = BigInt("1809")
		const newMinimumg1XtuV = BigInt("1057")
		const newRatekip6Cqt = BigInt("1377")
		const nullvxKp4oE = await contracty8YHKvn.getEstimation.call(amountIHTxfu, {from: "0x0000000000000000000000000000000000000001"});
		await contracty8YHKvn.setMinimum.call(newMinimumg1XtuV, {from: "0x0000000000000000000000000000000000000001"});
		await contracty8YHKvn.setRate.call(newRatekip6Cqt, {from: accounts[5]});

		assert.equal(nullvxKp4oE, 602397)
		await expect(contracty8YHKvn.setMinimum.call(newMinimumg1XtuV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrRDJDaI0 = accounts[5]
		const FOSTERAddrxBBDFHj = "0x0000000000000000000000000000000000000001"
		const initialRatek41GUJX = BigInt("333")
		const initialPeriodmhrv9t = BigInt("828")
		const initialOwnerEXyPuRK = accounts[5]
		const contractBshABF5 = await Reseller.new(USDTAddrRDJDaI0, FOSTERAddrxBBDFHj, initialRatek41GUJX, initialPeriodmhrv9t, initialOwnerEXyPuRK, {from: accounts[4]});
		const accountkBtbYzv = accounts[1]
		const newMinimumvUUiyxH = BigInt("1191")
		const nullBnJdasD = await contractBshABF5.balanceFOSTER.call(accountkBtbYzv, {from: accounts[1]});
		await contractBshABF5.setMinimum.call(newMinimumvUUiyxH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractBshABF5.balanceFOSTER.call(accountkBtbYzv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrBz90D1 = accounts[5]
		const FOSTERAddrqGmTldK = "0x0000000000000000000000000000000000000001"
		const initialRatep8oH5gA = BigInt("333")
		const initialPeriodrJOOPZC = BigInt("828")
		const initialOwnerv5FBnvL = accounts[5]
		const contractloSBNTF = await Reseller.new(USDTAddrBz90D1, FOSTERAddrqGmTldK, initialRatep8oH5gA, initialPeriodrJOOPZC, initialOwnerv5FBnvL, {from: accounts[4]});
		const accountV2BAEBk = accounts[5]
		const newMinimumzy9JfHw = BigInt("1077")
		const nullEnzu9rd = await contractloSBNTF.allowanceFOSTER.call(accountV2BAEBk, {from: accounts[3]});
		await contractloSBNTF.setMinimum.call(newMinimumzy9JfHw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractloSBNTF.allowanceFOSTER.call(accountV2BAEBk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})