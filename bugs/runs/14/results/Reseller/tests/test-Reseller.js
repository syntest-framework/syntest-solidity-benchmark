const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrcFEa4N = accounts[2]
		const FOSTERAddrKB9ErkI = accounts[1]
		const initialRateAZCeGnk = BigInt("1393")
		const initialPeriodS8S5jOn = BigInt("1798")
		const initialOwnerTEgUyFc = accounts[5]
		const contractey9lTYF = await Reseller.new(USDTAddrcFEa4N, FOSTERAddrKB9ErkI, initialRateAZCeGnk, initialPeriodS8S5jOn, initialOwnerTEgUyFc, {from: accounts[3]});
		const newBoss1XWwHaYy = accounts[0]
		const newMinimumlmi0Qns = BigInt("990")
		const newFeefCzdnm3 = BigInt("66")
		const newBoss2JtRXpQD = accounts[4]
		await contractey9lTYF.deposeBoss1.call(newBoss1XWwHaYy, {from: "0x0000000000000000000000000000000000000001"});
		await contractey9lTYF.setMinimum.call(newMinimumlmi0Qns, {from: "0x0000000000000000000000000000000000000001"});
		await contractey9lTYF.setFee.call(newFeefCzdnm3, {from: accounts[1]});
		await contractey9lTYF.deposeBoss2.call(newBoss2JtRXpQD, {from: accounts[3]});

		await expect(contractey9lTYF.deposeBoss1.call(newBoss1XWwHaYy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrOiZ40hB = accounts[2]
		const FOSTERAddricf8Cr7 = accounts[2]
		const initialRatealfawmo = BigInt("194")
		const initialPeriodL0SBTsl = BigInt("435")
		const initialOwnere1S6qSZ = accounts[3]
		const contractRn0QdCa = await Reseller.new(USDTAddrOiZ40hB, FOSTERAddricf8Cr7, initialRatealfawmo, initialPeriodL0SBTsl, initialOwnere1S6qSZ, {from: accounts[0]});
		const accountf66h1QU = accounts[4]
		const valueiWrwR9K = BigInt("1780")
		const newBoss4ffc3HDG = accounts[1]
		const commentiIU0kRs = "56S1xs6pddaESjn5ynCFz6hk3M0ZETV8N7JRrwPOmCJrsPscCzeJyQi2U5uTwlw"
		const _ref5DlfJkNQ = accounts[3]
		const _ref4pJ1S0qw = accounts[0]
		const _ref3ORMW09U = "0x0000000000000000000000000000000000000001"
		const _ref2rnmn7qP = accounts[2]
		const _ref1q3zi5er = accounts[4]
		const valuear2U9rZ = BigInt("377")
		const nullT1DJn0n = await contractRn0QdCa.balanceFOSTER.call(accountf66h1QU, {from: accounts[5]});
		await contractRn0QdCa.withdraw.call(valueiWrwR9K, {from: "0x0000000000000000000000000000000000000001"});
		await contractRn0QdCa.deposeBoss4.call(newBoss4ffc3HDG, {from: accounts[1]});
		await contractRn0QdCa.purchase.call(valuear2U9rZ, _ref1q3zi5er, _ref2rnmn7qP, _ref3ORMW09U, _ref4pJ1S0qw, _ref5DlfJkNQ, commentiIU0kRs, {from: accounts[0]});

		await expect(contractRn0QdCa.balanceFOSTER.call(accountf66h1QU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrAY4BuDD = accounts[5]
		const FOSTERAddrnlXRQIq = accounts[0]
		const initialRateFqnt9UZ = BigInt("692")
		const initialPerioddBFlNqf = BigInt("640")
		const initialOwnerLBQAjzY = accounts[2]
		const contractWaEOgN = await Reseller.new(USDTAddrAY4BuDD, FOSTERAddrnlXRQIq, initialRateFqnt9UZ, initialPerioddBFlNqf, initialOwnerLBQAjzY, {from: accounts[5]});
		const newBoss3QwlDxuW = accounts[5]
		const _periodgDAxLxL = BigInt("619")
		const amountQd8aoRV = BigInt("1473")
		const recipientb0Rk88 = accounts[1]
		await contractWaEOgN.deposeBoss3.call(newBoss3QwlDxuW, {from: accounts[2]});
		await contractWaEOgN.freezeAndTransfer.call(recipientb0Rk88, amountQd8aoRV, _periodgDAxLxL, {from: accounts[1]});

		await expect(contractWaEOgN.deposeBoss3.call(newBoss3QwlDxuW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrKK5rDZ = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrCn0wie = accounts[2]
		const initialRateLrhvvAv = BigInt("939")
		const initialPeriodJKOtrwZ = BigInt("1056")
		const initialOwnerSh85NQV = accounts[1]
		const contractKCVzAc5 = await Reseller.new(USDTAddrKK5rDZ, FOSTERAddrCn0wie, initialRateLrhvvAv, initialPeriodJKOtrwZ, initialOwnerSh85NQV, {from: accounts[2]});
		const newRateXGCvzry = BigInt("96")
		const accounttnSbLtP = accounts[1]
		const newRatekj5SKWP = BigInt("588")
		const newBoss1PTHyRUb = accounts[1]
		const commentDUlAnpq = "plyMmOrVDa6QIgirwkJGF"
		const _ref5gOOIfwE = accounts[5]
		const _ref4Gg7mgT1 = accounts[4]
		const _ref3Y4hDdjP = accounts[4]
		const _ref2cmwUfcU = accounts[4]
		const _ref1u9pfCe = "0x0000000000000000000000000000000000000001"
		const valueSqy01k2 = BigInt("1152")
		await contractKCVzAc5.setRate.call(newRateXGCvzry, {from: accounts[3]});
		const nullbjUo2v = await contractKCVzAc5.balanceFOSTER.call(accounttnSbLtP, {from: accounts[3]});
		await contractKCVzAc5.setRate.call(newRatekj5SKWP, {from: accounts[2]});
		await contractKCVzAc5.deposeBoss1.call(newBoss1PTHyRUb, {from: accounts[3]});
		await contractKCVzAc5.purchase.call(valueSqy01k2, _ref1u9pfCe, _ref2cmwUfcU, _ref3Y4hDdjP, _ref4Gg7mgT1, _ref5gOOIfwE, commentDUlAnpq, {from: accounts[1]});

		await expect(contractKCVzAc5.setRate.call(newRateXGCvzry, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrc5bAwC = accounts[2]
		const FOSTERAddrHWu7Ku = accounts[0]
		const initialRategAgUuy7 = BigInt("522")
		const initialPeriodaNowqL = BigInt("898")
		const initialOwnerMTbB0gV = accounts[3]
		const contractrIfRneC = await Reseller.new(USDTAddrc5bAwC, FOSTERAddrHWu7Ku, initialRategAgUuy7, initialPeriodaNowqL, initialOwnerMTbB0gV, {from: accounts[4]});
		const level5nRUyPSb = BigInt("109")
		const level4vW6uJ4m = BigInt("43")
		const level3FaW8QLc = BigInt("98")
		const level29yFxXe = BigInt("193")
		const level1Pr9VGMv = BigInt("165")
		const newBoss4A5AlUO = accounts[0]
		const commenteYGVaJj = "mqjTPKC9SFixha9ihRImevglM4rD9w1mK"
		const _ref5F1nGOp = accounts[1]
		const _ref4gmIzUGm = accounts[3]
		const _ref3UGeJgN2 = accounts[1]
		const _ref2O71MHZv = "0x0000000000000000000000000000000000000001"
		const _ref1Ut5ENSY = accounts[4]
		const valueNoFbMIN = BigInt("1416")
		const commentRC28zHI = "Faq1jTq4MjBINHVBhsTpIi2CEeB1PA71OAkpY9FhkVLV"
		const _ref5v12KKcB = accounts[2]
		const _ref4iwJ1Fz0 = accounts[0]
		const _ref3oa3mU3d = accounts[4]
		const _ref21atURU = accounts[4]
		const _ref1pQCkwGq = accounts[5]
		const valueqEcLCSR = BigInt("1812")
		const valuehYKyerH = BigInt("283")
		await contractrIfRneC.setRefBonus.call(level1Pr9VGMv, level29yFxXe, level3FaW8QLc, level4vW6uJ4m, level5nRUyPSb, {from: accounts[5]});
		await contractrIfRneC.deposeBoss4.call(newBoss4A5AlUO, {from: accounts[5]});
		await contractrIfRneC.purchase.call(valueNoFbMIN, _ref1Ut5ENSY, _ref2O71MHZv, _ref3UGeJgN2, _ref4gmIzUGm, _ref5F1nGOp, commenteYGVaJj, {from: accounts[2]});
		await contractrIfRneC.purchase.call(valueqEcLCSR, _ref1pQCkwGq, _ref21atURU, _ref3oa3mU3d, _ref4iwJ1Fz0, _ref5v12KKcB, commentRC28zHI, {from: accounts[1]});
		await contractrIfRneC.withdraw.call(valuehYKyerH, {from: accounts[2]});

		await expect(contractrIfRneC.setRefBonus.call(level1Pr9VGMv, level29yFxXe, level3FaW8QLc, level4vW6uJ4m, level5nRUyPSb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbrHELu = accounts[1]
		const FOSTERAddrUbcvGhv = accounts[3]
		const initialRateq1VLYif = BigInt("1543")
		const initialPeriodQ5UF7xc = BigInt("960")
		const initialOwnerX9vonkL = accounts[2]
		const contract8yqfQj = await Reseller.new(USDTAddrbrHELu, FOSTERAddrUbcvGhv, initialRateq1VLYif, initialPeriodQ5UF7xc, initialOwnerX9vonkL, {from: "0x0000000000000000000000000000000000000001"});
		const newRateusXdgm3 = BigInt("417")
		const newBoss1N4gCck4 = accounts[3]
		const _periodWr5zMeh = BigInt("2005")
		const amountiiTheLh = BigInt("749")
		const recipientRW0IAVT = accounts[4]
		const accountKRW7UE = accounts[3]
		const newMinimumDOnqfeP = BigInt("895")
		const _periodVhL4dSG = BigInt("1624")
		const amountSWowyaG = BigInt("959")
		const recipientXfOmssj = accounts[1]
		await contract8yqfQj.setRate.call(newRateusXdgm3, {from: accounts[1]});
		await contract8yqfQj.deposeBoss1.call(newBoss1N4gCck4, {from: accounts[5]});
		await contract8yqfQj.freezeAndTransfer.call(recipientRW0IAVT, amountiiTheLh, _periodWr5zMeh, {from: accounts[1]});
		const nulle8rHfaH = await contract8yqfQj.balanceUSDT.call(accountKRW7UE, {from: accounts[5]});
		await contract8yqfQj.setMinimum.call(newMinimumDOnqfeP, {from: accounts[1]});
		await contract8yqfQj.freezeAndTransfer.call(recipientXfOmssj, amountSWowyaG, _periodVhL4dSG, {from: accounts[2]});
	});

	it('test for Reseller', async () => {
		const USDTAddrMurWAF = accounts[5]
		const FOSTERAddrLwzpcxl = accounts[1]
		const initialRateOfqntpL = BigInt("1401")
		const initialPeriodAl5RJO2 = BigInt("840")
		const initialOwnerfcWkhI0 = accounts[0]
		const contractTqEqwTU = await Reseller.new(USDTAddrMurWAF, FOSTERAddrLwzpcxl, initialRateOfqntpL, initialPeriodAl5RJO2, initialOwnerfcWkhI0, {from: accounts[0]});
		const amountea4uQj = BigInt("1018")
		const amountSaEX4m4 = BigInt("746")
		const level5ZGAmka = BigInt("64")
		const level4GyxmERy = BigInt("83")
		const level3xFNRhan = BigInt("88")
		const level2jzG26Np = BigInt("73")
		const level1m9dM0wx = BigInt("43")
		const nullXEEIKCw = await contractTqEqwTU.getEstimation.call(amountea4uQj, {from: accounts[4]});
		const nullLaa1sdi = await contractTqEqwTU.getEstimation.call(amountSaEX4m4, {from: accounts[3]});
		await contractTqEqwTU.setRefBonus.call(level1m9dM0wx, level2jzG26Np, level3xFNRhan, level4GyxmERy, level5ZGAmka, {from: accounts[3]});

		assert.equal(nullLaa1sdi, 1045146)
		assert.equal(nullXEEIKCw, 1426218)
		await expect(contractTqEqwTU.setRefBonus.call(level1m9dM0wx, level2jzG26Np, level3xFNRhan, level4GyxmERy, level5ZGAmka, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbm72V3 = accounts[3]
		const FOSTERAddrM3wg3R = accounts[5]
		const initialRateTrYgUDo = BigInt("1907")
		const initialPeriodtIRuGKi = BigInt("271")
		const initialOwneryhhdfX5 = accounts[1]
		const contractktWrWAm = await Reseller.new(USDTAddrbm72V3, FOSTERAddrM3wg3R, initialRateTrYgUDo, initialPeriodtIRuGKi, initialOwneryhhdfX5, {from: accounts[2]});
		const accountm2kQ1r = accounts[1]
		const commentZvqNDNz = "UIRGgAR8m80rlWnkYHKGdGGxktYKQyI5y"
		const _ref5X1iaEwL = accounts[0]
		const _ref4yvgw8I = accounts[0]
		const _ref3fnFnVtp = accounts[3]
		const _ref2SO28NjT = accounts[2]
		const _ref1aXkkYvk = accounts[3]
		const valueaYDxZyS = BigInt("1959")
		const _periodk6dAood = BigInt("876")
		const amountuXRkeTB = BigInt("763")
		const recipienthOByd6r = accounts[4]
		const nullPOpWBMC = await contractktWrWAm.allowanceFOSTER.call(accountm2kQ1r, {from: accounts[4]});
		await contractktWrWAm.purchase.call(valueaYDxZyS, _ref1aXkkYvk, _ref2SO28NjT, _ref3fnFnVtp, _ref4yvgw8I, _ref5X1iaEwL, commentZvqNDNz, {from: accounts[1]});
		await contractktWrWAm.freezeAndTransfer.call(recipienthOByd6r, amountuXRkeTB, _periodk6dAood, {from: accounts[2]});

		await expect(contractktWrWAm.allowanceFOSTER.call(accountm2kQ1r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrxtU4rfr = accounts[3]
		const FOSTERAddrU7RWJY8 = accounts[4]
		const initialRateevPUhQQ = BigInt("150")
		const initialPeriodFsdiRz = BigInt("621")
		const initialOwnerTFxKfcx = accounts[4]
		const contractRlqHer3 = await Reseller.new(USDTAddrxtU4rfr, FOSTERAddrU7RWJY8, initialRateevPUhQQ, initialPeriodFsdiRz, initialOwnerTFxKfcx, {from: accounts[0]});
		const newBoss2RWdN46B = accounts[2]
		const _periodJkOsgAF = BigInt("732")
		const amountC20EC8D = BigInt("1483")
		const recipientoYSGUiy = accounts[5]
		const amountuliuqS4 = BigInt("5")
		const level58GQ9xr = BigInt("183")
		const level4Wb2dmrq = BigInt("22")
		const level3Tiw5pyi = BigInt("93")
		const level2o6NDLw4 = BigInt("222")
		const level1ZmswCKl = BigInt("194")
		await contractRlqHer3.deposeBoss2.call(newBoss2RWdN46B, {from: accounts[1]});
		await contractRlqHer3.freezeAndTransfer.call(recipientoYSGUiy, amountC20EC8D, _periodJkOsgAF, {from: accounts[1]});
		const nullbs5ntUC = await contractRlqHer3.getEstimation.call(amountuliuqS4, {from: accounts[0]});
		await contractRlqHer3.setRefBonus.call(level1ZmswCKl, level2o6NDLw4, level3Tiw5pyi, level4Wb2dmrq, level58GQ9xr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractRlqHer3.deposeBoss2.call(newBoss2RWdN46B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQId9VFx = accounts[5]
		const FOSTERAddrJeRDvIu = accounts[0]
		const initialRateWTBsH1j = BigInt("692")
		const initialPeriodnRqaka = BigInt("640")
		const initialOwnerXEORtMF = accounts[2]
		const contractQ13v6II = await Reseller.new(USDTAddrQId9VFx, FOSTERAddrJeRDvIu, initialRateWTBsH1j, initialPeriodnRqaka, initialOwnerXEORtMF, {from: accounts[5]});
		const newMinimumP66c7fX = BigInt("11")
		const newBoss3gcE7zDy = accounts[5]
		const _periodEDj04ZG = BigInt("619")
		const amountgMOiW6R = BigInt("1473")
		const recipientS7dYEsc = accounts[1]
		await contractQ13v6II.setMinimum.call(newMinimumP66c7fX, {from: accounts[2]});
		await contractQ13v6II.deposeBoss3.call(newBoss3gcE7zDy, {from: accounts[2]});
		await contractQ13v6II.freezeAndTransfer.call(recipientS7dYEsc, amountgMOiW6R, _periodEDj04ZG, {from: accounts[1]});

		await expect(contractQ13v6II.setMinimum.call(newMinimumP66c7fX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrH2lEid = accounts[5]
		const FOSTERAddryPWjjgj = accounts[1]
		const initialRatewjxSQJT = BigInt("1401")
		const initialPeriodBg8VRaN = BigInt("840")
		const initialOwneryTJsEzs = accounts[0]
		const contractX4qYT7 = await Reseller.new(USDTAddrH2lEid, FOSTERAddryPWjjgj, initialRatewjxSQJT, initialPeriodBg8VRaN, initialOwneryTJsEzs, {from: accounts[0]});
		const amountW6wRiDn = BigInt("1018")
		const newFeetJWlAkp = BigInt("219")
		const amountj6pj9lV = BigInt("705")
		const level5Aqvy8o = BigInt("64")
		const level45EWnIU = BigInt("83")
		const level3gtI7LIU = BigInt("88")
		const level2DQOKlC = BigInt("73")
		const level1ALzR49f = BigInt("43")
		const nullzjUg1h = await contractX4qYT7.getEstimation.call(amountW6wRiDn, {from: accounts[4]});
		await contractX4qYT7.setFee.call(newFeetJWlAkp, {from: accounts[3]});
		const nullFnH2tu3 = await contractX4qYT7.getEstimation.call(amountj6pj9lV, {from: accounts[3]});
		await contractX4qYT7.setRefBonus.call(level1ALzR49f, level2DQOKlC, level3gtI7LIU, level45EWnIU, level5Aqvy8o, {from: accounts[3]});

		assert.equal(nullzjUg1h, 1426218)
		await expect(contractX4qYT7.setFee.call(newFeetJWlAkp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrsQXkpaD = accounts[5]
		const FOSTERAddrZf0YJG1 = accounts[0]
		const initialRateQmrZFJv = BigInt("692")
		const initialPeriodQlCMFLq = BigInt("640")
		const initialOwnerkkshKar = accounts[2]
		const contractW5CH4Mf = await Reseller.new(USDTAddrsQXkpaD, FOSTERAddrZf0YJG1, initialRateQmrZFJv, initialPeriodQlCMFLq, initialOwnerkkshKar, {from: accounts[5]});
		const newBoss33ChOMs = accounts[5]
		const newBoss418cdCE = accounts[1]
		const _periodUc9BK88 = BigInt("619")
		const amountsDH6FjA = BigInt("1481")
		const recipientNk8PIHO = accounts[1]
		await contractW5CH4Mf.deposeBoss3.call(newBoss33ChOMs, {from: accounts[2]});
		await contractW5CH4Mf.deposeBoss4.call(newBoss418cdCE, {from: accounts[3]});
		await contractW5CH4Mf.freezeAndTransfer.call(recipientNk8PIHO, amountsDH6FjA, _periodUc9BK88, {from: accounts[1]});

		await expect(contractW5CH4Mf.deposeBoss3.call(newBoss33ChOMs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrAe51W6t = accounts[5]
		const FOSTERAddrvASKloT = accounts[0]
		const initialRatekzipbz = BigInt("692")
		const initialPeriodh5SUkft = BigInt("640")
		const initialOwnerbTrg1jM = accounts[2]
		const contractlSZ3P0V = await Reseller.new(USDTAddrAe51W6t, FOSTERAddrvASKloT, initialRatekzipbz, initialPeriodh5SUkft, initialOwnerbTrg1jM, {from: accounts[5]});
		const accountBibjsJ = accounts[5]
		const newBoss3JVGeaET = accounts[6]
		const _periodNIfya9 = BigInt("619")
		const amountL9BHSv5 = BigInt("1473")
		const recipientrKbQYm6 = accounts[1]
		const nullrpLEdxW = await contractlSZ3P0V.allowanceUSDT.call(accountBibjsJ, {from: accounts[0]});
		await contractlSZ3P0V.deposeBoss3.call(newBoss3JVGeaET, {from: accounts[2]});
		await contractlSZ3P0V.freezeAndTransfer.call(recipientrKbQYm6, amountL9BHSv5, _periodNIfya9, {from: accounts[1]});

		await expect(contractlSZ3P0V.allowanceUSDT.call(accountBibjsJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdzUjwS0 = accounts[2]
		const FOSTERAddrPY2Nhvq = accounts[4]
		const initialRateNTr5zvO = BigInt("610")
		const initialPeriodIKYQ4t1 = BigInt("888")
		const initialOwnerMNv04PD = accounts[1]
		const contractzPuSNYC = await Reseller.new(USDTAddrdzUjwS0, FOSTERAddrPY2Nhvq, initialRateNTr5zvO, initialPeriodIKYQ4t1, initialOwnerMNv04PD, {from: accounts[1]});
		const valueJvGx6fV = BigInt("561")
		const newBoss4plmmkDH = accounts[2]
		const commentx5PDqty = "5oD7IR9nxynpAHzupcE2aHEeK18dyyq2f0mfvrUtkwoh6ifP4EhrhQOdzd8JIlUxlevUp"
		const _ref5k3UFvrc = "0x0000000000000000000000000000000000000001"
		const _ref4Nw1FCWD = accounts[1]
		const _ref3NDUZrEz = accounts[3]
		const _ref2LYA6EGR = "0x0000000000000000000000000000000000000001"
		const _ref1xfaOmHu = accounts[2]
		const valueqf0vGSb = BigInt("1985")
		const newBoss1t9sAXEX = accounts[3]
		const _periodaHH01YK = BigInt("356")
		const amountGMBgKPV = BigInt("1135")
		const recipientWs5Szmf = accounts[0]
		const amountygtlygH = BigInt("936")
		await contractzPuSNYC.withdraw.call(valueJvGx6fV, {from: accounts[2]});
		await contractzPuSNYC.deposeBoss4.call(newBoss4plmmkDH, {from: accounts[0]});
		await contractzPuSNYC.purchase.call(valueqf0vGSb, _ref1xfaOmHu, _ref2LYA6EGR, _ref3NDUZrEz, _ref4Nw1FCWD, _ref5k3UFvrc, commentx5PDqty, {from: accounts[2]});
		await contractzPuSNYC.deposeBoss1.call(newBoss1t9sAXEX, {from: accounts[2]});
		await contractzPuSNYC.freezeAndTransfer.call(recipientWs5Szmf, amountGMBgKPV, _periodaHH01YK, {from: accounts[3]});
		const nulloilJ9eB = await contractzPuSNYC.getEstimation.call(amountygtlygH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractzPuSNYC.withdraw.call(valueJvGx6fV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrqXQDuqt = accounts[5]
		const FOSTERAddrNXgm4Da = accounts[0]
		const initialRateTlwyqV4 = BigInt("692")
		const initialPeriodOdvVwj9 = BigInt("640")
		const initialOwnerPSewZ5m = accounts[2]
		const contractRWnAKMF = await Reseller.new(USDTAddrqXQDuqt, FOSTERAddrNXgm4Da, initialRateTlwyqV4, initialPeriodOdvVwj9, initialOwnerPSewZ5m, {from: accounts[5]});
		const accountuTLcSEH = accounts[3]
		const newBoss4FZstVCZ = accounts[2]
		const _periodgEA4KBZ = BigInt("1751")
		const amountCpnFOYT = BigInt("1050")
		const recipienttqudfHs = accounts[1]
		const valuewAjRpWg = BigInt("1734")
		const newBoss3yQcHgzY = accounts[5]
		const account3zUeEK = accounts[1]
		const _periodHifRE7C = BigInt("651")
		const amountIzXt3nF = BigInt("1473")
		const recipientdyDhIGH = accounts[1]
		const nullQIMfFzD = await contractRWnAKMF.balanceUSDT.call(accountuTLcSEH, {from: accounts[0]});
		await contractRWnAKMF.deposeBoss4.call(newBoss4FZstVCZ, {from: accounts[1]});
		await contractRWnAKMF.freezeAndTransfer.call(recipienttqudfHs, amountCpnFOYT, _periodgEA4KBZ, {from: "0x0000000000000000000000000000000000000001"});
		await contractRWnAKMF.withdraw.call(valuewAjRpWg, {from: accounts[2]});
		await contractRWnAKMF.deposeBoss3.call(newBoss3yQcHgzY, {from: accounts[2]});
		const nullRJTD3K4 = await contractRWnAKMF.allowanceUSDT.call(account3zUeEK, {from: accounts[1]});
		await contractRWnAKMF.freezeAndTransfer.call(recipientdyDhIGH, amountIzXt3nF, _periodHifRE7C, {from: accounts[1]});

		await expect(contractRWnAKMF.balanceUSDT.call(accountuTLcSEH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMAQ7BmS = accounts[5]
		const FOSTERAddrIngmHc0 = accounts[0]
		const initialRatelaEnizk = BigInt("692")
		const initialPeriodssLaLCZ = BigInt("640")
		const initialOwnerNmUoAQd = accounts[2]
		const contractzLiyz7D = await Reseller.new(USDTAddrMAQ7BmS, FOSTERAddrIngmHc0, initialRatelaEnizk, initialPeriodssLaLCZ, initialOwnerNmUoAQd, {from: accounts[5]});
		const _periodVzraxKI = BigInt("619")
		const amountJC0tsSF = BigInt("1469")
		const recipientcMfZ9Z1 = accounts[1]
		await contractzLiyz7D.switchState.call({from: accounts[1]});
		await contractzLiyz7D.freezeAndTransfer.call(recipientcMfZ9Z1, amountJC0tsSF, _periodVzraxKI, {from: accounts[1]});

		await expect(contractzLiyz7D.switchState.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHLgetRB = accounts[5]
		const FOSTERAddrwLRBpYC = accounts[1]
		const initialRateLMOzAll = BigInt("1584")
		const initialPeriodbkvHRkB = BigInt("261")
		const initialOwner4YHjCQ = "0x0000000000000000000000000000000000000001"
		const contractkZ7dWab = await Reseller.new(USDTAddrHLgetRB, FOSTERAddrwLRBpYC, initialRateLMOzAll, initialPeriodbkvHRkB, initialOwner4YHjCQ, {from: accounts[0]});
		const newRateYgLdGs1 = BigInt("1605")
		const valueYav4nkm = BigInt("87")
		const recipientPeOe2bS = accounts[2]
		const ERC20TokenJDvoczK = accounts[3]
		const valueriharhP = BigInt("1674")
		const valueqCaGZnd = BigInt("1235")
		const recipientSw7M9tV = accounts[2]
		const ERC20Tokenh0sAzoD = accounts[2]
		await contractkZ7dWab.setRate.call(newRateYgLdGs1, {from: "0x0000000000000000000000000000000000000001"});
		await contractkZ7dWab.withdrawERC20.call(ERC20TokenJDvoczK, recipientPeOe2bS, valueYav4nkm, {from: accounts[2]});
		await contractkZ7dWab.withdraw.call(valueriharhP, {from: accounts[3]});
		await contractkZ7dWab.withdrawERC20.call(ERC20Tokenh0sAzoD, recipientSw7M9tV, valueqCaGZnd, {from: accounts[2]});

		await expect(contractkZ7dWab.setRate.call(newRateYgLdGs1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddre8uEsJ = accounts[5]
		const FOSTERAddrBGKsZrC = accounts[1]
		const initialRateRk0wPZy = BigInt("1584")
		const initialPeriodY8jrasa = BigInt("261")
		const initialOwnerwB5nNxe = "0x0000000000000000000000000000000000000001"
		const contractOjuGAwq = await Reseller.new(USDTAddre8uEsJ, FOSTERAddrBGKsZrC, initialRateRk0wPZy, initialPeriodY8jrasa, initialOwnerwB5nNxe, {from: accounts[0]});
		const newRateUiRV1eQ = BigInt("1605")
		const commentXUZgCZ1 = "RMUaIFYgAmQ"
		const _ref5C7uTIjR = accounts[3]
		const _ref4wwKho27 = accounts[0]
		const _ref3yegT6kz = accounts[4]
		const _ref2XZgW1VM = accounts[2]
		const _ref1prztMt = accounts[3]
		const valueNt3MsSK = BigInt("1462")
		const valuefd7pEv = BigInt("1695")
		const value7P4h9c = BigInt("1235")
		const recipientyCghNaS = accounts[2]
		const ERC20TokenoksNmXV = accounts[2]
		await contractOjuGAwq.setRate.call(newRateUiRV1eQ, {from: "0x0000000000000000000000000000000000000001"});
		await contractOjuGAwq.purchase.call(valueNt3MsSK, _ref1prztMt, _ref2XZgW1VM, _ref3yegT6kz, _ref4wwKho27, _ref5C7uTIjR, commentXUZgCZ1, {from: accounts[4]});
		await contractOjuGAwq.withdraw.call(valuefd7pEv, {from: accounts[3]});
		await contractOjuGAwq.withdrawERC20.call(ERC20TokenoksNmXV, recipientyCghNaS, value7P4h9c, {from: accounts[2]});

		await expect(contractOjuGAwq.setRate.call(newRateUiRV1eQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMCZsZUU = accounts[5]
		const FOSTERAddrZ2W0EN8 = accounts[1]
		const initialRateGQKO3op = BigInt("1584")
		const initialPeriodxlx6c7B = BigInt("261")
		const initialOwnerLrFQQ7z = "0x0000000000000000000000000000000000000001"
		const contractmcRiiZ = await Reseller.new(USDTAddrMCZsZUU, FOSTERAddrZ2W0EN8, initialRateGQKO3op, initialPeriodxlx6c7B, initialOwnerLrFQQ7z, {from: accounts[0]});
		const newPeriodoZRvtP = BigInt("473")
		const newRateEKtOoQh = BigInt("1605")
		const valueBV8jKkA = BigInt("87")
		const recipientP7Ez9Ad = accounts[2]
		const ERC20TokenRJyv6g = accounts[4]
		const valueT6XdepD = BigInt("1674")
		await contractmcRiiZ.setPeriod.call(newPeriodoZRvtP, {from: accounts[0]});
		await contractmcRiiZ.setRate.call(newRateEKtOoQh, {from: "0x0000000000000000000000000000000000000001"});
		await contractmcRiiZ.withdrawERC20.call(ERC20TokenRJyv6g, recipientP7Ez9Ad, valueBV8jKkA, {from: accounts[2]});
		await contractmcRiiZ.withdraw.call(valueT6XdepD, {from: accounts[3]});

		await expect(contractmcRiiZ.setPeriod.call(newPeriodoZRvtP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrRoQ3Afh = accounts[2]
		const FOSTERAddrBG64yCh = accounts[5]
		const initialRateUnQuEcH = BigInt("944")
		const initialPeriodtfr4hqw = BigInt("1042")
		const initialOwnerXnGKZq4 = accounts[5]
		const contractgAeUnK6 = await Reseller.new(USDTAddrRoQ3Afh, FOSTERAddrBG64yCh, initialRateUnQuEcH, initialPeriodtfr4hqw, initialOwnerXnGKZq4, {from: accounts[0]});
		const _ref5ftU73ae = accounts[1]
		const _ref4QCUGp6b = accounts[4]
		const _ref3cIeNpra = accounts[3]
		const _ref2UWu7M1E = accounts[2]
		const _ref1U7p07Ur = accounts[0]
		const valuepcD6uqD = BigInt("311")
		const amountqNnyBhO = BigInt("475")
		const level5lPoWtd = BigInt("212")
		const level4SsTah6x = BigInt("59")
		const level3Qtq1t1r = BigInt("22")
		const level2MPtbiv4 = BigInt("77")
		const level1ZnYVak = BigInt("134")
		const _ref5MiROmn6 = accounts[2]
		const _ref4GSczjAv = accounts[0]
		const _ref3De0ab0 = accounts[4]
		const _ref2idWJhd6 = accounts[0]
		const _ref1rWPE5FC = accounts[4]
		const valuecy9fPhL = BigInt("216")
		await contractgAeUnK6.buy.call(valuepcD6uqD, _ref1U7p07Ur, _ref2UWu7M1E, _ref3cIeNpra, _ref4QCUGp6b, _ref5ftU73ae, {from: "0x0000000000000000000000000000000000000001"});
		const nullfXu1aSM = await contractgAeUnK6.getEstimation.call(amountqNnyBhO, {from: accounts[4]});
		await contractgAeUnK6.setRefBonus.call(level1ZnYVak, level2MPtbiv4, level3Qtq1t1r, level4SsTah6x, level5lPoWtd, {from: accounts[1]});
		await contractgAeUnK6.buy.call(valuecy9fPhL, _ref1rWPE5FC, _ref2idWJhd6, _ref3De0ab0, _ref4GSczjAv, _ref5MiROmn6, {from: accounts[1]});

		await expect(contractgAeUnK6.buy.call(valuepcD6uqD, _ref1U7p07Ur, _ref2UWu7M1E, _ref3cIeNpra, _ref4QCUGp6b, _ref5ftU73ae, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})