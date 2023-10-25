const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrHzV0cW = accounts[2]
		const FOSTERAddrZu50RPb = accounts[5]
		const initialRateNjsPPdY = BigInt("247")
		const initialPeriodXccNe47 = BigInt("1404")
		const initialOwnerZkaosfl = accounts[4]
		const contractGPMOI6q = await Reseller.new(USDTAddrHzV0cW, FOSTERAddrZu50RPb, initialRateNjsPPdY, initialPeriodXccNe47, initialOwnerZkaosfl, {from: accounts[4]});
		const accountKSqFo36 = accounts[3]
		const newFeeQv3BbD4 = BigInt("218")
		const amountXgDIlMU = BigInt("1785")
		const newRatej7HiYA = BigInt("614")
		const nullI3yt44E = await contractGPMOI6q.allowanceUSDT.call(accountKSqFo36, {from: accounts[3]});
		await contractGPMOI6q.setFee.call(newFeeQv3BbD4, {from: accounts[2]});
		const nullJx29Y7j = await contractGPMOI6q.getEstimation.call(amountXgDIlMU, {from: accounts[3]});
		await contractGPMOI6q.setRate.call(newRatej7HiYA, {from: accounts[3]});

		await expect(contractGPMOI6q.allowanceUSDT.call(accountKSqFo36, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkbSBAL1 = accounts[1]
		const FOSTERAddrKtKCD0i = accounts[1]
		const initialRatenuYh8FE = BigInt("1984")
		const initialPeriodBe6PMs = BigInt("1722")
		const initialOwnerDfGV659 = "0x0000000000000000000000000000000000000001"
		const contractK5rq7Hr = await Reseller.new(USDTAddrkbSBAL1, FOSTERAddrKtKCD0i, initialRatenuYh8FE, initialPeriodBe6PMs, initialOwnerDfGV659, {from: accounts[3]});
		const valuedqLjIUS = BigInt("641")
		const newRatehE3RaQu = BigInt("1420")
		await contractK5rq7Hr.withdraw.call(valuedqLjIUS, {from: "0x0000000000000000000000000000000000000001"});
		await contractK5rq7Hr.setRate.call(newRatehE3RaQu, {from: accounts[4]});

		await expect(contractK5rq7Hr.withdraw.call(valuedqLjIUS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTMOIUAA = accounts[0]
		const FOSTERAddrtWTXFLZ = accounts[4]
		const initialRateaYkfqa5 = BigInt("876")
		const initialPeriodpgH7N8j = BigInt("1235")
		const initialOwneroTGIZS = accounts[4]
		const contracthzSAYVb = await Reseller.new(USDTAddrTMOIUAA, FOSTERAddrtWTXFLZ, initialRateaYkfqa5, initialPeriodpgH7N8j, initialOwneroTGIZS, {from: accounts[3]});
		const _ref5QGvhIKi = accounts[2]
		const _ref4JkVXfW7 = accounts[4]
		const _ref3Dx1LfJu = accounts[2]
		const _ref2IFezl8g = "0x0000000000000000000000000000000000000001"
		const _ref1kIjHDNO = accounts[2]
		const valueES0Dw8H = BigInt("195")
		const newFeet82dnQX = BigInt("84")
		const _periodQg1BZdV = BigInt("1366")
		const amountGdpFGYM = BigInt("1423")
		const recipientbdSqgba = accounts[4]
		const accountBzTLozY = accounts[5]
		const newBoss1jeQNN8F = accounts[2]
		await contracthzSAYVb.buy.call(valueES0Dw8H, _ref1kIjHDNO, _ref2IFezl8g, _ref3Dx1LfJu, _ref4JkVXfW7, _ref5QGvhIKi, {from: accounts[4]});
		await contracthzSAYVb.setFee.call(newFeet82dnQX, {from: accounts[5]});
		await contracthzSAYVb.freezeAndTransfer.call(recipientbdSqgba, amountGdpFGYM, _periodQg1BZdV, {from: accounts[1]});
		const nullvddyhL6 = await contracthzSAYVb.balanceUSDT.call(accountBzTLozY, {from: accounts[5]});
		await contracthzSAYVb.deposeBoss1.call(newBoss1jeQNN8F, {from: accounts[0]});

		await expect(contracthzSAYVb.buy.call(valueES0Dw8H, _ref1kIjHDNO, _ref2IFezl8g, _ref3Dx1LfJu, _ref4JkVXfW7, _ref5QGvhIKi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrUYKBN9m = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrrxw8Tap = accounts[3]
		const initialRateyg8mXNy = BigInt("1803")
		const initialPeriodP8JOEVp = BigInt("60")
		const initialOwnerkT6nDF0 = accounts[2]
		const contractpHMcftH = await Reseller.new(USDTAddrUYKBN9m, FOSTERAddrrxw8Tap, initialRateyg8mXNy, initialPeriodP8JOEVp, initialOwnerkT6nDF0, {from: accounts[3]});
		const valueV2dv0nP = BigInt("1219")
		const recipientF9Jp3zG = accounts[2]
		const ERC20Tokenq6Nc7wu = accounts[2]
		const newBoss1kDiIHtq = accounts[4]
		const newBoss2vCdzG06 = accounts[3]
		await contractpHMcftH.withdrawERC20.call(ERC20Tokenq6Nc7wu, recipientF9Jp3zG, valueV2dv0nP, {from: accounts[4]});
		await contractpHMcftH.deposeBoss1.call(newBoss1kDiIHtq, {from: accounts[0]});
		await contractpHMcftH.deposeBoss2.call(newBoss2vCdzG06, {from: accounts[0]});

		await expect(contractpHMcftH.withdrawERC20.call(ERC20Tokenq6Nc7wu, recipientF9Jp3zG, valueV2dv0nP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrrbxGO0Q = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrTPFsxgX = accounts[4]
		const initialRateB1fSYmt = BigInt("1641")
		const initialPeriodWLiiXYc = BigInt("1434")
		const initialOwnerNdKgJY = "0x0000000000000000000000000000000000000001"
		const contractBX66nut = await Reseller.new(USDTAddrrbxGO0Q, FOSTERAddrTPFsxgX, initialRateB1fSYmt, initialPeriodWLiiXYc, initialOwnerNdKgJY, {from: accounts[3]});
		const newBoss3DBvTPNI = accounts[5]
		const newPeriodHy544Zb = BigInt("1711")
		const valueGNu7GPC = BigInt("1889")
		const accountqVy8Yw5 = accounts[3]
		await contractBX66nut.deposeBoss3.call(newBoss3DBvTPNI, {from: accounts[3]});
		await contractBX66nut.setPeriod.call(newPeriodHy544Zb, {from: accounts[1]});
		await contractBX66nut.withdraw.call(valueGNu7GPC, {from: accounts[0]});
		const nully7Ajc5g = await contractBX66nut.balanceUSDT.call(accountqVy8Yw5, {from: accounts[4]});

		await expect(contractBX66nut.deposeBoss3.call(newBoss3DBvTPNI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrvgSQRtJ = accounts[0]
		const FOSTERAddrx69KEg1 = accounts[2]
		const initialRatem7CnVn1 = BigInt("359")
		const initialPeriodNOb7nVm = BigInt("1963")
		const initialOwnerpwkIJcc = accounts[0]
		const contractWtLeYO1 = await Reseller.new(USDTAddrvgSQRtJ, FOSTERAddrx69KEg1, initialRatem7CnVn1, initialPeriodNOb7nVm, initialOwnerpwkIJcc, {from: accounts[4]});
		const newRateX6AxK3 = BigInt("400")
		const newFee0ubOVy = BigInt("218")
		const accountXqozvLp = accounts[5]
		const accountMTDk9XA = accounts[4]
		await contractWtLeYO1.setRate.call(newRateX6AxK3, {from: accounts[4]});
		await contractWtLeYO1.setFee.call(newFee0ubOVy, {from: accounts[2]});
		const nullAs7xh84 = await contractWtLeYO1.balanceFOSTER.call(accountXqozvLp, {from: accounts[1]});
		const nullxH1tin0 = await contractWtLeYO1.balanceFOSTER.call(accountMTDk9XA, {from: accounts[0]});

		await expect(contractWtLeYO1.setRate.call(newRateX6AxK3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrokhrexm = accounts[1]
		const FOSTERAddrX2fHBLg = accounts[5]
		const initialRatep7dxm2r = BigInt("1506")
		const initialPeriodi3Llq4R = BigInt("1103")
		const initialOwnerj0rUDhh = accounts[4]
		const contractNzC8i3T = await Reseller.new(USDTAddrokhrexm, FOSTERAddrX2fHBLg, initialRatep7dxm2r, initialPeriodi3Llq4R, initialOwnerj0rUDhh, {from: accounts[0]});
		const newBoss1lHvGL2q = accounts[0]
		const newBoss4Z4i4C4M = accounts[2]
		await contractNzC8i3T.deposeBoss1.call(newBoss1lHvGL2q, {from: accounts[0]});
		await contractNzC8i3T.deposeBoss4.call(newBoss4Z4i4C4M, {from: accounts[0]});

		await expect(contractNzC8i3T.deposeBoss1.call(newBoss1lHvGL2q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrgVY4vyB = accounts[1]
		const FOSTERAddrsvdhoZN = accounts[5]
		const initialRateNJ5wz9A = BigInt("1527")
		const initialPeriodLrNYlgf = BigInt("79")
		const initialOwnerhph0Jwa = accounts[3]
		const contractPwaArqZ = await Reseller.new(USDTAddrgVY4vyB, FOSTERAddrsvdhoZN, initialRateNJ5wz9A, initialPeriodLrNYlgf, initialOwnerhph0Jwa, {from: accounts[0]});
		const level5UFeRni = BigInt("202")
		const level4vtOc9d9 = BigInt("145")
		const level3NDe6IW4 = BigInt("23")
		const level2e0thrx = BigInt("39")
		const level1eYLvTqm = BigInt("52")
		const newBoss4DvGxOGv = accounts[3]
		const valueyRGsc2O = BigInt("1253")
		await contractPwaArqZ.setRefBonus.call(level1eYLvTqm, level2e0thrx, level3NDe6IW4, level4vtOc9d9, level5UFeRni, {from: accounts[3]});
		await contractPwaArqZ.deposeBoss4.call(newBoss4DvGxOGv, {from: accounts[5]});
		await contractPwaArqZ.withdraw.call(valueyRGsc2O, {from: accounts[0]});

		await expect(contractPwaArqZ.setRefBonus.call(level1eYLvTqm, level2e0thrx, level3NDe6IW4, level4vtOc9d9, level5UFeRni, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrcjExUID = accounts[1]
		const FOSTERAddrYgEJZml = accounts[5]
		const initialRatesytsUDg = BigInt("509")
		const initialPeriodWYNqLZu = BigInt("1327")
		const initialOwnerH3LrwKc = accounts[2]
		const contractklO2mff = await Reseller.new(USDTAddrcjExUID, FOSTERAddrYgEJZml, initialRatesytsUDg, initialPeriodWYNqLZu, initialOwnerH3LrwKc, {from: "0x0000000000000000000000000000000000000001"});
		const accountUs3lTJ6 = accounts[4]
		const amountbQ6THer = BigInt("1400")
		const nullDPYfQUg = await contractklO2mff.allowanceUSDT.call(accountUs3lTJ6, {from: "0x0000000000000000000000000000000000000001"});
		const nullJ58krcs = await contractklO2mff.getEstimation.call(amountbQ6THer, {from: accounts[1]});
	});

	it('test for Reseller', async () => {
		const USDTAddrRGMkD2j = accounts[0]
		const FOSTERAddrXfVwWgT = accounts[4]
		const initialRatedHTwkf9 = BigInt("876")
		const initialPeriodjtEuZxI = BigInt("1235")
		const initialOwnerplq4eB4 = accounts[4]
		const contractCZqKlLs = await Reseller.new(USDTAddrRGMkD2j, FOSTERAddrXfVwWgT, initialRatedHTwkf9, initialPeriodjtEuZxI, initialOwnerplq4eB4, {from: accounts[3]});
		const accountQvcIdHF = accounts[0]
		const amountLZziUEl = BigInt("357")
		const _ref5HgW80Q0 = accounts[2]
		const _ref4ONiPKq = accounts[4]
		const _ref3M71K2i3 = accounts[2]
		const _ref2V6PFcfB = "0x0000000000000000000000000000000000000001"
		const _ref1VdV1Vjx = accounts[2]
		const valuey0lNLl = BigInt("195")
		const newFeea7y0jMs = BigInt("64")
		const _periodIWUxsrd = BigInt("1366")
		const amountvRwSwMI = BigInt("1423")
		const recipientcpq2ip = accounts[4]
		const newBoss1eu2IGt4 = accounts[4]
		const newBoss1d3tzA5a = accounts[2]
		const nullNvjEvi9 = await contractCZqKlLs.allowanceFOSTER.call(accountQvcIdHF, {from: accounts[0]});
		const nullVjMrLZ3 = await contractCZqKlLs.getEstimation.call(amountLZziUEl, {from: accounts[0]});
		await contractCZqKlLs.buy.call(valuey0lNLl, _ref1VdV1Vjx, _ref2V6PFcfB, _ref3M71K2i3, _ref4ONiPKq, _ref5HgW80Q0, {from: accounts[4]});
		await contractCZqKlLs.setFee.call(newFeea7y0jMs, {from: accounts[5]});
		await contractCZqKlLs.freezeAndTransfer.call(recipientcpq2ip, amountvRwSwMI, _periodIWUxsrd, {from: accounts[1]});
		await contractCZqKlLs.deposeBoss1.call(newBoss1eu2IGt4, {from: accounts[0]});
		await contractCZqKlLs.deposeBoss1.call(newBoss1d3tzA5a, {from: accounts[0]});

		await expect(contractCZqKlLs.allowanceFOSTER.call(accountQvcIdHF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrrgQry9C = accounts[4]
		const FOSTERAddrgycpEUC = accounts[0]
		const initialRatemNmRc7T = BigInt("1028")
		const initialPeriodkBpTfJX = BigInt("1463")
		const initialOwnerF17PrVY = accounts[5]
		const contractGfeTXm7 = await Reseller.new(USDTAddrrgQry9C, FOSTERAddrgycpEUC, initialRatemNmRc7T, initialPeriodkBpTfJX, initialOwnerF17PrVY, {from: accounts[2]});
		const newFeejsWUHON = BigInt("181")
		const newPeriodE6UPjFq = BigInt("1595")
		const comment3IV9wi = "b9Pl9heoNwmVjwqzPkn8X9aUbHqCSsZIBrJBC9mb3KpcznJ"
		const _ref5pW3PLDX = accounts[1]
		const _ref4WrH6EGQ = accounts[1]
		const _ref3l45UOkq = accounts[3]
		const _ref2S2ytoy5 = accounts[3]
		const _ref1xOFmQ9N = accounts[3]
		const valuegp8JwI1 = BigInt("281")
		const accountC94e4Hq = accounts[0]
		await contractGfeTXm7.switchState.call({from: accounts[0]});
		await contractGfeTXm7.switchState.call({from: accounts[2]});
		await contractGfeTXm7.setFee.call(newFeejsWUHON, {from: accounts[2]});
		await contractGfeTXm7.setPeriod.call(newPeriodE6UPjFq, {from: "0x0000000000000000000000000000000000000001"});
		await contractGfeTXm7.purchase.call(valuegp8JwI1, _ref1xOFmQ9N, _ref2S2ytoy5, _ref3l45UOkq, _ref4WrH6EGQ, _ref5pW3PLDX, comment3IV9wi, {from: accounts[5]});
		const nullBhDpHU1 = await contractGfeTXm7.allowanceUSDT.call(accountC94e4Hq, {from: accounts[2]});

		await expect(contractGfeTXm7.switchState.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCbprbe2 = accounts[3]
		const FOSTERAddrSYMmoPQ = accounts[3]
		const initialRateDF5OV7K = BigInt("2000")
		const initialPeriodKUOz8Q = BigInt("1536")
		const initialOwnergevckpL = accounts[3]
		const contractV88zAIu = await Reseller.new(USDTAddrCbprbe2, FOSTERAddrSYMmoPQ, initialRateDF5OV7K, initialPeriodKUOz8Q, initialOwnergevckpL, {from: accounts[0]});
		const accountBoTckV = accounts[3]
		const valuea5rU9S0 = BigInt("1054")
		const newPeriodIbCmlYJ = BigInt("7")
		const _periodHBqRC22 = BigInt("1666")
		const amountOGjjR7T = BigInt("1785")
		const recipientDbuckj3 = accounts[2]
		const nullWx3RZO1 = await contractV88zAIu.balanceUSDT.call(accountBoTckV, {from: accounts[1]});
		await contractV88zAIu.withdraw.call(valuea5rU9S0, {from: accounts[2]});
		await contractV88zAIu.setPeriod.call(newPeriodIbCmlYJ, {from: accounts[1]});
		await contractV88zAIu.freezeAndTransfer.call(recipientDbuckj3, amountOGjjR7T, _periodHBqRC22, {from: accounts[0]});

		await expect(contractV88zAIu.balanceUSDT.call(accountBoTckV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrAxCddB = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrcfBolU3 = accounts[3]
		const initialRateobzxsDE = BigInt("1803")
		const initialPeriodl4VBGV = BigInt("60")
		const initialOwnerjc0VXxv = accounts[2]
		const contractiRcgX7T = await Reseller.new(USDTAddrAxCddB, FOSTERAddrcfBolU3, initialRateobzxsDE, initialPeriodl4VBGV, initialOwnerjc0VXxv, {from: accounts[3]});
		const newFeeFxyqP5S = BigInt("14")
		const valueTZMGlVk = BigInt("1219")
		const recipientQvL2M7i = accounts[2]
		const ERC20TokenBsbhFOa = accounts[2]
		const newBoss1o4wZk3M = accounts[5]
		const newBoss1XGCEIO5 = accounts[5]
		const newBoss2gAqTYDS = accounts[3]
		await contractiRcgX7T.setFee.call(newFeeFxyqP5S, {from: "0x0000000000000000000000000000000000000001"});
		await contractiRcgX7T.withdrawERC20.call(ERC20TokenBsbhFOa, recipientQvL2M7i, valueTZMGlVk, {from: accounts[4]});
		await contractiRcgX7T.deposeBoss1.call(newBoss1o4wZk3M, {from: accounts[0]});
		await contractiRcgX7T.deposeBoss1.call(newBoss1XGCEIO5, {from: accounts[0]});
		await contractiRcgX7T.deposeBoss2.call(newBoss2gAqTYDS, {from: accounts[0]});

		await expect(contractiRcgX7T.setFee.call(newFeeFxyqP5S, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrt1dxp3g = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrDKjoWhl = accounts[3]
		const initialRateLoM2WA = BigInt("1803")
		const initialPeriodOumqU8t = BigInt("60")
		const initialOwnernYtEKx0 = accounts[2]
		const contractOxgIpSr = await Reseller.new(USDTAddrt1dxp3g, FOSTERAddrDKjoWhl, initialRateLoM2WA, initialPeriodOumqU8t, initialOwnernYtEKx0, {from: accounts[3]});
		const _periodB2KlNWq = BigInt("1090")
		const amountBXbBv4 = BigInt("1616")
		const recipientoK3EkSr = accounts[2]
		const valueV7lR5fx = BigInt("1219")
		const recipientqeK8LIS = accounts[2]
		const ERC20TokenN9O9kFU = accounts[2]
		const newBoss1hQdDZKv = accounts[4]
		const accountTTkTkYe = accounts[1]
		const newBoss2tk7Lr44 = accounts[4]
		const valueNdWyLDD = BigInt("24")
		const newMinimumslR5Hwa = BigInt("752")
		await contractOxgIpSr.freezeAndTransfer.call(recipientoK3EkSr, amountBXbBv4, _periodB2KlNWq, {from: accounts[4]});
		await contractOxgIpSr.withdrawERC20.call(ERC20TokenN9O9kFU, recipientqeK8LIS, valueV7lR5fx, {from: accounts[4]});
		await contractOxgIpSr.deposeBoss1.call(newBoss1hQdDZKv, {from: accounts[0]});
		const nullYY69BPY = await contractOxgIpSr.balanceUSDT.call(accountTTkTkYe, {from: accounts[2]});
		await contractOxgIpSr.deposeBoss2.call(newBoss2tk7Lr44, {from: accounts[0]});
		await contractOxgIpSr.withdraw.call(valueNdWyLDD, {from: accounts[3]});
		await contractOxgIpSr.setMinimum.call(newMinimumslR5Hwa, {from: accounts[1]});

		await expect(contractOxgIpSr.freezeAndTransfer.call(recipientoK3EkSr, amountBXbBv4, _periodB2KlNWq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrnJSbzWy = accounts[5]
		const FOSTERAddrIVENkFa = accounts[4]
		const initialRateAVgCyl0 = BigInt("674")
		const initialPeriodovgFhqn = BigInt("1113")
		const initialOwnerm8xNUpl = accounts[5]
		const contractXTaoGTU = await Reseller.new(USDTAddrnJSbzWy, FOSTERAddrIVENkFa, initialRateAVgCyl0, initialPeriodovgFhqn, initialOwnerm8xNUpl, {from: accounts[2]});
		const newMinimumJx1MXqB = BigInt("1909")
		const newBoss4zgLsywI = accounts[0]
		const valueLFcH93e = BigInt("69")
		const recipientV8c7oyd = accounts[0]
		const ERC20TokenFqnJza7 = accounts[0]
		const level5IBno4ns = BigInt("219")
		const level4lbJC8qI = BigInt("7")
		const level3duToqG = BigInt("110")
		const level26eKE34 = BigInt("119")
		const level1FZGaOS = BigInt("149")
		await contractXTaoGTU.setMinimum.call(newMinimumJx1MXqB, {from: "0x0000000000000000000000000000000000000001"});
		await contractXTaoGTU.deposeBoss4.call(newBoss4zgLsywI, {from: "0x0000000000000000000000000000000000000001"});
		await contractXTaoGTU.withdrawERC20.call(ERC20TokenFqnJza7, recipientV8c7oyd, valueLFcH93e, {from: accounts[3]});
		await contractXTaoGTU.setRefBonus.call(level1FZGaOS, level26eKE34, level3duToqG, level4lbJC8qI, level5IBno4ns, {from: accounts[2]});

		await expect(contractXTaoGTU.setMinimum.call(newMinimumJx1MXqB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrK0hqYS9 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrTBgOD2j = accounts[3]
		const initialRatejKo9YEo = BigInt("1803")
		const initialPeriod9y6YnD = BigInt("60")
		const initialOwnerjVI3yZq = accounts[2]
		const contractIb1OmVo = await Reseller.new(USDTAddrK0hqYS9, FOSTERAddrTBgOD2j, initialRatejKo9YEo, initialPeriod9y6YnD, initialOwnerjVI3yZq, {from: accounts[3]});
		const newBoss2JWzUThN = accounts[4]
		const accountSGVswM = accounts[3]
		await contractIb1OmVo.deposeBoss2.call(newBoss2JWzUThN, {from: accounts[0]});
		const nullU92Xyqc = await contractIb1OmVo.allowanceUSDT.call(accountSGVswM, {from: accounts[3]});

		await expect(contractIb1OmVo.deposeBoss2.call(newBoss2JWzUThN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYtfzGP = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrWB6K69l = accounts[3]
		const initialRateOM8PHtV = BigInt("1803")
		const initialPeriodjdcIdl = BigInt("60")
		const initialOwnerZrMDCdj = accounts[2]
		const contractGJzd3Rl = await Reseller.new(USDTAddrYtfzGP, FOSTERAddrWB6K69l, initialRateOM8PHtV, initialPeriodjdcIdl, initialOwnerZrMDCdj, {from: accounts[3]});
		const amountg5LYFd3 = BigInt("79")
		const valueY8G7GLb = BigInt("1219")
		const recipientXmcufeI = accounts[3]
		const ERC20TokennJRJUVB = accounts[2]
		const commentmP57mY5 = "ATx22kCFcW20HEtXsWbAlVN1FLrvLY9O2yGzQr5"
		const _ref5GTdh0c = accounts[0]
		const _ref4d5gaNIH = "0x0000000000000000000000000000000000000001"
		const _ref3n5Uhh3S = accounts[5]
		const _ref2R7C3Wrb = accounts[4]
		const _ref1afXMham = "0x0000000000000000000000000000000000000001"
		const valuexkcyeRs = BigInt("1657")
		const newBoss2kmh240P = accounts[3]
		const newBoss3yVcLbd1 = accounts[4]
		const newBoss3O6hwF0T = accounts[1]
		const nullj4X8sUc = await contractGJzd3Rl.getEstimation.call(amountg5LYFd3, {from: accounts[0]});
		await contractGJzd3Rl.withdrawERC20.call(ERC20TokennJRJUVB, recipientXmcufeI, valueY8G7GLb, {from: accounts[4]});
		await contractGJzd3Rl.purchase.call(valuexkcyeRs, _ref1afXMham, _ref2R7C3Wrb, _ref3n5Uhh3S, _ref4d5gaNIH, _ref5GTdh0c, commentmP57mY5, {from: accounts[2]});
		await contractGJzd3Rl.deposeBoss2.call(newBoss2kmh240P, {from: accounts[0]});
		await contractGJzd3Rl.deposeBoss3.call(newBoss3yVcLbd1, {from: accounts[4]});
		await contractGJzd3Rl.deposeBoss3.call(newBoss3O6hwF0T, {from: accounts[3]});

		assert.equal(nullj4X8sUc, 142437)
		await expect(contractGJzd3Rl.withdrawERC20.call(ERC20TokennJRJUVB, recipientXmcufeI, valueY8G7GLb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddro074Uwy = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrX2frY1s = accounts[3]
		const initialRatenXfpiBV = BigInt("1803")
		const initialPeriod4PJVcm = BigInt("60")
		const initialOwnerqe7ntK3 = accounts[2]
		const contractRKBH5Fj = await Reseller.new(USDTAddro074Uwy, FOSTERAddrX2frY1s, initialRatenXfpiBV, initialPeriod4PJVcm, initialOwnerqe7ntK3, {from: accounts[3]});
		const newPeriodpUGAs8N = BigInt("1088")
		const valueEdOf42 = BigInt("1219")
		const recipientFC7rO21 = accounts[2]
		const ERC20TokenXY7gvro = accounts[2]
		const valuewjkZlev = BigInt("464")
		const newBoss2yWOgwl4 = accounts[0]
		const valueCMHqw41 = BigInt("669")
		const recipientyUmU5FK = accounts[4]
		const ERC20TokenWR5Xoej = accounts[0]
		const newBoss4eA2pLB = "0x0000000000000000000000000000000000000001"
		const newBoss2QHjmTnO = accounts[4]
		await contractRKBH5Fj.setPeriod.call(newPeriodpUGAs8N, {from: "0x0000000000000000000000000000000000000001"});
		await contractRKBH5Fj.withdrawERC20.call(ERC20TokenXY7gvro, recipientFC7rO21, valueEdOf42, {from: accounts[4]});
		await contractRKBH5Fj.withdraw.call(valuewjkZlev, {from: accounts[5]});
		await contractRKBH5Fj.deposeBoss2.call(newBoss2yWOgwl4, {from: accounts[3]});
		await contractRKBH5Fj.withdrawERC20.call(ERC20TokenWR5Xoej, recipientyUmU5FK, valueCMHqw41, {from: accounts[4]});
		await contractRKBH5Fj.deposeBoss4.call(newBoss4eA2pLB, {from: accounts[3]});
		await contractRKBH5Fj.deposeBoss2.call(newBoss2QHjmTnO, {from: accounts[0]});

		await expect(contractRKBH5Fj.setPeriod.call(newPeriodpUGAs8N, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr3BWn5p = accounts[0]
		const FOSTERAddrahz0TQy = accounts[4]
		const initialRatehPjb5wK = BigInt("876")
		const initialPeriodpATSFQk = BigInt("1235")
		const initialOwnergl81WNP = accounts[4]
		const contractmnmW2Kx = await Reseller.new(USDTAddr3BWn5p, FOSTERAddrahz0TQy, initialRatehPjb5wK, initialPeriodpATSFQk, initialOwnergl81WNP, {from: accounts[3]});
		const commentmEK9USg = "K3DafQOGhTRk5tSj8XuWMnVbpiaE9eg4Q"
		const _ref5rPpmVfu = accounts[3]
		const _ref4Yu9fHKq = accounts[3]
		const _ref3gAyqoN = accounts[3]
		const _ref2vP4xvNn = accounts[4]
		const _ref1nbJfktQ = accounts[2]
		const valueQ9THxMd = BigInt("1042")
		const _ref5Vm8vyhf = accounts[2]
		const _ref4pZclgq = accounts[4]
		const _ref3uB45flW = accounts[3]
		const _ref2PfUa9ro = "0x0000000000000000000000000000000000000001"
		const _ref1gzYC0TI = accounts[2]
		const valueYU75dHJ = BigInt("195")
		await contractmnmW2Kx.purchase.call(valueQ9THxMd, _ref1nbJfktQ, _ref2vP4xvNn, _ref3gAyqoN, _ref4Yu9fHKq, _ref5rPpmVfu, commentmEK9USg, {from: accounts[2]});
		await contractmnmW2Kx.buy.call(valueYU75dHJ, _ref1gzYC0TI, _ref2PfUa9ro, _ref3uB45flW, _ref4pZclgq, _ref5Vm8vyhf, {from: accounts[4]});

		await expect(contractmnmW2Kx.purchase.call(valueQ9THxMd, _ref1nbJfktQ, _ref2vP4xvNn, _ref3gAyqoN, _ref4Yu9fHKq, _ref5rPpmVfu, commentmEK9USg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlF8PEcd = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrsjpUUnK = "0x0000000000000000000000000000000000000001"
		const initialRateUlTUjrq = BigInt("1104")
		const initialPeriodqrruHlj = BigInt("194")
		const initialOwnerJ2IiWjZ = accounts[2]
		const contractb69TxnC = await Reseller.new(USDTAddrlF8PEcd, FOSTERAddrsjpUUnK, initialRateUlTUjrq, initialPeriodqrruHlj, initialOwnerJ2IiWjZ, {from: accounts[4]});
		const accountA9I88H8 = accounts[4]
		const accountgz11Fp = "0x0000000000000000000000000000000000000001"
		const nullypkXqtY = await contractb69TxnC.balanceFOSTER.call(accountA9I88H8, {from: accounts[5]});
		const nullzIDO6HN = await contractb69TxnC.allowanceUSDT.call(accountgz11Fp, {from: accounts[4]});

		await expect(contractb69TxnC.balanceFOSTER.call(accountA9I88H8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})