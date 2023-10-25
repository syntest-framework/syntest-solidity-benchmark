const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrH6WDl3 = accounts[2]
		const FOSTERAddrsxFDV3Y = accounts[5]
		const initialRateJvGZWtz = BigInt("650")
		const initialPeriodevnWdT = BigInt("457")
		const initialOwnerwovWOEj = accounts[0]
		const contractWtk7V2S = await Reseller.new(USDTAddrH6WDl3, FOSTERAddrsxFDV3Y, initialRateJvGZWtz, initialPeriodevnWdT, initialOwnerwovWOEj, {from: accounts[3]});
		const newBoss4FEi64o1 = accounts[1]
		const newBoss2VAjkI98 = accounts[3]
		const newMinimumIK9Bl3O = BigInt("299")
		const _periodY56MXh3 = BigInt("1335")
		const amountuU1m1i = BigInt("1188")
		const recipientY80rXFS = accounts[3]
		const newRateRvob3TN = BigInt("1561")
		const newBoss4uWOiaV = accounts[3]
		await contractWtk7V2S.deposeBoss4.call(newBoss4FEi64o1, {from: accounts[0]});
		await contractWtk7V2S.deposeBoss2.call(newBoss2VAjkI98, {from: accounts[2]});
		await contractWtk7V2S.setMinimum.call(newMinimumIK9Bl3O, {from: accounts[3]});
		await contractWtk7V2S.freezeAndTransfer.call(recipientY80rXFS, amountuU1m1i, _periodY56MXh3, {from: accounts[4]});
		await contractWtk7V2S.setRate.call(newRateRvob3TN, {from: accounts[0]});
		await contractWtk7V2S.deposeBoss4.call(newBoss4uWOiaV, {from: accounts[2]});

		await expect(contractWtk7V2S.deposeBoss4.call(newBoss4FEi64o1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrwunMOQ = accounts[2]
		const FOSTERAddrpAn64Px = accounts[0]
		const initialRateZ4NXQgg = BigInt("1588")
		const initialPeriodZQDViE = BigInt("82")
		const initialOwnerSuIG45d = accounts[0]
		const contractmCTzlN5 = await Reseller.new(USDTAddrwunMOQ, FOSTERAddrpAn64Px, initialRateZ4NXQgg, initialPeriodZQDViE, initialOwnerSuIG45d, {from: accounts[0]});
		const accountonAlNP = accounts[3]
		const newMinimumQhCW8Jg = BigInt("796")
		const commentbAMOgYz = "zlHOKMpk5pPqTs11F1Ez3xJOcgaXTrwOAKkli1DVhHRJYyaYoth953FPRlpanitHEahi8ftsYwsualmLGFOW"
		const _ref5zwBS4m3 = accounts[1]
		const _ref4mRSHd5a = accounts[0]
		const _ref3QjIDFXb = accounts[5]
		const _ref2FE6FsSa = accounts[3]
		const _ref1vKocfRQ = accounts[1]
		const valueVWQGAzg = BigInt("469")
		const newPeriodanQKD6 = BigInt("661")
		const nullF27D3Pi = await contractmCTzlN5.balanceUSDT.call(accountonAlNP, {from: accounts[0]});
		await contractmCTzlN5.setMinimum.call(newMinimumQhCW8Jg, {from: accounts[2]});
		await contractmCTzlN5.purchase.call(valueVWQGAzg, _ref1vKocfRQ, _ref2FE6FsSa, _ref3QjIDFXb, _ref4mRSHd5a, _ref5zwBS4m3, commentbAMOgYz, {from: accounts[2]});
		await contractmCTzlN5.setPeriod.call(newPeriodanQKD6, {from: accounts[2]});
		await contractmCTzlN5.switchState.call({from: accounts[2]});

		await expect(contractmCTzlN5.balanceUSDT.call(accountonAlNP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrvlUsfs6 = accounts[3]
		const FOSTERAddrYLirijw = accounts[4]
		const initialRateXYrwoHy = BigInt("1476")
		const initialPeriodGOnGhBK = BigInt("2016")
		const initialOwnerLbxwB8c = accounts[3]
		const contractwbHENnQ = await Reseller.new(USDTAddrvlUsfs6, FOSTERAddrYLirijw, initialRateXYrwoHy, initialPeriodGOnGhBK, initialOwnerLbxwB8c, {from: accounts[0]});
		const level5j4L1orP = BigInt("127")
		const level4HBFgVHP = BigInt("30")
		const level3xNzmvE = BigInt("228")
		const level2gkgRjIv = BigInt("68")
		const level1J18lCu9 = BigInt("201")
		const accountUnFlT7b = accounts[2]
		const newFeeuYX7MrS = BigInt("114")
		const newBoss3W1mAWZB = accounts[1]
		await contractwbHENnQ.setRefBonus.call(level1J18lCu9, level2gkgRjIv, level3xNzmvE, level4HBFgVHP, level5j4L1orP, {from: accounts[3]});
		const nullabIMH2M = await contractwbHENnQ.allowanceFOSTER.call(accountUnFlT7b, {from: accounts[0]});
		await contractwbHENnQ.switchState.call({from: accounts[3]});
		await contractwbHENnQ.setFee.call(newFeeuYX7MrS, {from: accounts[3]});
		await contractwbHENnQ.deposeBoss3.call(newBoss3W1mAWZB, {from: accounts[4]});

		await expect(contractwbHENnQ.setRefBonus.call(level1J18lCu9, level2gkgRjIv, level3xNzmvE, level4HBFgVHP, level5j4L1orP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrsJdbAe9 = accounts[3]
		const FOSTERAddrAUSimU = accounts[5]
		const initialRateqIiyF6 = BigInt("1979")
		const initialPeriodQR13LKQ = BigInt("1509")
		const initialOwnernnUCnu = accounts[4]
		const contractym8tGQS = await Reseller.new(USDTAddrsJdbAe9, FOSTERAddrAUSimU, initialRateqIiyF6, initialPeriodQR13LKQ, initialOwnernnUCnu, {from: accounts[4]});
		const commentQg74X7C = "y3Rj5sgNwWmiOIzDeTmbytnqADXcL7SVt49LnE87t5kss8FTlFtfxc"
		const _ref5ULpWZjU = accounts[0]
		const _ref4A2MjkJq = accounts[3]
		const _ref3zWgR8Kx = accounts[1]
		const _ref2FVeeLrZ = accounts[1]
		const _ref1yARVqoY = accounts[3]
		const valueeHfRDZJ = BigInt("1763")
		const newFeehZKZkDC = BigInt("49")
		const accountmyPQv98 = accounts[0]
		await contractym8tGQS.purchase.call(valueeHfRDZJ, _ref1yARVqoY, _ref2FVeeLrZ, _ref3zWgR8Kx, _ref4A2MjkJq, _ref5ULpWZjU, commentQg74X7C, {from: accounts[0]});
		await contractym8tGQS.setFee.call(newFeehZKZkDC, {from: accounts[0]});
		const null56HG2u = await contractym8tGQS.allowanceFOSTER.call(accountmyPQv98, {from: accounts[3]});

		await expect(contractym8tGQS.purchase.call(valueeHfRDZJ, _ref1yARVqoY, _ref2FVeeLrZ, _ref3zWgR8Kx, _ref4A2MjkJq, _ref5ULpWZjU, commentQg74X7C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrIh6nDuK = accounts[2]
		const FOSTERAddraS7nJU2 = accounts[0]
		const initialRateSmujfps = BigInt("1259")
		const initialPeriode7jNx0 = BigInt("816")
		const initialOwnerBSgJMsA = accounts[3]
		const contractD0HNvg = await Reseller.new(USDTAddrIh6nDuK, FOSTERAddraS7nJU2, initialRateSmujfps, initialPeriode7jNx0, initialOwnerBSgJMsA, {from: accounts[1]});
		const _ref5iviaTxO = accounts[4]
		const _ref4NZQma2L = accounts[1]
		const _ref34ESnGw = accounts[4]
		const _ref2tle0fD = accounts[5]
		const _ref1M2mkz9t = accounts[1]
		const valueHHG84DY = BigInt("1478")
		const level5oTzPrtP = BigInt("73")
		const level4k2kS2Xu = BigInt("156")
		const level3BHtgza = BigInt("227")
		const level2cQocwMl = BigInt("247")
		const level18vsYYG = BigInt("206")
		const valueHT3k9nt = BigInt("1806")
		const recipientiDeYuSV = accounts[1]
		const ERC20Tokenb6zmzSu = accounts[4]
		const newRateM4qrevF = BigInt("122")
		const accountPhUx66 = accounts[0]
		await contractD0HNvg.buy.call(valueHHG84DY, _ref1M2mkz9t, _ref2tle0fD, _ref34ESnGw, _ref4NZQma2L, _ref5iviaTxO, {from: accounts[1]});
		await contractD0HNvg.setRefBonus.call(level18vsYYG, level2cQocwMl, level3BHtgza, level4k2kS2Xu, level5oTzPrtP, {from: accounts[2]});
		await contractD0HNvg.withdrawERC20.call(ERC20Tokenb6zmzSu, recipientiDeYuSV, valueHT3k9nt, {from: accounts[0]});
		await contractD0HNvg.setRate.call(newRateM4qrevF, {from: accounts[1]});
		const nullFqlS1kC = await contractD0HNvg.allowanceUSDT.call(accountPhUx66, {from: accounts[3]});

		await expect(contractD0HNvg.buy.call(valueHHG84DY, _ref1M2mkz9t, _ref2tle0fD, _ref34ESnGw, _ref4NZQma2L, _ref5iviaTxO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCEAox3O = accounts[5]
		const FOSTERAddrLNqPAuc = accounts[3]
		const initialRateCAjRRKg = BigInt("28")
		const initialPeriodSklIdQN = BigInt("835")
		const initialOwnerxGzlEG4 = accounts[2]
		const contractWE9rvwu = await Reseller.new(USDTAddrCEAox3O, FOSTERAddrLNqPAuc, initialRateCAjRRKg, initialPeriodSklIdQN, initialOwnerxGzlEG4, {from: accounts[2]});
		const valuerN6hvI7 = BigInt("914")
		const recipientKZWOCSi = accounts[5]
		const ERC20TokenFFpELzp = accounts[0]
		const _ref5HAHgzBa = accounts[4]
		const _ref4Djz38TL = accounts[3]
		const _ref3TyFZwdD = accounts[0]
		const _ref2jRn1nhz = accounts[2]
		const _ref1hp1nzoT = accounts[2]
		const valuei62Izq = BigInt("290")
		const level5mlgcEg = BigInt("28")
		const level4LyO5AZL = BigInt("18")
		const level3wiQhvEK = BigInt("57")
		const level2OKzGOTT = BigInt("243")
		const level1cyI1Wm7 = BigInt("7")
		const newRateuezq4Kk = BigInt("854")
		await contractWE9rvwu.withdrawERC20.call(ERC20TokenFFpELzp, recipientKZWOCSi, valuerN6hvI7, {from: "0x0000000000000000000000000000000000000001"});
		await contractWE9rvwu.buy.call(valuei62Izq, _ref1hp1nzoT, _ref2jRn1nhz, _ref3TyFZwdD, _ref4Djz38TL, _ref5HAHgzBa, {from: accounts[4]});
		await contractWE9rvwu.setRefBonus.call(level1cyI1Wm7, level2OKzGOTT, level3wiQhvEK, level4LyO5AZL, level5mlgcEg, {from: accounts[1]});
		await contractWE9rvwu.setRate.call(newRateuezq4Kk, {from: accounts[3]});

		await expect(contractWE9rvwu.withdrawERC20.call(ERC20TokenFFpELzp, recipientKZWOCSi, valuerN6hvI7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrV66ZpgU = accounts[0]
		const FOSTERAddrrlxacZ8 = "0x0000000000000000000000000000000000000001"
		const initialRateCFYc2S = BigInt("1409")
		const initialPeriodSj38rnZ = BigInt("1175")
		const initialOwnerNa2PWXA = accounts[2]
		const contractmNbdDkd = await Reseller.new(USDTAddrV66ZpgU, FOSTERAddrrlxacZ8, initialRateCFYc2S, initialPeriodSj38rnZ, initialOwnerNa2PWXA, {from: accounts[2]});
		const newFeebmKeHkq = BigInt("106")
		const level5qTztJ1w = BigInt("123")
		const level4VMPZAnQ = BigInt("212")
		const level3tDgB36p = BigInt("228")
		const level2ZZyoaQZ = BigInt("218")
		const level1pzlUFhl = BigInt("120")
		const newBoss4CyWvp3f = accounts[3]
		const valuesVo3nkM = BigInt("494")
		const accountJuEVgiC = accounts[2]
		await contractmNbdDkd.setFee.call(newFeebmKeHkq, {from: accounts[2]});
		await contractmNbdDkd.setRefBonus.call(level1pzlUFhl, level2ZZyoaQZ, level3tDgB36p, level4VMPZAnQ, level5qTztJ1w, {from: accounts[2]});
		await contractmNbdDkd.deposeBoss4.call(newBoss4CyWvp3f, {from: accounts[2]});
		await contractmNbdDkd.withdraw.call(valuesVo3nkM, {from: accounts[5]});
		const nullIiNMo2 = await contractmNbdDkd.balanceFOSTER.call(accountJuEVgiC, {from: accounts[3]});

		await expect(contractmNbdDkd.setFee.call(newFeebmKeHkq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddri4odsqh = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrynWvDEB = accounts[3]
		const initialRateciRwXQH = BigInt("304")
		const initialPeriodf8MoA3N = BigInt("244")
		const initialOwneryAsEnK = accounts[2]
		const contractigpfzhU = await Reseller.new(USDTAddri4odsqh, FOSTERAddrynWvDEB, initialRateciRwXQH, initialPeriodf8MoA3N, initialOwneryAsEnK, {from: accounts[4]});
		const amountDUxFxtw = BigInt("1905")
		const nulljHYoi2O = await contractigpfzhU.getEstimation.call(amountDUxFxtw, {from: accounts[5]});

		assert.equal(nulljHYoi2O, 579120)
	});

	it('test for Reseller', async () => {
		const USDTAddrqS9ZV0V = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrHSyy7lq = accounts[3]
		const initialRateb5JZM1e = BigInt("304")
		const initialPeriodSsjSWiq = BigInt("244")
		const initialOwnerBuooAkl = accounts[2]
		const contractLUV21fx = await Reseller.new(USDTAddrqS9ZV0V, FOSTERAddrHSyy7lq, initialRateb5JZM1e, initialPeriodSsjSWiq, initialOwnerBuooAkl, {from: accounts[4]});
		const newBoss3qvS8Lij = accounts[1]
		const commente8eVnPZ = "q1LhyongAF2UC3CwdjEaEzm1f3eeNxgTl6HdjQD0pMJV9QQk8Xec1EjcsBa658BvSnVahFKNdpv9oxC4rOvg0qmKdqwFN"
		const _ref5fdEJAkg = accounts[1]
		const _ref4FgEJJ08 = accounts[2]
		const _ref3z8UqxGk = accounts[2]
		const _ref2nrR3ajj = accounts[4]
		const _ref1b9lFMY = accounts[1]
		const valuewcHozVB = BigInt("1298")
		await contractLUV21fx.deposeBoss3.call(newBoss3qvS8Lij, {from: accounts[4]});
		await contractLUV21fx.switchState.call({from: "0x0000000000000000000000000000000000000001"});
		await contractLUV21fx.purchase.call(valuewcHozVB, _ref1b9lFMY, _ref2nrR3ajj, _ref3z8UqxGk, _ref4FgEJJ08, _ref5fdEJAkg, commente8eVnPZ, {from: "0x0000000000000000000000000000000000000001"});
		await contractLUV21fx.switchState.call({from: accounts[1]});

		await expect(contractLUV21fx.deposeBoss3.call(newBoss3qvS8Lij, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlGFjeq = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrkd83iSB = accounts[3]
		const initialRatebNSjD6B = BigInt("304")
		const initialPeriodwMDj0LS = BigInt("244")
		const initialOwnerib6RU7u = accounts[2]
		const contract6A1Kpx = await Reseller.new(USDTAddrlGFjeq, FOSTERAddrkd83iSB, initialRatebNSjD6B, initialPeriodwMDj0LS, initialOwnerib6RU7u, {from: accounts[4]});
		const newMinimumEVN8zgI = BigInt("940")
		const newFeeOKGdoy1 = BigInt("243")
		const value8eWPVb = BigInt("475")
		const commentrmJnZfb = "q1LhyongAF2UC3CwdjEaEzm1f3eeNxgTl6HdjQD0pMJV9QQk8Xec1EjcsBa658BvSnVahFKNdpv9oxC4rOvg0qmKdqwFN"
		const _ref5okPN6zg = accounts[1]
		const _ref4gYdE2o = accounts[3]
		const _ref3Pjaer64 = accounts[2]
		const _ref2A9sGSPv = accounts[4]
		const _ref1kEmJC2 = accounts[0]
		const valueJNlkXbc = BigInt("1298")
		await contract6A1Kpx.setMinimum.call(newMinimumEVN8zgI, {from: "0x0000000000000000000000000000000000000001"});
		await contract6A1Kpx.setFee.call(newFeeOKGdoy1, {from: accounts[5]});
		await contract6A1Kpx.withdraw.call(value8eWPVb, {from: accounts[3]});
		await contract6A1Kpx.purchase.call(valueJNlkXbc, _ref1kEmJC2, _ref2A9sGSPv, _ref3Pjaer64, _ref4gYdE2o, _ref5okPN6zg, commentrmJnZfb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contract6A1Kpx.setMinimum.call(newMinimumEVN8zgI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCdY9hJB = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrpT7SIw = accounts[3]
		const initialRateDFn3L4T = BigInt("304")
		const initialPeriodmsYZzvF = BigInt("244")
		const initialOwnerWb6rXC = accounts[2]
		const contractL4fsAqk = await Reseller.new(USDTAddrCdY9hJB, FOSTERAddrpT7SIw, initialRateDFn3L4T, initialPeriodmsYZzvF, initialOwnerWb6rXC, {from: accounts[4]});
		const _periodx086dh = BigInt("1673")
		const amounteeVF24b = BigInt("1936")
		const recipientextqTSL = accounts[0]
		const commentKfKMCri = "q1LhyongAF2UC3CwdjEaEzm1f3eeNxgTl6HdjQD0pMJV9QQk8Xec1EjcsBa658BvSnVahFKNdpv9oxC4rOvg0qmKdqwFN"
		const _ref5QcQf1bt = accounts[1]
		const _ref4wOCjXNB = accounts[2]
		const _ref3pVkB11b = accounts[2]
		const _ref2JpNSHiY = accounts[4]
		const _ref1gUK3INZ = accounts[0]
		const valueYoPNaGU = BigInt("1298")
		await contractL4fsAqk.freezeAndTransfer.call(recipientextqTSL, amounteeVF24b, _periodx086dh, {from: accounts[2]});
		await contractL4fsAqk.purchase.call(valueYoPNaGU, _ref1gUK3INZ, _ref2JpNSHiY, _ref3pVkB11b, _ref4wOCjXNB, _ref5QcQf1bt, commentKfKMCri, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractL4fsAqk.freezeAndTransfer.call(recipientextqTSL, amounteeVF24b, _periodx086dh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrj0t5qDs = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrrjjxrD9 = accounts[3]
		const initialRateCOUM93i = BigInt("304")
		const initialPeriodqEDfjr0 = BigInt("244")
		const initialOwnerTvlKJ6s = accounts[2]
		const contractE22pyLv = await Reseller.new(USDTAddrj0t5qDs, FOSTERAddrrjjxrD9, initialRateCOUM93i, initialPeriodqEDfjr0, initialOwnerTvlKJ6s, {from: accounts[4]});
		const newRatex6VGMvy = BigInt("971")
		const amountZj2XXF = BigInt("1808")
		const accountSxR6oZW = accounts[2]
		const commentlb1Govu = "q1LhyongAF2UC3CwdjEaEzm1f3eeNxgTl6HdjQD0pMJV9QQk8Xec1EjcsBa658BvSnVahFKNdpv9oxC4rOvg0qmKdqwFN"
		const _ref5jyF55TX = accounts[2]
		const _ref4BfTkrok = accounts[2]
		const _ref3kKSzBX3 = accounts[2]
		const _ref2UyQVbab = accounts[4]
		const _ref1BS3WAq3 = accounts[0]
		const valueKx7fuwE = BigInt("1298")
		await contractE22pyLv.setRate.call(newRatex6VGMvy, {from: accounts[0]});
		const nullwe0uiXg = await contractE22pyLv.getEstimation.call(amountZj2XXF, {from: accounts[3]});
		const nulle9qhfCU = await contractE22pyLv.balanceUSDT.call(accountSxR6oZW, {from: accounts[2]});
		await contractE22pyLv.purchase.call(valueKx7fuwE, _ref1BS3WAq3, _ref2UyQVbab, _ref3kKSzBX3, _ref4BfTkrok, _ref5jyF55TX, commentlb1Govu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractE22pyLv.setRate.call(newRatex6VGMvy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrBGlaQ3 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrHELuhol = accounts[3]
		const initialRateCHzu6o = BigInt("304")
		const initialPeriodVyf3Khz = BigInt("244")
		const initialOwnerk4UGCQn = accounts[2]
		const contractyACdHt = await Reseller.new(USDTAddrBGlaQ3, FOSTERAddrHELuhol, initialRateCHzu6o, initialPeriodVyf3Khz, initialOwnerk4UGCQn, {from: accounts[4]});
		const accountyknoKF = accounts[3]
		const commentNGQijz7 = "q1LhyongAF2UC3CbwdjEaEzm1f3eeNxgTl6HdjQD0pMJV9QQk8Xec1EjcsBa658BvSnVahFKNdpv9oxC4rOvg0qmKdqwFN"
		const _ref5XpsyUja = accounts[1]
		const _ref4TJEgzFV = accounts[2]
		const _ref3BI76UUC = accounts[2]
		const _ref2Qk2KxMg = accounts[4]
		const _ref1RbCt7X9 = accounts[0]
		const value0Tjurk = BigInt("1298")
		const nullncgIEdR = await contractyACdHt.balanceFOSTER.call(accountyknoKF, {from: accounts[0]});
		await contractyACdHt.purchase.call(value0Tjurk, _ref1RbCt7X9, _ref2Qk2KxMg, _ref3BI76UUC, _ref4TJEgzFV, _ref5XpsyUja, commentNGQijz7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractyACdHt.balanceFOSTER.call(accountyknoKF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrxKRAOip = "0x0000000000000000000000000000000000000001"
		const FOSTERAddroO47lx8 = accounts[3]
		const initialRateAc0iQV7 = BigInt("304")
		const initialPeriodjRKyJjh = BigInt("244")
		const initialOwnerpnv9I73 = accounts[2]
		const contractl1tn5h = await Reseller.new(USDTAddrxKRAOip, FOSTERAddroO47lx8, initialRateAc0iQV7, initialPeriodjRKyJjh, initialOwnerpnv9I73, {from: accounts[4]});
		const accountR4o6AvI = accounts[3]
		const commentzld7gpP = "q1LhyongAF2UC3CwdjEaEzm1f3eeNxgTl6HdjQD0pMJV9QQk8Xec1EjcsBa658BvSnVahFKNdpv9oxC4rOvg0qmKdqwFN"
		const _ref5XRQmFJC = accounts[1]
		const _ref4mwmXVRK = accounts[2]
		const _ref3rJXtQnN = accounts[2]
		const _ref2iaRou3 = accounts[4]
		const _ref10UUqyi = accounts[0]
		const valueoFbm9p3 = BigInt("1298")
		await contractl1tn5h.switchState.call({from: accounts[0]});
		const nulliG7WLGd = await contractl1tn5h.allowanceFOSTER.call(accountR4o6AvI, {from: accounts[0]});
		await contractl1tn5h.purchase.call(valueoFbm9p3, _ref10UUqyi, _ref2iaRou3, _ref3rJXtQnN, _ref4mwmXVRK, _ref5XRQmFJC, commentzld7gpP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractl1tn5h.switchState.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdRSHjIt = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrvWHbH6B = accounts[3]
		const initialRateNqOiOw = BigInt("304")
		const initialPeriodSNqE88F = BigInt("244")
		const initialOwnerwVNDEPr = accounts[2]
		const contractinR3NEV = await Reseller.new(USDTAddrdRSHjIt, FOSTERAddrvWHbH6B, initialRateNqOiOw, initialPeriodSNqE88F, initialOwnerwVNDEPr, {from: accounts[4]});
		const newPeriodvzG37Kq = BigInt("1570")
		const commentqf8RU0L = "q1LhyongAF2UC3CwdjEaEzm1f3eeNxgTl6HdjQD0pMJV9QQk8Xec1EjcsBa658BvSnVahFKNdpv9oxC4rOvg0qmKdqwFN"
		const _ref53eaWYr = accounts[1]
		const _ref4saIc7AV = accounts[2]
		const _ref3K4xutvn = accounts[2]
		const _ref2wDgaPb7 = accounts[4]
		const _ref1P8Lr8qb = accounts[1]
		const valueLycm8XG = BigInt("1298")
		await contractinR3NEV.setPeriod.call(newPeriodvzG37Kq, {from: accounts[0]});
		await contractinR3NEV.purchase.call(valueLycm8XG, _ref1P8Lr8qb, _ref2wDgaPb7, _ref3K4xutvn, _ref4saIc7AV, _ref53eaWYr, commentqf8RU0L, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractinR3NEV.setPeriod.call(newPeriodvzG37Kq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGxlunzV = accounts[3]
		const FOSTERAddrCK8HEAC = accounts[1]
		const initialRatebj0ujUw = BigInt("1373")
		const initialPeriodcXR2FEb = BigInt("678")
		const initialOwneryerwvTs = accounts[2]
		const contractCTrxzaL = await Reseller.new(USDTAddrGxlunzV, FOSTERAddrCK8HEAC, initialRatebj0ujUw, initialPeriodcXR2FEb, initialOwneryerwvTs, {from: accounts[0]});
		const newBoss1BwlEvK2 = accounts[2]
		const level5HY0H49 = BigInt("148")
		const level4AjgPN2R = BigInt("168")
		const level317W46C = BigInt("110")
		const level2PmNX7Ks = BigInt("23")
		const level1jHaqMfF = BigInt("22")
		await contractCTrxzaL.deposeBoss1.call(newBoss1BwlEvK2, {from: accounts[4]});
		await contractCTrxzaL.setRefBonus.call(level1jHaqMfF, level2PmNX7Ks, level317W46C, level4AjgPN2R, level5HY0H49, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractCTrxzaL.deposeBoss1.call(newBoss1BwlEvK2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrRN2cKez = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrcsPV7XY = accounts[3]
		const initialRateLT4rGTz = BigInt("304")
		const initialPeriodDAEKpsZ = BigInt("244")
		const initialOwnerrK48H5F = accounts[2]
		const contract8yhEgp = await Reseller.new(USDTAddrRN2cKez, FOSTERAddrcsPV7XY, initialRateLT4rGTz, initialPeriodDAEKpsZ, initialOwnerrK48H5F, {from: accounts[4]});
		const accountYMWocfh = accounts[0]
		const newBoss1Ynnpni = accounts[4]
		const commentOcpDohb = "q1LhyongAF2UC3CwdjEaEzm1f3eeNxgTl6HdjQD0pMJV9QQk8Xec1EjcsBa658BvSnVahFKNdpv9oxC4rOvg0qmKdqwFN"
		const _ref5reQwLy = accounts[1]
		const _ref4McVkrAU = accounts[2]
		const _ref3tMZfTFU = accounts[2]
		const _ref2rtpisY8 = accounts[4]
		const _ref1lHFP45h = accounts[1]
		const valuedBnuilr = BigInt("1298")
		const nullONH7PxQ = await contract8yhEgp.allowanceUSDT.call(accountYMWocfh, {from: accounts[2]});
		await contract8yhEgp.deposeBoss1.call(newBoss1Ynnpni, {from: accounts[0]});
		await contract8yhEgp.purchase.call(valuedBnuilr, _ref1lHFP45h, _ref2rtpisY8, _ref3tMZfTFU, _ref4McVkrAU, _ref5reQwLy, commentOcpDohb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contract8yhEgp.allowanceUSDT.call(accountYMWocfh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNXjq0fN = accounts[2]
		const FOSTERAddrkiJxWL = accounts[1]
		const initialRateJZIOMl = BigInt("837")
		const initialPeriodFrZG0Pw = BigInt("1874")
		const initialOwnerlWmnDRh = accounts[4]
		const contractoG5I0L1 = await Reseller.new(USDTAddrNXjq0fN, FOSTERAddrkiJxWL, initialRateJZIOMl, initialPeriodFrZG0Pw, initialOwnerlWmnDRh, {from: "0x0000000000000000000000000000000000000001"});
		const newRate5rFVXU = BigInt("426")
		const level5t5ALrom = BigInt("62")
		const level4jLv6rpQ = BigInt("39")
		const level3dTWZfN4 = BigInt("58")
		const level26DAm69 = BigInt("159")
		const level1rBUBGSu = BigInt("235")
		const valueiQrzqyh = BigInt("1249")
		const recipientCmAkCk = accounts[4]
		const ERC20Token58Oecf = accounts[4]
		await contractoG5I0L1.setRate.call(newRate5rFVXU, {from: accounts[4]});
		await contractoG5I0L1.setRefBonus.call(level1rBUBGSu, level26DAm69, level3dTWZfN4, level4jLv6rpQ, level5t5ALrom, {from: accounts[2]});
		await contractoG5I0L1.withdrawERC20.call(ERC20Token58Oecf, recipientCmAkCk, valueiQrzqyh, {from: accounts[1]});
	});
})