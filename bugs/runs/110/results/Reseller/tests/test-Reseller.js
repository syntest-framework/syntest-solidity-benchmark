const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrvKfmsYM = accounts[3]
		const FOSTERAddrv0ZtoP5 = accounts[0]
		const initialRateWjnZro = BigInt("434")
		const initialPeriodxYMuM5 = BigInt("53")
		const initialOwnerKAZjkeP = accounts[2]
		const contractdUkNyjj = await Reseller.new(USDTAddrvKfmsYM, FOSTERAddrv0ZtoP5, initialRateWjnZro, initialPeriodxYMuM5, initialOwnerKAZjkeP, {from: accounts[5]});
		const newBoss4PjOayX7 = "0x0000000000000000000000000000000000000001"
		const _periodjhpAamZ = BigInt("1005")
		const amountYEvpsLI = BigInt("1882")
		const recipientDOCfs7n = accounts[2]
		const accountU5DGOi4 = accounts[5]
		const valuemDZ3FbH = BigInt("1111")
		const recipientE54Wrh = accounts[2]
		const ERC20TokenhFJdNK6 = accounts[2]
		const accountWwQplIl = accounts[2]
		const newMinimumqSUtfSD = BigInt("1014")
		await contractdUkNyjj.deposeBoss4.call(newBoss4PjOayX7, {from: accounts[0]});
		await contractdUkNyjj.freezeAndTransfer.call(recipientDOCfs7n, amountYEvpsLI, _periodjhpAamZ, {from: accounts[1]});
		const nullrJIBHe = await contractdUkNyjj.allowanceFOSTER.call(accountU5DGOi4, {from: accounts[0]});
		await contractdUkNyjj.withdrawERC20.call(ERC20TokenhFJdNK6, recipientE54Wrh, valuemDZ3FbH, {from: accounts[1]});
		const nulluhpWqbr = await contractdUkNyjj.allowanceUSDT.call(accountWwQplIl, {from: accounts[4]});
		await contractdUkNyjj.setMinimum.call(newMinimumqSUtfSD, {from: accounts[2]});

		await expect(contractdUkNyjj.deposeBoss4.call(newBoss4PjOayX7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrc1vxuoE = accounts[4]
		const FOSTERAddrdROfksE = accounts[2]
		const initialRateyCFIfg5 = BigInt("721")
		const initialPeriodZAVCaJ4 = BigInt("1353")
		const initialOwnerjhqH1iJ = accounts[1]
		const contractNuxz7oE = await Reseller.new(USDTAddrc1vxuoE, FOSTERAddrdROfksE, initialRateyCFIfg5, initialPeriodZAVCaJ4, initialOwnerjhqH1iJ, {from: accounts[1]});
		const accounthyo5vaa = accounts[0]
		const newBoss4QSPyhSN = "0x0000000000000000000000000000000000000001"
		const newBoss4by6YyS2 = accounts[1]
		const newFeeV0L2wpf = BigInt("190")
		const newBoss4KHmRNn4 = accounts[4]
		const nullhyqmyHW = await contractNuxz7oE.allowanceFOSTER.call(accounthyo5vaa, {from: accounts[1]});
		await contractNuxz7oE.deposeBoss4.call(newBoss4QSPyhSN, {from: accounts[1]});
		await contractNuxz7oE.deposeBoss4.call(newBoss4by6YyS2, {from: accounts[4]});
		await contractNuxz7oE.setFee.call(newFeeV0L2wpf, {from: accounts[1]});
		await contractNuxz7oE.deposeBoss4.call(newBoss4KHmRNn4, {from: accounts[2]});

		await expect(contractNuxz7oE.allowanceFOSTER.call(accounthyo5vaa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrLfzEZH5 = accounts[1]
		const FOSTERAddrqzVDiiP = accounts[3]
		const initialRateqIFtnps = BigInt("397")
		const initialPeriodsBjT8cV = BigInt("1091")
		const initialOwnereBsW5hI = accounts[2]
		const contractrpvOogF = await Reseller.new(USDTAddrLfzEZH5, FOSTERAddrqzVDiiP, initialRateqIFtnps, initialPeriodsBjT8cV, initialOwnereBsW5hI, {from: accounts[2]});
		const _periodHHuWKDk = BigInt("1732")
		const amountBeUxXQp = BigInt("229")
		const recipientjiUIVnN = accounts[1]
		const commentKOTn13K = "6AvcH4L"
		const _ref5XbxC8zP = accounts[2]
		const _ref4fXHW8h = accounts[4]
		const _ref3Wnubsk = accounts[1]
		const _ref2oRtWcEQ = accounts[5]
		const _ref1wNRp1Km = accounts[2]
		const valueX8iNovc = BigInt("255")
		const newBoss3DzThOc8 = accounts[4]
		const newPerioduElVGKy = BigInt("1184")
		await contractrpvOogF.freezeAndTransfer.call(recipientjiUIVnN, amountBeUxXQp, _periodHHuWKDk, {from: accounts[4]});
		await contractrpvOogF.purchase.call(valueX8iNovc, _ref1wNRp1Km, _ref2oRtWcEQ, _ref3Wnubsk, _ref4fXHW8h, _ref5XbxC8zP, commentKOTn13K, {from: accounts[3]});
		await contractrpvOogF.deposeBoss3.call(newBoss3DzThOc8, {from: accounts[4]});
		await contractrpvOogF.setPeriod.call(newPerioduElVGKy, {from: accounts[3]});

		await expect(contractrpvOogF.freezeAndTransfer.call(recipientjiUIVnN, amountBeUxXQp, _periodHHuWKDk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNEKR4ge = accounts[5]
		const FOSTERAddrALb64nG = accounts[1]
		const initialRate4vPoF3 = BigInt("1743")
		const initialPeriodSkOyLOv = BigInt("392")
		const initialOwneroPk1yGi = "0x0000000000000000000000000000000000000001"
		const contractHx4PKt2 = await Reseller.new(USDTAddrNEKR4ge, FOSTERAddrALb64nG, initialRate4vPoF3, initialPeriodSkOyLOv, initialOwneroPk1yGi, {from: accounts[1]});
		const newFeesD4XYvH = BigInt("95")
		const newBoss4sv313F1 = accounts[1]
		const amountQydj5VW = BigInt("1908")
		const newBoss3R3xsWlM = accounts[2]
		await contractHx4PKt2.switchState.call({from: accounts[2]});
		await contractHx4PKt2.setFee.call(newFeesD4XYvH, {from: "0x0000000000000000000000000000000000000001"});
		await contractHx4PKt2.deposeBoss4.call(newBoss4sv313F1, {from: accounts[0]});
		const null1HG5PC = await contractHx4PKt2.getEstimation.call(amountQydj5VW, {from: accounts[0]});
		await contractHx4PKt2.deposeBoss3.call(newBoss3R3xsWlM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractHx4PKt2.switchState.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrryJem0z = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrvDqDtWT = accounts[0]
		const initialRateUL3N4hb = BigInt("316")
		const initialPeriodfq4CSWe = BigInt("88")
		const initialOwnerokqknQa = accounts[4]
		const contracttAqrXJG = await Reseller.new(USDTAddrryJem0z, FOSTERAddrvDqDtWT, initialRateUL3N4hb, initialPeriodfq4CSWe, initialOwnerokqknQa, {from: accounts[1]});
		const commentDI4e87V = "1AY9mrj9dtYUjRxbWTJrrP6PanQM5zXThmoq8ctYQLFjrMayMmSpf3FgVPspsRBr9mwQHQh0PoGfPRz6lBh4fqMvn"
		const _ref5qeSGoVf = accounts[1]
		const _ref4ukrA7I5 = accounts[4]
		const _ref3tjo24q3 = accounts[0]
		const _ref2fgMlNem = "0x0000000000000000000000000000000000000001"
		const _ref1InwEtfF = accounts[2]
		const valueNtsHmVJ = BigInt("454")
		const newBoss3ZJ3UrPX = accounts[4]
		const newRateGza7FhL = BigInt("198")
		const newBoss1T5MVtLi = accounts[0]
		await contracttAqrXJG.purchase.call(valueNtsHmVJ, _ref1InwEtfF, _ref2fgMlNem, _ref3tjo24q3, _ref4ukrA7I5, _ref5qeSGoVf, commentDI4e87V, {from: accounts[1]});
		await contracttAqrXJG.deposeBoss3.call(newBoss3ZJ3UrPX, {from: accounts[1]});
		await contracttAqrXJG.switchState.call({from: accounts[3]});
		await contracttAqrXJG.setRate.call(newRateGza7FhL, {from: accounts[4]});
		await contracttAqrXJG.deposeBoss1.call(newBoss1T5MVtLi, {from: accounts[2]});

		await expect(contracttAqrXJG.purchase.call(valueNtsHmVJ, _ref1InwEtfF, _ref2fgMlNem, _ref3tjo24q3, _ref4ukrA7I5, _ref5qeSGoVf, commentDI4e87V, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrs4IwmUL = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrkeLNSoy = accounts[4]
		const initialRate7U0ELi = BigInt("1939")
		const initialPeriodcFfbrKo = BigInt("262")
		const initialOwneruInGDH = accounts[3]
		const contractQ0LvHAO = await Reseller.new(USDTAddrs4IwmUL, FOSTERAddrkeLNSoy, initialRate7U0ELi, initialPeriodcFfbrKo, initialOwneruInGDH, {from: accounts[3]});
		const newMinimumHVowVYM = BigInt("941")
		const valueYdeegHv = BigInt("1070")
		const recipientkDLPQz7 = accounts[3]
		const ERC20TokenzoXwzKo = accounts[3]
		const newFeeahpJt1 = BigInt("123")
		const accountS1Ft1pI = accounts[1]
		const valueaQ9fD9z = BigInt("820")
		await contractQ0LvHAO.setMinimum.call(newMinimumHVowVYM, {from: accounts[3]});
		await contractQ0LvHAO.withdrawERC20.call(ERC20TokenzoXwzKo, recipientkDLPQz7, valueYdeegHv, {from: accounts[4]});
		await contractQ0LvHAO.setFee.call(newFeeahpJt1, {from: accounts[4]});
		const nullCntvVjR = await contractQ0LvHAO.allowanceFOSTER.call(accountS1Ft1pI, {from: accounts[4]});
		await contractQ0LvHAO.withdraw.call(valueaQ9fD9z, {from: accounts[1]});

		await expect(contractQ0LvHAO.setMinimum.call(newMinimumHVowVYM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrcNeogJ = accounts[0]
		const FOSTERAddrqfrXla3 = accounts[2]
		const initialRatecztjr6j = BigInt("640")
		const initialPeriodntjQrJi = BigInt("183")
		const initialOwner5y5uuQ = accounts[3]
		const contractY2MHFiI = await Reseller.new(USDTAddrcNeogJ, FOSTERAddrqfrXla3, initialRatecztjr6j, initialPeriodntjQrJi, initialOwner5y5uuQ, {from: accounts[2]});
		const newBoss1vuw85Md = accounts[1]
		const newBoss10xGwhY = accounts[1]
		const valueRAEht4m = BigInt("720")
		const recipientm7SsSa = accounts[0]
		const ERC20TokenPh9iWCU = accounts[1]
		const commentjjqhIzF = "jMmXMWwFNeDCOb7o4iAZGdG0MLRnJpVqo7ua6kaR21sgCA1wYtKrxg"
		const _ref5wYyx9dR = accounts[1]
		const _ref4HmmNtWp = accounts[0]
		const _ref3Cl7XGp = accounts[4]
		const _ref2k0gj7h7 = accounts[0]
		const _ref1X3mXcgO = accounts[3]
		const valueQzdpCWf = BigInt("1808")
		await contractY2MHFiI.deposeBoss1.call(newBoss1vuw85Md, {from: accounts[1]});
		await contractY2MHFiI.deposeBoss1.call(newBoss10xGwhY, {from: accounts[0]});
		await contractY2MHFiI.withdrawERC20.call(ERC20TokenPh9iWCU, recipientm7SsSa, valueRAEht4m, {from: accounts[4]});
		await contractY2MHFiI.purchase.call(valueQzdpCWf, _ref1X3mXcgO, _ref2k0gj7h7, _ref3Cl7XGp, _ref4HmmNtWp, _ref5wYyx9dR, commentjjqhIzF, {from: accounts[4]});

		await expect(contractY2MHFiI.deposeBoss1.call(newBoss1vuw85Md, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrKWnmKMo = accounts[3]
		const FOSTERAddrUB5GCNU = accounts[1]
		const initialRateI5233Dm = BigInt("1791")
		const initialPeriodQnsioJc = BigInt("1245")
		const initialOwnerpVwqFqO = accounts[4]
		const contractkufn1O7 = await Reseller.new(USDTAddrKWnmKMo, FOSTERAddrUB5GCNU, initialRateI5233Dm, initialPeriodQnsioJc, initialOwnerpVwqFqO, {from: accounts[3]});
		const valueILoByjp = BigInt("1610")
		const valueO0IiOM = BigInt("756")
		const recipientlPcHnTq = accounts[1]
		const ERC20TokencC6nRrk = accounts[2]
		const _periodxd58SOY = BigInt("111")
		const amountKe7naHn = BigInt("1528")
		const recipientPjYk5hb = accounts[2]
		const accountZu9LXuL = accounts[1]
		await contractkufn1O7.withdraw.call(valueILoByjp, {from: accounts[1]});
		await contractkufn1O7.withdrawERC20.call(ERC20TokencC6nRrk, recipientlPcHnTq, valueO0IiOM, {from: accounts[5]});
		await contractkufn1O7.freezeAndTransfer.call(recipientPjYk5hb, amountKe7naHn, _periodxd58SOY, {from: accounts[1]});
		const nullhvuUxaC = await contractkufn1O7.allowanceUSDT.call(accountZu9LXuL, {from: accounts[2]});

		await expect(contractkufn1O7.withdraw.call(valueILoByjp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGsXhxN7 = accounts[4]
		const FOSTERAddrgAIP4t = accounts[2]
		const initialRateWksJP4Q = BigInt("445")
		const initialPeriodS6BOTi = BigInt("1312")
		const initialOwnerYnMeC6 = accounts[0]
		const contractrYvXQQ = await Reseller.new(USDTAddrGsXhxN7, FOSTERAddrgAIP4t, initialRateWksJP4Q, initialPeriodS6BOTi, initialOwnerYnMeC6, {from: accounts[2]});
		const _ref5a21mN2N = accounts[0]
		const _ref4TshZBIk = accounts[4]
		const _ref3ymE8PjK = accounts[4]
		const _ref2YEyFAFX = accounts[4]
		const _ref1AgIwuf = accounts[1]
		const valueLJq05t2 = BigInt("863")
		const newBoss2LbMpZSC = accounts[0]
		await contractrYvXQQ.buy.call(valueLJq05t2, _ref1AgIwuf, _ref2YEyFAFX, _ref3ymE8PjK, _ref4TshZBIk, _ref5a21mN2N, {from: accounts[0]});
		await contractrYvXQQ.deposeBoss2.call(newBoss2LbMpZSC, {from: accounts[0]});
		await contractrYvXQQ.switchState.call({from: accounts[2]});

		await expect(contractrYvXQQ.buy.call(valueLJq05t2, _ref1AgIwuf, _ref2YEyFAFX, _ref3ymE8PjK, _ref4TshZBIk, _ref5a21mN2N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrM8bx3Cb = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrkq2tFHy = accounts[4]
		const initialRateadgs7Xb = BigInt("1939")
		const initialPeriodaZlAlQa = BigInt("262")
		const initialOwnerJCwjDqn = accounts[3]
		const contractty9uKwt = await Reseller.new(USDTAddrM8bx3Cb, FOSTERAddrkq2tFHy, initialRateadgs7Xb, initialPeriodaZlAlQa, initialOwnerJCwjDqn, {from: accounts[3]});
		const newMinimumXMAFhup = BigInt("941")
		const newFeeIOus11f = BigInt("123")
		const accountGBO4M7 = accounts[1]
		const valueBM0ALi = BigInt("820")
		await contractty9uKwt.setMinimum.call(newMinimumXMAFhup, {from: accounts[3]});
		await contractty9uKwt.setFee.call(newFeeIOus11f, {from: accounts[4]});
		const nullZpLL9ui = await contractty9uKwt.allowanceFOSTER.call(accountGBO4M7, {from: accounts[4]});
		await contractty9uKwt.withdraw.call(valueBM0ALi, {from: accounts[1]});

		await expect(contractty9uKwt.setMinimum.call(newMinimumXMAFhup, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrrMGBDOI = accounts[0]
		const FOSTERAddrnDhubTh = accounts[4]
		const initialRateJseOeKh = BigInt("66")
		const initialPeriodNeGb7Y = BigInt("1239")
		const initialOwnerqXWEMgC = accounts[2]
		const contractXCUJPW1 = await Reseller.new(USDTAddrrMGBDOI, FOSTERAddrnDhubTh, initialRateJseOeKh, initialPeriodNeGb7Y, initialOwnerqXWEMgC, {from: accounts[0]});
		const newRate0o0NIa = BigInt("1977")
		const newBoss3IyZ7Whs = accounts[1]
		await contractXCUJPW1.setRate.call(newRate0o0NIa, {from: "0x0000000000000000000000000000000000000001"});
		await contractXCUJPW1.deposeBoss3.call(newBoss3IyZ7Whs, {from: accounts[4]});

		await expect(contractXCUJPW1.setRate.call(newRate0o0NIa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruKH6SMk = accounts[0]
		const FOSTERAddrhrg0tHN = accounts[4]
		const initialRateaKxiGJv = BigInt("66")
		const initialPeriodBmG9tRe = BigInt("1239")
		const initialOwneriQIWSin = accounts[2]
		const contractnZq5Zge = await Reseller.new(USDTAddruKH6SMk, FOSTERAddrhrg0tHN, initialRateaKxiGJv, initialPeriodBmG9tRe, initialOwneriQIWSin, {from: accounts[0]});
		const newBoss3MclOOHA = accounts[1]
		await contractnZq5Zge.deposeBoss3.call(newBoss3MclOOHA, {from: accounts[4]});

		await expect(contractnZq5Zge.deposeBoss3.call(newBoss3MclOOHA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrRstR7bz = accounts[0]
		const FOSTERAddrdi6MWox = accounts[0]
		const initialRateCJTOg8 = BigInt("783")
		const initialPeriodGGtcELs = BigInt("174")
		const initialOwnerdInBli = accounts[2]
		const contract40F1OW = await Reseller.new(USDTAddrRstR7bz, FOSTERAddrdi6MWox, initialRateCJTOg8, initialPeriodGGtcELs, initialOwnerdInBli, {from: accounts[1]});
		const newPeriodlHYOdBo = BigInt("402")
		const newBoss2k8XAifY = accounts[0]
		const amountmbsrm7s = BigInt("1507")
		const newBoss3OVKa5S8 = accounts[4]
		const newMinimum7EWZfT = BigInt("924")
		await contract40F1OW.setPeriod.call(newPeriodlHYOdBo, {from: accounts[1]});
		await contract40F1OW.deposeBoss2.call(newBoss2k8XAifY, {from: accounts[2]});
		const nullKWDjeFZ = await contract40F1OW.getEstimation.call(amountmbsrm7s, {from: accounts[4]});
		await contract40F1OW.deposeBoss3.call(newBoss3OVKa5S8, {from: accounts[5]});
		await contract40F1OW.setMinimum.call(newMinimum7EWZfT, {from: accounts[3]});

		await expect(contract40F1OW.setPeriod.call(newPeriodlHYOdBo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHON1tE = accounts[0]
		const FOSTERAddrPTN4Yuv = accounts[4]
		const initialRateAmlRXnm = BigInt("66")
		const initialPeriodMYOOGhE = BigInt("1239")
		const initialOwnerwZKnNDA = accounts[2]
		const contractaRC8tbg = await Reseller.new(USDTAddrHON1tE, FOSTERAddrPTN4Yuv, initialRateAmlRXnm, initialPeriodMYOOGhE, initialOwnerwZKnNDA, {from: accounts[0]});
		const amountYmaRmBD = BigInt("872")
		const commentBPQj6bB = "h0FAgLj0QPpD"
		const _ref5ungienJ = accounts[1]
		const _ref4WOIAcjD = accounts[3]
		const _ref3PspRSMe = accounts[2]
		const _ref2nmiUu9K = accounts[2]
		const _ref1zwYtIml = accounts[3]
		const values2QH3Rz = BigInt("1406")
		const newBoss3b3cYocM = accounts[2]
		const amountmHugcds = BigInt("935")
		const nullNZuEVGl = await contractaRC8tbg.getEstimation.call(amountYmaRmBD, {from: accounts[4]});
		await contractaRC8tbg.purchase.call(values2QH3Rz, _ref1zwYtIml, _ref2nmiUu9K, _ref3PspRSMe, _ref4WOIAcjD, _ref5ungienJ, commentBPQj6bB, {from: accounts[3]});
		await contractaRC8tbg.deposeBoss3.call(newBoss3b3cYocM, {from: accounts[4]});
		const nullxCZ4Kvf = await contractaRC8tbg.getEstimation.call(amountmHugcds, {from: accounts[5]});

		assert.equal(nullNZuEVGl, 57552)
		await expect(contractaRC8tbg.purchase.call(values2QH3Rz, _ref1zwYtIml, _ref2nmiUu9K, _ref3PspRSMe, _ref4WOIAcjD, _ref5ungienJ, commentBPQj6bB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmGTVXv = accounts[0]
		const FOSTERAddroq3Ayf = accounts[4]
		const initialRateMxXLM09 = BigInt("66")
		const initialPeriodjeMKRAI = BigInt("1239")
		const initialOwneroxXeODq = accounts[2]
		const contractu8gTnzf = await Reseller.new(USDTAddrmGTVXv, FOSTERAddroq3Ayf, initialRateMxXLM09, initialPeriodjeMKRAI, initialOwneroxXeODq, {from: accounts[0]});
		const level5FM39LDT = BigInt("11")
		const level4SrkuDkt = BigInt("126")
		const level3NkfLycz = BigInt("170")
		const level2SX5MFRZ = BigInt("92")
		const level1zSKmytY = BigInt("151")
		const newBoss3mzW9l9j = accounts[2]
		const newBoss4SFLn322 = accounts[4]
		const newBoss1bLHAwfk = accounts[3]
		await contractu8gTnzf.setRefBonus.call(level1zSKmytY, level2SX5MFRZ, level3NkfLycz, level4SrkuDkt, level5FM39LDT, {from: "0x0000000000000000000000000000000000000001"});
		await contractu8gTnzf.deposeBoss3.call(newBoss3mzW9l9j, {from: accounts[4]});
		await contractu8gTnzf.deposeBoss4.call(newBoss4SFLn322, {from: accounts[2]});
		await contractu8gTnzf.deposeBoss1.call(newBoss1bLHAwfk, {from: accounts[0]});

		await expect(contractu8gTnzf.setRefBonus.call(level1zSKmytY, level2SX5MFRZ, level3NkfLycz, level4SrkuDkt, level5FM39LDT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrJqW0Q9o = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrUonBFX = accounts[0]
		const initialRateZHqzDql = BigInt("316")
		const initialPeriody6Rsbyq = BigInt("88")
		const initialOwnerFcCxuDZ = accounts[4]
		const contractAIjyrw = await Reseller.new(USDTAddrJqW0Q9o, FOSTERAddrUonBFX, initialRateZHqzDql, initialPeriody6Rsbyq, initialOwnerFcCxuDZ, {from: accounts[1]});
		const accountleHwhVf = accounts[1]
		const _periodb4x9ezC = BigInt("123")
		const amountoZgJ3gF = BigInt("716")
		const recipientr72Xaf3 = accounts[3]
		const commentQXXSLXi = "1AY9mrj9dtYUjRxbWTJrrP6PanQM5zXThmoq8ctYQLFjrMayMmSpf3FgVPspsRBr9mwQHQh0PoGfPRz6lBh4fqMvn"
		const _ref5n61Y3Vz = accounts[1]
		const _ref4DzV7hPK = accounts[4]
		const _ref3C4BDNPr = accounts[0]
		const _ref2LVJyS9s = "0x0000000000000000000000000000000000000001"
		const _ref1KiTTSv3 = accounts[2]
		const valuetUdP8w = BigInt("454")
		const newRatejurfXy = BigInt("198")
		const newFeerFK0hJP = BigInt("62")
		const newBoss1AGNem4g = accounts[0]
		const valueBVqpmsj = BigInt("1655")
		const recipientTiDXpUA = accounts[4]
		const ERC20TokenETUuS4N = accounts[4]
		const nulldJpdxD = await contractAIjyrw.allowanceUSDT.call(accountleHwhVf, {from: accounts[4]});
		await contractAIjyrw.freezeAndTransfer.call(recipientr72Xaf3, amountoZgJ3gF, _periodb4x9ezC, {from: "0x0000000000000000000000000000000000000001"});
		await contractAIjyrw.purchase.call(valuetUdP8w, _ref1KiTTSv3, _ref2LVJyS9s, _ref3C4BDNPr, _ref4DzV7hPK, _ref5n61Y3Vz, commentQXXSLXi, {from: accounts[1]});
		await contractAIjyrw.setRate.call(newRatejurfXy, {from: accounts[4]});
		await contractAIjyrw.setFee.call(newFeerFK0hJP, {from: "0x0000000000000000000000000000000000000001"});
		await contractAIjyrw.deposeBoss1.call(newBoss1AGNem4g, {from: accounts[2]});
		await contractAIjyrw.withdrawERC20.call(ERC20TokenETUuS4N, recipientTiDXpUA, valueBVqpmsj, {from: accounts[0]});

		await expect(contractAIjyrw.allowanceUSDT.call(accountleHwhVf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrw8VFQ1 = accounts[0]
		const FOSTERAddrOpCvE0I = accounts[4]
		const initialRateoTZfJ1C = BigInt("66")
		const initialPeriodbHv12IZ = BigInt("1239")
		const initialOwnerc14fHT1 = accounts[2]
		const contractnin3WD1 = await Reseller.new(USDTAddrw8VFQ1, FOSTERAddrOpCvE0I, initialRateoTZfJ1C, initialPeriodbHv12IZ, initialOwnerc14fHT1, {from: accounts[0]});
		const accountxPIUkqA = accounts[2]
		const newBoss3kv9p9KT = accounts[1]
		const nullPhTB8jt = await contractnin3WD1.balanceFOSTER.call(accountxPIUkqA, {from: accounts[3]});
		await contractnin3WD1.deposeBoss3.call(newBoss3kv9p9KT, {from: accounts[4]});

		await expect(contractnin3WD1.balanceFOSTER.call(accountxPIUkqA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrX9C0H1d = accounts[0]
		const FOSTERAddrt902QK5 = accounts[4]
		const initialRateRIAoAaX = BigInt("66")
		const initialPeriodaxmkJLZ = BigInt("1239")
		const initialOwnerIzNff3v = accounts[2]
		const contractmTIDx8R = await Reseller.new(USDTAddrX9C0H1d, FOSTERAddrt902QK5, initialRateRIAoAaX, initialPeriodaxmkJLZ, initialOwnerIzNff3v, {from: accounts[0]});
		const newBoss2dRkUyey = "0x0000000000000000000000000000000000000001"
		const newBoss3cC7L0Wq = accounts[2]
		const newBoss3ofIiNZ = "0x0000000000000000000000000000000000000001"
		await contractmTIDx8R.deposeBoss2.call(newBoss2dRkUyey, {from: accounts[2]});
		await contractmTIDx8R.deposeBoss3.call(newBoss3cC7L0Wq, {from: accounts[4]});
		await contractmTIDx8R.deposeBoss3.call(newBoss3ofIiNZ, {from: accounts[2]});

		await expect(contractmTIDx8R.deposeBoss2.call(newBoss2dRkUyey, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGOvDCzb = accounts[0]
		const FOSTERAddrkNzizKE = accounts[4]
		const initialRateXENQyMa = BigInt("1412")
		const initialPeriodhairs9T = BigInt("391")
		const initialOwnerrGCW1SY = accounts[4]
		const contractfSNe1PA = await Reseller.new(USDTAddrGOvDCzb, FOSTERAddrkNzizKE, initialRateXENQyMa, initialPeriodhairs9T, initialOwnerrGCW1SY, {from: "0x0000000000000000000000000000000000000001"});
		const newPeriodOlduz1P = BigInt("1779")
		const newBoss4pX0664 = accounts[4]
		const newBoss1N8AMZdn = "0x0000000000000000000000000000000000000001"
		const newRatetqEmhJ = BigInt("667")
		const _ref5Jd2sCUz = accounts[2]
		const _ref4WMUwA5q = accounts[4]
		const _ref3vMqQJgE = accounts[1]
		const _ref2xtAyv3E = accounts[3]
		const _ref1jwA241K = accounts[0]
		const valueypaKG8p = BigInt("1964")
		await contractfSNe1PA.setPeriod.call(newPeriodOlduz1P, {from: accounts[1]});
		await contractfSNe1PA.deposeBoss4.call(newBoss4pX0664, {from: accounts[5]});
		await contractfSNe1PA.deposeBoss1.call(newBoss1N8AMZdn, {from: accounts[2]});
		await contractfSNe1PA.setRate.call(newRatetqEmhJ, {from: accounts[4]});
		await contractfSNe1PA.buy.call(valueypaKG8p, _ref1jwA241K, _ref2xtAyv3E, _ref3vMqQJgE, _ref4WMUwA5q, _ref5Jd2sCUz, {from: accounts[5]});
	});

	it('test for Reseller', async () => {
		const USDTAddraU8m6i6 = accounts[2]
		const FOSTERAddrVhkedt4 = accounts[4]
		const initialRateSfbJEV7 = BigInt("1406")
		const initialPeriodUbbFv9I = BigInt("1011")
		const initialOwnerJ2CJLHS = accounts[4]
		const contractejgf1LL = await Reseller.new(USDTAddraU8m6i6, FOSTERAddrVhkedt4, initialRateSfbJEV7, initialPeriodUbbFv9I, initialOwnerJ2CJLHS, {from: accounts[2]});
		const accountwKgHXcE = accounts[2]
		const _ref5OVbsf4F = accounts[5]
		const _ref4AZ2LjVH = accounts[5]
		const _ref3r0QVbx = accounts[3]
		const _ref2TPfEbtf = accounts[4]
		const _ref1wrkYSwv = accounts[0]
		const valuekVZejXA = BigInt("1266")
		const newFeeSqiAzYC = BigInt("176")
		const commentGLSxzfg = "4qomzDrcj8dWriOJXllGAMO9mxu1PfO37aHDqDOqowhopMJJA72yii6vyJDpVHBBe1TMX1N"
		const _ref5EjZdtO = accounts[2]
		const _ref4nlnDBYI = accounts[0]
		const _ref3LaIq6ED = accounts[5]
		const _ref2oRq9zQe = accounts[0]
		const _ref1eafrGgm = accounts[1]
		const valueA2p8sx = BigInt("1034")
		const newRatew1JwaXm = BigInt("1145")
		const nullvvq1uQj = await contractejgf1LL.balanceUSDT.call(accountwKgHXcE, {from: accounts[2]});
		await contractejgf1LL.buy.call(valuekVZejXA, _ref1wrkYSwv, _ref2TPfEbtf, _ref3r0QVbx, _ref4AZ2LjVH, _ref5OVbsf4F, {from: accounts[1]});
		await contractejgf1LL.setFee.call(newFeeSqiAzYC, {from: "0x0000000000000000000000000000000000000001"});
		await contractejgf1LL.purchase.call(valueA2p8sx, _ref1eafrGgm, _ref2oRq9zQe, _ref3LaIq6ED, _ref4nlnDBYI, _ref5EjZdtO, commentGLSxzfg, {from: accounts[3]});
		await contractejgf1LL.setRate.call(newRatew1JwaXm, {from: accounts[1]});

		await expect(contractejgf1LL.balanceUSDT.call(accountwKgHXcE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})