const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrEyRPj13 = accounts[3]
		const FOSTERAddrfiwNfk = accounts[5]
		const initialRatevsKbP5t = BigInt("1438")
		const initialPeriodJNh9ezA = BigInt("490")
		const initialOwnercZ8r6BD = accounts[5]
		const contractL16mTpU = await Reseller.new(USDTAddrEyRPj13, FOSTERAddrfiwNfk, initialRatevsKbP5t, initialPeriodJNh9ezA, initialOwnercZ8r6BD, {from: accounts[2]});
		const newRateTbA3cgQ = BigInt("2044")
		const valuel1QpPtG = BigInt("1550")
		const recipientoQDmfrJ = accounts[4]
		const ERC20TokenUahTCaG = accounts[3]
		const _periodbldv2nY = BigInt("98")
		const amountBGx8hB = BigInt("546")
		const recipientYtniMlx = accounts[3]
		await contractL16mTpU.setRate.call(newRateTbA3cgQ, {from: accounts[0]});
		await contractL16mTpU.withdrawERC20.call(ERC20TokenUahTCaG, recipientoQDmfrJ, valuel1QpPtG, {from: accounts[2]});
		await contractL16mTpU.freezeAndTransfer.call(recipientYtniMlx, amountBGx8hB, _periodbldv2nY, {from: accounts[3]});

		await expect(contractL16mTpU.setRate.call(newRateTbA3cgQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddree3LLTZ = accounts[2]
		const FOSTERAddrsgOm2NL = accounts[1]
		const initialRatetZfoVxo = BigInt("432")
		const initialPeriodHIjWbeR = BigInt("863")
		const initialOwnercGP9BR9 = accounts[5]
		const contractQcJYHxK = await Reseller.new(USDTAddree3LLTZ, FOSTERAddrsgOm2NL, initialRatetZfoVxo, initialPeriodHIjWbeR, initialOwnercGP9BR9, {from: accounts[1]});
		const commentnlzpOfN = "lch9EAJV8EX2NWUSBHFnp3kQBsXH1WWlLLlc06jOaT9jlyBRuPH6std81VPR"
		const _ref5Ha8baka = accounts[4]
		const _ref4KZCRiKd = accounts[5]
		const _ref3lTFIMfU = accounts[3]
		const _ref2ZwLFF2 = accounts[3]
		const _ref1XVG5T4W = accounts[4]
		const valueLsXm0DU = BigInt("1821")
		const accountlZNlT6n = accounts[5]
		const _ref5OIllEwy = accounts[3]
		const _ref4LhFFVRA = accounts[3]
		const _ref3pbgs30r = accounts[3]
		const _ref2Ocq8zaB = accounts[3]
		const _ref1Ic9smqt = accounts[4]
		const valuexSuHMpX = BigInt("730")
		await contractQcJYHxK.purchase.call(valueLsXm0DU, _ref1XVG5T4W, _ref2ZwLFF2, _ref3lTFIMfU, _ref4KZCRiKd, _ref5Ha8baka, commentnlzpOfN, {from: accounts[5]});
		const nullBBprQ3 = await contractQcJYHxK.balanceUSDT.call(accountlZNlT6n, {from: accounts[0]});
		await contractQcJYHxK.buy.call(valuexSuHMpX, _ref1Ic9smqt, _ref2Ocq8zaB, _ref3pbgs30r, _ref4LhFFVRA, _ref5OIllEwy, {from: accounts[2]});

		await expect(contractQcJYHxK.purchase.call(valueLsXm0DU, _ref1XVG5T4W, _ref2ZwLFF2, _ref3lTFIMfU, _ref4KZCRiKd, _ref5Ha8baka, commentnlzpOfN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrUM8GnDk = accounts[3]
		const FOSTERAddrRx88kaK = accounts[4]
		const initialRateT1FA8B7 = BigInt("507")
		const initialPeriodDmSzSGm = BigInt("1933")
		const initialOwnertFGJrej = accounts[3]
		const contractbDQ1j0f = await Reseller.new(USDTAddrUM8GnDk, FOSTERAddrRx88kaK, initialRateT1FA8B7, initialPeriodDmSzSGm, initialOwnertFGJrej, {from: accounts[4]});
		const _periodkV5xcvf = BigInt("1582")
		const amountEMeIoEV = BigInt("1079")
		const recipientSLrTB4U = accounts[0]
		const level5hOYGidd = BigInt("245")
		const level4ZRJZrHa = BigInt("11")
		const level3OIgB5jT = BigInt("157")
		const level2nJbGO8u = BigInt("123")
		const level1a47hTBE = BigInt("19")
		const newPeriodMhV9uL7 = BigInt("1408")
		await contractbDQ1j0f.freezeAndTransfer.call(recipientSLrTB4U, amountEMeIoEV, _periodkV5xcvf, {from: accounts[1]});
		await contractbDQ1j0f.setRefBonus.call(level1a47hTBE, level2nJbGO8u, level3OIgB5jT, level4ZRJZrHa, level5hOYGidd, {from: accounts[1]});
		await contractbDQ1j0f.setPeriod.call(newPeriodMhV9uL7, {from: accounts[1]});

		await expect(contractbDQ1j0f.freezeAndTransfer.call(recipientSLrTB4U, amountEMeIoEV, _periodkV5xcvf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkW5SmwS = accounts[0]
		const FOSTERAddreQA0dnp = accounts[0]
		const initialRateGupk22b = BigInt("1079")
		const initialPeriodGH6cJbh = BigInt("1999")
		const initialOwnertUnWCvX = "0x0000000000000000000000000000000000000001"
		const contracto9cJyM5 = await Reseller.new(USDTAddrkW5SmwS, FOSTERAddreQA0dnp, initialRateGupk22b, initialPeriodGH6cJbh, initialOwnertUnWCvX, {from: accounts[2]});
		const newPeriodptDpFGH = BigInt("245")
		const accountgGvyJzw = accounts[3]
		const accountOjuLX6l = accounts[5]
		await contracto9cJyM5.setPeriod.call(newPeriodptDpFGH, {from: accounts[4]});
		const nullBCkdo2X = await contracto9cJyM5.allowanceUSDT.call(accountgGvyJzw, {from: accounts[4]});
		await contracto9cJyM5.switchState.call({from: accounts[1]});
		const nullC6hUsQT = await contracto9cJyM5.allowanceFOSTER.call(accountOjuLX6l, {from: accounts[1]});

		await expect(contracto9cJyM5.setPeriod.call(newPeriodptDpFGH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrR7xF5ku = accounts[2]
		const FOSTERAddroAZ7ZZZ = "0x0000000000000000000000000000000000000001"
		const initialRatefRlQ1cQ = BigInt("617")
		const initialPeriodwiLKJVM = BigInt("1872")
		const initialOwnerTx5XL9H = "0x0000000000000000000000000000000000000001"
		const contractogMJEEN = await Reseller.new(USDTAddrR7xF5ku, FOSTERAddroAZ7ZZZ, initialRatefRlQ1cQ, initialPeriodwiLKJVM, initialOwnerTx5XL9H, {from: accounts[0]});
		const newBoss4FQzRQQZ = accounts[3]
		const level5QvINVje = BigInt("166")
		const level4hnKbqFw = BigInt("225")
		const level3wWyLKhm = BigInt("206")
		const level2mb5Syx = BigInt("164")
		const level1xKe2Yj3 = BigInt("153")
		const newPeriodWhcDhC = BigInt("1889")
		const accountWkD6LN8 = accounts[4]
		await contractogMJEEN.deposeBoss4.call(newBoss4FQzRQQZ, {from: accounts[0]});
		await contractogMJEEN.setRefBonus.call(level1xKe2Yj3, level2mb5Syx, level3wWyLKhm, level4hnKbqFw, level5QvINVje, {from: accounts[1]});
		await contractogMJEEN.setPeriod.call(newPeriodWhcDhC, {from: accounts[2]});
		const nullgtXhqOG = await contractogMJEEN.balanceFOSTER.call(accountWkD6LN8, {from: accounts[1]});

		await expect(contractogMJEEN.deposeBoss4.call(newBoss4FQzRQQZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPkX45FC = accounts[4]
		const FOSTERAddrQkdej4U = accounts[1]
		const initialRateQOkNal9 = BigInt("1625")
		const initialPeriodAz2wnHO = BigInt("948")
		const initialOwnerlOfvhiJ = accounts[4]
		const contractIIS7PZZ = await Reseller.new(USDTAddrPkX45FC, FOSTERAddrQkdej4U, initialRateQOkNal9, initialPeriodAz2wnHO, initialOwnerlOfvhiJ, {from: accounts[4]});
		const accountMBYCIOj = accounts[4]
		const accountblWeaUd = accounts[3]
		const newBoss2WUfnSPU = accounts[2]
		const commentMjG1WhU = "wRQGVbbBwrW9Uyydd1rYf8EDWN"
		const _ref5tXUm2Y1 = accounts[0]
		const _ref4PeXEmsU = accounts[1]
		const _ref3b8kotr = accounts[1]
		const _ref2ayivuQY = accounts[5]
		const _ref1UabOqkv = accounts[2]
		const valuexxOG99w = BigInt("1633")
		const nullo9W0Dd7 = await contractIIS7PZZ.allowanceUSDT.call(accountMBYCIOj, {from: accounts[4]});
		const nullANcHuLf = await contractIIS7PZZ.balanceFOSTER.call(accountblWeaUd, {from: accounts[3]});
		await contractIIS7PZZ.deposeBoss2.call(newBoss2WUfnSPU, {from: accounts[3]});
		await contractIIS7PZZ.switchState.call({from: accounts[4]});
		await contractIIS7PZZ.purchase.call(valuexxOG99w, _ref1UabOqkv, _ref2ayivuQY, _ref3b8kotr, _ref4PeXEmsU, _ref5tXUm2Y1, commentMjG1WhU, {from: accounts[2]});

		await expect(contractIIS7PZZ.allowanceUSDT.call(accountMBYCIOj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCC0sVxu = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrr25leHy = accounts[0]
		const initialRateMduiey = BigInt("800")
		const initialPeriodd2oWAbZ = BigInt("2009")
		const initialOwnerAsArFr5 = accounts[3]
		const contractMXv6GI = await Reseller.new(USDTAddrCC0sVxu, FOSTERAddrr25leHy, initialRateMduiey, initialPeriodd2oWAbZ, initialOwnerAsArFr5, {from: accounts[3]});
		const _ref5FGdGiFs = accounts[0]
		const _ref4k4BFaS = accounts[5]
		const _ref37gHfCq = accounts[2]
		const _ref2kEz6dDR = accounts[3]
		const _ref1YaKEy4X = accounts[0]
		const valueB8AebSd = BigInt("940")
		const _periodyCjNack = BigInt("863")
		const amountGUT3Gw = BigInt("1508")
		const recipientKHF4wN = "0x0000000000000000000000000000000000000001"
		const amountSa5h5kf = BigInt("353")
		const accounto8PAFsS = accounts[1]
		const newBoss1pO6XKD = accounts[3]
		const newFeeGHp5Wi6 = BigInt("210")
		await contractMXv6GI.buy.call(valueB8AebSd, _ref1YaKEy4X, _ref2kEz6dDR, _ref37gHfCq, _ref4k4BFaS, _ref5FGdGiFs, {from: accounts[1]});
		await contractMXv6GI.freezeAndTransfer.call(recipientKHF4wN, amountGUT3Gw, _periodyCjNack, {from: accounts[2]});
		const nullqT4Ocn3 = await contractMXv6GI.getEstimation.call(amountSa5h5kf, {from: accounts[3]});
		const nullaanC5EG = await contractMXv6GI.allowanceFOSTER.call(accounto8PAFsS, {from: accounts[2]});
		await contractMXv6GI.deposeBoss1.call(newBoss1pO6XKD, {from: accounts[5]});
		await contractMXv6GI.setFee.call(newFeeGHp5Wi6, {from: accounts[3]});

		await expect(contractMXv6GI.buy.call(valueB8AebSd, _ref1YaKEy4X, _ref2kEz6dDR, _ref37gHfCq, _ref4k4BFaS, _ref5FGdGiFs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddroEQSZhS = accounts[0]
		const FOSTERAddriZ8zhAp = accounts[4]
		const initialRateTGMVBXy = BigInt("1835")
		const initialPeriodMs3gq9 = BigInt("637")
		const initialOwneruBhYVfu = accounts[2]
		const contractObXhyA2 = await Reseller.new(USDTAddroEQSZhS, FOSTERAddriZ8zhAp, initialRateTGMVBXy, initialPeriodMs3gq9, initialOwneruBhYVfu, {from: "0x0000000000000000000000000000000000000001"});
		const newFeeHuM6ezn = BigInt("120")
		const newRateMPtSNBU = BigInt("264")
		const newBoss3WpHVqal = accounts[3]
		const newPeriodK0rcD8J = BigInt("79")
		await contractObXhyA2.setFee.call(newFeeHuM6ezn, {from: accounts[0]});
		await contractObXhyA2.setRate.call(newRateMPtSNBU, {from: accounts[3]});
		await contractObXhyA2.deposeBoss3.call(newBoss3WpHVqal, {from: accounts[4]});
		await contractObXhyA2.setPeriod.call(newPeriodK0rcD8J, {from: accounts[2]});
	});

	it('test for Reseller', async () => {
		const USDTAddrkOHfOAU = accounts[1]
		const FOSTERAddrzZTAWrp = accounts[4]
		const initialRatezUrMVR = BigInt("460")
		const initialPeriodSaqi58z = BigInt("782")
		const initialOwnerzz4fpcI = accounts[4]
		const contractzbMQpv = await Reseller.new(USDTAddrkOHfOAU, FOSTERAddrzZTAWrp, initialRatezUrMVR, initialPeriodSaqi58z, initialOwnerzz4fpcI, {from: accounts[1]});
		const amountftbsjRI = BigInt("1299")
		const newBoss4B2yR3q = accounts[4]
		const accountjw12DV = accounts[3]
		const newFeenQufrdw = BigInt("161")
		const newBoss3QE165aM = accounts[3]
		const nullr7JbGdf = await contractzbMQpv.getEstimation.call(amountftbsjRI, {from: accounts[0]});
		await contractzbMQpv.deposeBoss4.call(newBoss4B2yR3q, {from: "0x0000000000000000000000000000000000000001"});
		const nullNQ5TXk = await contractzbMQpv.allowanceUSDT.call(accountjw12DV, {from: accounts[3]});
		await contractzbMQpv.setFee.call(newFeenQufrdw, {from: accounts[4]});
		await contractzbMQpv.deposeBoss3.call(newBoss3QE165aM, {from: accounts[2]});

		assert.equal(nullr7JbGdf, 597540)
		await expect(contractzbMQpv.deposeBoss4.call(newBoss4B2yR3q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkD3dRgh = accounts[2]
		const FOSTERAddrssuxuB = accounts[1]
		const initialRateM2Za9kR = BigInt("432")
		const initialPeriodzPeJOE = BigInt("863")
		const initialOwnereixaTaR = accounts[5]
		const contractnNwKBGt = await Reseller.new(USDTAddrkD3dRgh, FOSTERAddrssuxuB, initialRateM2Za9kR, initialPeriodzPeJOE, initialOwnereixaTaR, {from: accounts[1]});
		const newFeeqe6fdko = BigInt("71")
		const commentwO1oXOA = "lch9EAJV8EX2NWUSBHFnp3kQBsXH1WWlLLlc06jOaT9jlyBRuPH6std81VPR"
		const _ref5cC7htHz = accounts[4]
		const _ref4SDkthF = accounts[5]
		const _ref3ljYgZf7 = accounts[3]
		const _ref2pXKNlen = accounts[4]
		const _ref1xy4U4LM = accounts[4]
		const valueC2Zg7V1 = BigInt("1823")
		const _ref5Nw1tcJM = accounts[3]
		const _ref4ZBqROt6 = accounts[3]
		const _ref3dWmZzCX = accounts[3]
		const _ref2SHcRKs = accounts[3]
		const _ref1o3aK62F = accounts[4]
		const valueL4cV0gV = BigInt("730")
		const newRatesSjpt6t = BigInt("1673")
		await contractnNwKBGt.setFee.call(newFeeqe6fdko, {from: accounts[3]});
		await contractnNwKBGt.purchase.call(valueC2Zg7V1, _ref1xy4U4LM, _ref2pXKNlen, _ref3ljYgZf7, _ref4SDkthF, _ref5cC7htHz, commentwO1oXOA, {from: accounts[5]});
		await contractnNwKBGt.buy.call(valueL4cV0gV, _ref1o3aK62F, _ref2SHcRKs, _ref3dWmZzCX, _ref4ZBqROt6, _ref5Nw1tcJM, {from: accounts[2]});
		await contractnNwKBGt.setRate.call(newRatesSjpt6t, {from: accounts[4]});

		await expect(contractnNwKBGt.setFee.call(newFeeqe6fdko, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddriA1mZer = accounts[2]
		const FOSTERAddrhOyBwvh = accounts[1]
		const initialRatezrpcxZ = BigInt("432")
		const initialPeriodn2Vr9wB = BigInt("863")
		const initialOwnerg80K2Qc = accounts[5]
		const contractoEzOZp = await Reseller.new(USDTAddriA1mZer, FOSTERAddrhOyBwvh, initialRatezrpcxZ, initialPeriodn2Vr9wB, initialOwnerg80K2Qc, {from: accounts[1]});
		const accounttXeJAMv = "0x0000000000000000000000000000000000000001"
		const commenthoT55un = "lch9EAJV8EX2NWUSBHFnp3kQBsXH1WWlLLlc06jOaT9jlyBRuPH6std81VPR"
		const _ref5hMPAk3u = accounts[4]
		const _ref4kFT7Iya = accounts[5]
		const _ref3QZ25YD9 = accounts[4]
		const _ref2LG4wKRg = accounts[3]
		const _ref1lILY1jT = accounts[4]
		const valueCRgc3Ve = BigInt("1822")
		const nullecUeps = await contractoEzOZp.allowanceFOSTER.call(accounttXeJAMv, {from: accounts[1]});
		await contractoEzOZp.purchase.call(valueCRgc3Ve, _ref1lILY1jT, _ref2LG4wKRg, _ref3QZ25YD9, _ref4kFT7Iya, _ref5hMPAk3u, commenthoT55un, {from: accounts[5]});

		await expect(contractoEzOZp.allowanceFOSTER.call(accounttXeJAMv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddryIHF86G = accounts[2]
		const FOSTERAddrp8V4H5c = accounts[1]
		const initialRateFbXBjL0 = BigInt("432")
		const initialPeriodaQ0XWqV = BigInt("863")
		const initialOwnerPL1yx7o = accounts[5]
		const contractNoBSFGZ = await Reseller.new(USDTAddryIHF86G, FOSTERAddrp8V4H5c, initialRateFbXBjL0, initialPeriodaQ0XWqV, initialOwnerPL1yx7o, {from: accounts[1]});
		const newMinimumlnS5Eb = BigInt("1018")
		const commentPpUgeoc = "lch9EAJV8EX2NWUSBHFnp3kQBsXH1WWlLLlc06jOaT9jlyBRuPH6std81VPR"
		const _ref5Y1rfS1R = accounts[4]
		const _ref4U8CxdNF = accounts[5]
		const _ref3bTSLdv = accounts[4]
		const _ref2t3KeHjV = accounts[4]
		const _ref1yVcVW1I = accounts[4]
		const valueGI9C0Qy = BigInt("1823")
		await contractNoBSFGZ.setMinimum.call(newMinimumlnS5Eb, {from: accounts[3]});
		await contractNoBSFGZ.purchase.call(valueGI9C0Qy, _ref1yVcVW1I, _ref2t3KeHjV, _ref3bTSLdv, _ref4U8CxdNF, _ref5Y1rfS1R, commentPpUgeoc, {from: accounts[5]});

		await expect(contractNoBSFGZ.setMinimum.call(newMinimumlnS5Eb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrxqJKiMM = accounts[2]
		const FOSTERAddrUQMdrmv = accounts[1]
		const initialRatehdWb3c4 = BigInt("432")
		const initialPeriodGMpRvwt = BigInt("863")
		const initialOwneraA8acDh = accounts[5]
		const contractQanvq9 = await Reseller.new(USDTAddrxqJKiMM, FOSTERAddrUQMdrmv, initialRatehdWb3c4, initialPeriodGMpRvwt, initialOwneraA8acDh, {from: accounts[1]});
		const accountbo4b8dw = accounts[2]
		const valueWuT66KH = BigInt("632")
		const amountebTgjII = BigInt("849")
		const commenticLPYUB = "lch9EAJV8EX2NWUSBHFnp3kQBsXH1WWlLLlc06jOaT9jlyBRuPH6std81VPR"
		const _ref5EgKjl1t = accounts[5]
		const _ref4QlHTsVV = accounts[5]
		const _ref3gL39Tzf = accounts[4]
		const _ref2cDTdNx = accounts[3]
		const _ref1waz6dzO = accounts[4]
		const valueW6tpvYc = BigInt("1823")
		const nulloLSuqEK = await contractQanvq9.balanceFOSTER.call(accountbo4b8dw, {from: accounts[2]});
		await contractQanvq9.withdraw.call(valueWuT66KH, {from: accounts[0]});
		const nullWPuLS9M = await contractQanvq9.getEstimation.call(amountebTgjII, {from: accounts[2]});
		await contractQanvq9.purchase.call(valueW6tpvYc, _ref1waz6dzO, _ref2cDTdNx, _ref3gL39Tzf, _ref4QlHTsVV, _ref5EgKjl1t, commenticLPYUB, {from: accounts[5]});

		await expect(contractQanvq9.balanceFOSTER.call(accountbo4b8dw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddraMtmZbB = accounts[2]
		const FOSTERAddrFgn13yj = accounts[1]
		const initialRateub3Sq6d = BigInt("432")
		const initialPeriodaT6K4ui = BigInt("863")
		const initialOwnerneXdz2i = accounts[5]
		const contractpbd9FmW = await Reseller.new(USDTAddraMtmZbB, FOSTERAddrFgn13yj, initialRateub3Sq6d, initialPeriodaT6K4ui, initialOwnerneXdz2i, {from: accounts[1]});
		const level5MGEfFoN = BigInt("187")
		const level4RBNPBCN = BigInt("68")
		const level3TF386vL = BigInt("99")
		const level26NSbt8 = BigInt("243")
		const level1XFieoJc = BigInt("72")
		const commentShOhuzh = "lch9EAJV8EX2NWUSBHFnp3kQBsXH1WWlLLlc06jOaT9jlyBRuPH6std81VPR"
		const _ref5V4yptql = accounts[4]
		const _ref4ZBNJEhk = accounts[5]
		const _ref3G0f8YL0 = accounts[5]
		const _ref25c6Txz = accounts[3]
		const _ref1hXWtDg = accounts[4]
		const valueSPbgD0g = BigInt("1823")
		await contractpbd9FmW.setRefBonus.call(level1XFieoJc, level26NSbt8, level3TF386vL, level4RBNPBCN, level5MGEfFoN, {from: accounts[3]});
		await contractpbd9FmW.purchase.call(valueSPbgD0g, _ref1hXWtDg, _ref25c6Txz, _ref3G0f8YL0, _ref4ZBNJEhk, _ref5V4yptql, commentShOhuzh, {from: accounts[5]});

		await expect(contractpbd9FmW.setRefBonus.call(level1XFieoJc, level26NSbt8, level3TF386vL, level4RBNPBCN, level5MGEfFoN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrnJy4Wpe = accounts[2]
		const FOSTERAddrvYTl2g8 = accounts[1]
		const initialRateELsyR7g = BigInt("432")
		const initialPeriodL4Tb5Ud = BigInt("863")
		const initialOwnerW7cZfIZ = accounts[5]
		const contractRLjUkoN = await Reseller.new(USDTAddrnJy4Wpe, FOSTERAddrvYTl2g8, initialRateELsyR7g, initialPeriodL4Tb5Ud, initialOwnerW7cZfIZ, {from: accounts[1]});
		const commentM77EBdX = "lch9EAJV8EX2NWUSBHFnp3kQBsXH1WWlLLlc06jOaw9jlyBRuPH6std81VPR"
		const _ref5XnTIzww = accounts[4]
		const _ref4AxNLlix = accounts[5]
		const _ref3WrNFS3c = accounts[4]
		const _ref2Uo7z5uA = accounts[3]
		const _ref1J29SyR2 = accounts[4]
		const valueB6ewTyV = BigInt("1823")
		await contractRLjUkoN.switchState.call({from: accounts[0]});
		await contractRLjUkoN.purchase.call(valueB6ewTyV, _ref1J29SyR2, _ref2Uo7z5uA, _ref3WrNFS3c, _ref4AxNLlix, _ref5XnTIzww, commentM77EBdX, {from: accounts[5]});

		await expect(contractRLjUkoN.switchState.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrOM8lqHV = accounts[2]
		const FOSTERAddrGaFAtvq = accounts[1]
		const initialRateS28vYW0 = BigInt("432")
		const initialPeriode5OZyya = BigInt("863")
		const initialOwnerB4xa82Q = accounts[5]
		const contractvc9Tg4 = await Reseller.new(USDTAddrOM8lqHV, FOSTERAddrGaFAtvq, initialRateS28vYW0, initialPeriode5OZyya, initialOwnerB4xa82Q, {from: accounts[1]});
		const newBoss24BFxjT = accounts[4]
		const commentCS8CDlf = "lch9EAJV8EX2NWUSBHFnp3kQBsXH1WWlLLlc06jOaT9jlyBRuPH6std81VPR"
		const _ref5ftQaXuC = accounts[4]
		const _ref4Uw5bTB = accounts[6]
		const _ref3nPENKQY = accounts[4]
		const _ref2uiLS6p = accounts[3]
		const _ref1yuTkyOe = accounts[4]
		const valuezlpqxD7 = BigInt("1823")
		const newPeriodKh6ogy9 = BigInt("823")
		await contractvc9Tg4.deposeBoss2.call(newBoss24BFxjT, {from: accounts[5]});
		await contractvc9Tg4.purchase.call(valuezlpqxD7, _ref1yuTkyOe, _ref2uiLS6p, _ref3nPENKQY, _ref4Uw5bTB, _ref5ftQaXuC, commentCS8CDlf, {from: accounts[5]});
		await contractvc9Tg4.setPeriod.call(newPeriodKh6ogy9, {from: accounts[3]});

		await expect(contractvc9Tg4.deposeBoss2.call(newBoss24BFxjT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrqkZTMr1 = accounts[2]
		const FOSTERAddrjwUe94M = accounts[1]
		const initialRateY0spU1L = BigInt("432")
		const initialPeriodS6dqWvB = BigInt("863")
		const initialOwnerh6Bsoaf = accounts[5]
		const contractwbgQxE2 = await Reseller.new(USDTAddrqkZTMr1, FOSTERAddrjwUe94M, initialRateY0spU1L, initialPeriodS6dqWvB, initialOwnerh6Bsoaf, {from: accounts[1]});
		const valueMB9LJ3o = BigInt("1496")
		const recipientRNgwRo7 = accounts[2]
		const ERC20Tokenkczb9MR = accounts[0]
		const accountKndGSrp = accounts[2]
		const newRateTzLUCm3 = BigInt("1822")
		const commentIyhseFf = "lch9EAJV8EX2NWUSBHFnp3kQBsXH1WWlLLlc06jOaT9jlyBRuPH6std81VPR"
		const _ref5FbfvDrb = accounts[4]
		const _ref4V9IEae5 = accounts[5]
		const _ref35wyIAS = accounts[4]
		const _ref2RlSE2X = accounts[3]
		const _ref1ZDb11CE = accounts[4]
		const valueOBgRmpF = BigInt("1823")
		await contractwbgQxE2.withdrawERC20.call(ERC20Tokenkczb9MR, recipientRNgwRo7, valueMB9LJ3o, {from: accounts[1]});
		const nullEkFTDEO = await contractwbgQxE2.balanceFOSTER.call(accountKndGSrp, {from: accounts[1]});
		await contractwbgQxE2.setRate.call(newRateTzLUCm3, {from: "0x0000000000000000000000000000000000000001"});
		await contractwbgQxE2.purchase.call(valueOBgRmpF, _ref1ZDb11CE, _ref2RlSE2X, _ref35wyIAS, _ref4V9IEae5, _ref5FbfvDrb, commentIyhseFf, {from: accounts[5]});

		await expect(contractwbgQxE2.withdrawERC20.call(ERC20Tokenkczb9MR, recipientRNgwRo7, valueMB9LJ3o, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHwIVv0L = accounts[0]
		const FOSTERAddrL1IQEje = accounts[4]
		const initialRateEasn1XE = BigInt("1936")
		const initialPeriodxH9UUic = BigInt("729")
		const initialOwnerOopVW14 = accounts[5]
		const contractbuQYwjZ = await Reseller.new(USDTAddrHwIVv0L, FOSTERAddrL1IQEje, initialRateEasn1XE, initialPeriodxH9UUic, initialOwnerOopVW14, {from: accounts[3]});
		const valuexEpLzC6 = BigInt("871")
		const newFeeTf7BUGw = BigInt("18")
		await contractbuQYwjZ.withdraw.call(valuexEpLzC6, {from: accounts[1]});
		await contractbuQYwjZ.setFee.call(newFeeTf7BUGw, {from: accounts[0]});

		await expect(contractbuQYwjZ.withdraw.call(valuexEpLzC6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrAEDDetr = accounts[2]
		const FOSTERAddrPpi5DN = accounts[1]
		const initialRatebvdFCEk = BigInt("432")
		const initialPeriodwpK5sL4 = BigInt("863")
		const initialOwnerKYRKhlr = accounts[5]
		const contractgMO5fgC = await Reseller.new(USDTAddrAEDDetr, FOSTERAddrPpi5DN, initialRatebvdFCEk, initialPeriodwpK5sL4, initialOwnerKYRKhlr, {from: accounts[1]});
		const newBoss17cUEcJ = accounts[5]
		const commentVrGvmDs = "lch9EAJV8EX2NWUSBHFnp3kQBsXH1WWlLLlc06jOaT9jlyBRuPH6std81VPR"
		const _ref5JQiNqci = accounts[5]
		const _ref4XzyxSe = accounts[5]
		const _ref3U9mZlbD = accounts[5]
		const _ref2Z28L9tc = accounts[3]
		const _ref1eYJ3fKO = accounts[4]
		const valueqggiwLI = BigInt("1823")
		await contractgMO5fgC.deposeBoss1.call(newBoss17cUEcJ, {from: accounts[2]});
		await contractgMO5fgC.purchase.call(valueqggiwLI, _ref1eYJ3fKO, _ref2Z28L9tc, _ref3U9mZlbD, _ref4XzyxSe, _ref5JQiNqci, commentVrGvmDs, {from: accounts[5]});

		await expect(contractgMO5fgC.deposeBoss1.call(newBoss17cUEcJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmkFnOWv = accounts[2]
		const FOSTERAddrAlnYa1E = accounts[1]
		const initialRateor14bPZ = BigInt("432")
		const initialPeriodjpvMEZc = BigInt("863")
		const initialOwnerLxKXV7y = accounts[5]
		const contractkrulGZ7 = await Reseller.new(USDTAddrmkFnOWv, FOSTERAddrAlnYa1E, initialRateor14bPZ, initialPeriodjpvMEZc, initialOwnerLxKXV7y, {from: accounts[1]});
		const newBoss3QwzVYWT = accounts[5]
		const commentyMgnfGx = "lch9EAJV8EX2NWUSBHFnp3kQBsXH1WWlLLlc06jOaT9jlyBRuPH6std81VPR"
		const _ref5wtnhgov = accounts[5]
		const _ref43HnaWc = accounts[5]
		const _ref3pQzl0Um = accounts[4]
		const _ref2zIzOSur = accounts[4]
		const _ref1rkrQ0Jw = accounts[4]
		const valuetOANXk = BigInt("1823")
		await contractkrulGZ7.deposeBoss3.call(newBoss3QwzVYWT, {from: accounts[2]});
		await contractkrulGZ7.purchase.call(valuetOANXk, _ref1rkrQ0Jw, _ref2zIzOSur, _ref3pQzl0Um, _ref43HnaWc, _ref5wtnhgov, commentyMgnfGx, {from: accounts[5]});

		await expect(contractkrulGZ7.deposeBoss3.call(newBoss3QwzVYWT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTUEaIPj = accounts[1]
		const FOSTERAddrJOyYEY = accounts[4]
		const initialRateHP8bfpo = BigInt("1670")
		const initialPeriodvUO7s2X = BigInt("751")
		const initialOwnervLCENYC = accounts[3]
		const contractv3wSvM = await Reseller.new(USDTAddrTUEaIPj, FOSTERAddrJOyYEY, initialRateHP8bfpo, initialPeriodvUO7s2X, initialOwnervLCENYC, {from: accounts[5]});
		const newBoss3yS01Zy = accounts[1]
		const accountqYw5na = "0x0000000000000000000000000000000000000001"
		const valueVZoTHzy = BigInt("266")
		const newFeeMwh7aq0 = BigInt("198")
		await contractv3wSvM.deposeBoss3.call(newBoss3yS01Zy, {from: accounts[3]});
		const nullPDwol5U = await contractv3wSvM.balanceUSDT.call(accountqYw5na, {from: accounts[4]});
		await contractv3wSvM.withdraw.call(valueVZoTHzy, {from: accounts[0]});
		await contractv3wSvM.setFee.call(newFeeMwh7aq0, {from: accounts[3]});

		await expect(contractv3wSvM.deposeBoss3.call(newBoss3yS01Zy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})