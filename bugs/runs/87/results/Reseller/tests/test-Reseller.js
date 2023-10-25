const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrMxCrrWS = accounts[3]
		const FOSTERAddrGUisbt = accounts[1]
		const initialRateiZZcD7g = BigInt("150")
		const initialPeriodnuhXsmn = BigInt("1643")
		const initialOwnerloc7kIz = accounts[2]
		const contractGMHs7xn = await Reseller.new(USDTAddrMxCrrWS, FOSTERAddrGUisbt, initialRateiZZcD7g, initialPeriodnuhXsmn, initialOwnerloc7kIz, {from: accounts[1]});
		const level5C5fFvgD = BigInt("6")
		const level4m8ZOGgI = BigInt("84")
		const level3EqFQCp9 = BigInt("100")
		const level2COmskV = BigInt("191")
		const level1otBvdHS = BigInt("158")
		const accountl1v8S2s = accounts[2]
		const newBoss2RiiRhSf = "0x0000000000000000000000000000000000000001"
		const newFee4jI1AH = BigInt("163")
		await contractGMHs7xn.setRefBonus.call(level1otBvdHS, level2COmskV, level3EqFQCp9, level4m8ZOGgI, level5C5fFvgD, {from: accounts[1]});
		const nullpFp1zdp = await contractGMHs7xn.allowanceUSDT.call(accountl1v8S2s, {from: accounts[0]});
		await contractGMHs7xn.deposeBoss2.call(newBoss2RiiRhSf, {from: accounts[1]});
		await contractGMHs7xn.setFee.call(newFee4jI1AH, {from: accounts[1]});

		await expect(contractGMHs7xn.setRefBonus.call(level1otBvdHS, level2COmskV, level3EqFQCp9, level4m8ZOGgI, level5C5fFvgD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbsyVxkO = accounts[5]
		const FOSTERAddrXRquz3h = accounts[3]
		const initialRatexfJNPOu = BigInt("1900")
		const initialPeriodrh7FmRO = BigInt("484")
		const initialOwnerg3071U5 = "0x0000000000000000000000000000000000000001"
		const contractk11Thsr = await Reseller.new(USDTAddrbsyVxkO, FOSTERAddrXRquz3h, initialRatexfJNPOu, initialPeriodrh7FmRO, initialOwnerg3071U5, {from: "0x0000000000000000000000000000000000000001"});
		const newBoss3psjbLX = accounts[1]
		const newRatezmM72ha = BigInt("1433")
		await contractk11Thsr.deposeBoss3.call(newBoss3psjbLX, {from: accounts[0]});
		await contractk11Thsr.setRate.call(newRatezmM72ha, {from: accounts[5]});
	});

	it('test for Reseller', async () => {
		const USDTAddrLaWE06V = accounts[5]
		const FOSTERAddrCH7IIhh = accounts[5]
		const initialRatenx6dMGi = BigInt("1804")
		const initialPeriodLlNmMSM = BigInt("543")
		const initialOwnerdxAIPcK = accounts[4]
		const contractHhzBvZ7 = await Reseller.new(USDTAddrLaWE06V, FOSTERAddrCH7IIhh, initialRatenx6dMGi, initialPeriodLlNmMSM, initialOwnerdxAIPcK, {from: accounts[4]});
		const accountmP4WcBo = accounts[2]
		const valueXKSuCkN = BigInt("2020")
		const accountqS2fAAw = accounts[3]
		const nullipVW39 = await contractHhzBvZ7.balanceUSDT.call(accountmP4WcBo, {from: accounts[3]});
		await contractHhzBvZ7.withdraw.call(valueXKSuCkN, {from: "0x0000000000000000000000000000000000000001"});
		const nullPi5TWwI = await contractHhzBvZ7.allowanceFOSTER.call(accountqS2fAAw, {from: accounts[4]});

		await expect(contractHhzBvZ7.balanceUSDT.call(accountmP4WcBo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrFTaN4OD = accounts[2]
		const FOSTERAddrpRdoROO = "0x0000000000000000000000000000000000000001"
		const initialRatevVl8fa = BigInt("1197")
		const initialPeriodacRwTo = BigInt("787")
		const initialOwneryDEIiHW = accounts[1]
		const contractjFLXVcM = await Reseller.new(USDTAddrFTaN4OD, FOSTERAddrpRdoROO, initialRatevVl8fa, initialPeriodacRwTo, initialOwneryDEIiHW, {from: accounts[0]});
		const newFeeglO7dNt = BigInt("221")
		const accountN8Yq1N = accounts[0]
		const newRatekAvDQh = BigInt("1072")
		const newPeriodBRC8hz1 = BigInt("612")
		await contractjFLXVcM.setFee.call(newFeeglO7dNt, {from: accounts[1]});
		const nulliA1PyjG = await contractjFLXVcM.allowanceUSDT.call(accountN8Yq1N, {from: accounts[2]});
		await contractjFLXVcM.setRate.call(newRatekAvDQh, {from: accounts[4]});
		await contractjFLXVcM.setPeriod.call(newPeriodBRC8hz1, {from: accounts[1]});

		await expect(contractjFLXVcM.setFee.call(newFeeglO7dNt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDwvpBQN = accounts[3]
		const FOSTERAddrkqNeGMN = accounts[4]
		const initialRateZzfH6A7 = BigInt("1730")
		const initialPeriodqfkgNWT = BigInt("956")
		const initialOwnerYSPVR40 = accounts[5]
		const contractuZ3TGVY = await Reseller.new(USDTAddrDwvpBQN, FOSTERAddrkqNeGMN, initialRateZzfH6A7, initialPeriodqfkgNWT, initialOwnerYSPVR40, {from: accounts[5]});
		const _periodipLBXK = BigInt("1570")
		const amountEok4Fzg = BigInt("355")
		const recipientjxoYFou = accounts[1]
		const commentDUK6gvO = "VVy8LTkb5vHKtroxHnK3xFjPVW2SkzdI31"
		const _ref5Z3A3fEV = accounts[3]
		const _ref4TwlKgMh = accounts[1]
		const _ref3x1Wz5xK = accounts[3]
		const _ref2uNLkYfL = accounts[2]
		const _ref1FbXhSCb = accounts[1]
		const values1OaJ2o = BigInt("359")
		const newBoss4BJ6pVO5 = accounts[3]
		const amountfFoS2JQ = BigInt("1680")
		await contractuZ3TGVY.freezeAndTransfer.call(recipientjxoYFou, amountEok4Fzg, _periodipLBXK, {from: accounts[1]});
		await contractuZ3TGVY.purchase.call(values1OaJ2o, _ref1FbXhSCb, _ref2uNLkYfL, _ref3x1Wz5xK, _ref4TwlKgMh, _ref5Z3A3fEV, commentDUK6gvO, {from: accounts[3]});
		await contractuZ3TGVY.deposeBoss4.call(newBoss4BJ6pVO5, {from: accounts[4]});
		const nullMSFHkEQ = await contractuZ3TGVY.getEstimation.call(amountfFoS2JQ, {from: accounts[3]});

		await expect(contractuZ3TGVY.freezeAndTransfer.call(recipientjxoYFou, amountEok4Fzg, _periodipLBXK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrqWPEzQB = accounts[2]
		const FOSTERAddraXuvO5q = accounts[0]
		const initialRategKxMuEB = BigInt("884")
		const initialPeriod3751Jp = BigInt("1850")
		const initialOwnerh2bomaa = accounts[1]
		const contractrbzKtkK = await Reseller.new(USDTAddrqWPEzQB, FOSTERAddraXuvO5q, initialRategKxMuEB, initialPeriod3751Jp, initialOwnerh2bomaa, {from: accounts[5]});
		const valueMxjmE3 = BigInt("1174")
		const newBoss467UsJt = accounts[3]
		const valuerH7SMzO = BigInt("1288")
		const newBoss196S8lb = accounts[2]
		await contractrbzKtkK.withdraw.call(valueMxjmE3, {from: "0x0000000000000000000000000000000000000001"});
		await contractrbzKtkK.deposeBoss4.call(newBoss467UsJt, {from: accounts[3]});
		await contractrbzKtkK.withdraw.call(valuerH7SMzO, {from: accounts[4]});
		await contractrbzKtkK.switchState.call({from: accounts[5]});
		await contractrbzKtkK.deposeBoss1.call(newBoss196S8lb, {from: accounts[0]});
		await contractrbzKtkK.switchState.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractrbzKtkK.withdraw.call(valueMxjmE3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkYWHiPR = accounts[2]
		const FOSTERAddrkKgnyhc = accounts[4]
		const initialRateODxrJzs = BigInt("94")
		const initialPeriodImNXRuM = BigInt("739")
		const initialOwnerIIp96B0 = accounts[0]
		const contractqrvBWuV = await Reseller.new(USDTAddrkYWHiPR, FOSTERAddrkKgnyhc, initialRateODxrJzs, initialPeriodImNXRuM, initialOwnerIIp96B0, {from: accounts[4]});
		const valueFMsXrE = BigInt("1073")
		const recipientCwUz2bM = accounts[2]
		const ERC20TokenNSiT6z = accounts[1]
		const _periodZI1Ki3G = BigInt("455")
		const amountS0DnjK = BigInt("375")
		const recipientyT9BC1 = accounts[3]
		await contractqrvBWuV.withdrawERC20.call(ERC20TokenNSiT6z, recipientCwUz2bM, valueFMsXrE, {from: accounts[2]});
		await contractqrvBWuV.switchState.call({from: accounts[4]});
		await contractqrvBWuV.freezeAndTransfer.call(recipientyT9BC1, amountS0DnjK, _periodZI1Ki3G, {from: accounts[3]});

		await expect(contractqrvBWuV.withdrawERC20.call(ERC20TokenNSiT6z, recipientCwUz2bM, valueFMsXrE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZQOk6Ui = accounts[0]
		const FOSTERAddrW7oHPca = accounts[0]
		const initialRateusGjHgF = BigInt("928")
		const initialPeriodCCokEBV = BigInt("715")
		const initialOwnersOsElO3 = accounts[2]
		const contractrvgANWc = await Reseller.new(USDTAddrZQOk6Ui, FOSTERAddrW7oHPca, initialRateusGjHgF, initialPeriodCCokEBV, initialOwnersOsElO3, {from: accounts[4]});
		const newBoss4R8ToEWq = accounts[1]
		const newBoss1y3DWYqg = accounts[2]
		await contractrvgANWc.deposeBoss4.call(newBoss4R8ToEWq, {from: accounts[0]});
		await contractrvgANWc.deposeBoss1.call(newBoss1y3DWYqg, {from: accounts[5]});

		await expect(contractrvgANWc.deposeBoss4.call(newBoss4R8ToEWq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTjk0IPB = accounts[0]
		const FOSTERAddrUbHugLY = accounts[0]
		const initialRateSuRUWV = BigInt("1431")
		const initialPeriodREOhKX = BigInt("164")
		const initialOwnerp7648n = accounts[4]
		const contractCAd8wQc = await Reseller.new(USDTAddrTjk0IPB, FOSTERAddrUbHugLY, initialRateSuRUWV, initialPeriodREOhKX, initialOwnerp7648n, {from: accounts[0]});
		const accountrQ2tCpJ = "0x0000000000000000000000000000000000000001"
		const newBoss3rOpeOjS = accounts[1]
		const accountBYOEDIN = accounts[4]
		const commentjP2aKVq = "qBN23tHRwfVGW9lErLQ8KZQXDnNOSsAPqrU2KEniv"
		const _ref5WpR9UnA = accounts[5]
		const _ref4zvGSWVE = "0x0000000000000000000000000000000000000001"
		const _ref3h6Qxwdh = accounts[2]
		const _ref2NVqEIes = accounts[4]
		const _ref1tJD3XP2 = accounts[4]
		const valuePwQtLpA = BigInt("28")
		const nullmfpTQWG = await contractCAd8wQc.allowanceFOSTER.call(accountrQ2tCpJ, {from: accounts[3]});
		await contractCAd8wQc.deposeBoss3.call(newBoss3rOpeOjS, {from: accounts[3]});
		const nullbDjP5vr = await contractCAd8wQc.allowanceUSDT.call(accountBYOEDIN, {from: accounts[1]});
		await contractCAd8wQc.purchase.call(valuePwQtLpA, _ref1tJD3XP2, _ref2NVqEIes, _ref3h6Qxwdh, _ref4zvGSWVE, _ref5WpR9UnA, commentjP2aKVq, {from: accounts[2]});

		await expect(contractCAd8wQc.allowanceFOSTER.call(accountrQ2tCpJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZ9OhU6V = "0x0000000000000000000000000000000000000001"
		const FOSTERAddry9GZDyr = accounts[3]
		const initialRateUODGpB0 = BigInt("1152")
		const initialPeriodh9v6RFx = BigInt("1802")
		const initialOwnercO6N9k7 = "0x0000000000000000000000000000000000000001"
		const contractWsBwFQk = await Reseller.new(USDTAddrZ9OhU6V, FOSTERAddry9GZDyr, initialRateUODGpB0, initialPeriodh9v6RFx, initialOwnercO6N9k7, {from: accounts[0]});
		const newBoss1nxeEZZ = accounts[3]
		const accountWmGJxsY = accounts[4]
		const newRaterx20kTw = BigInt("1579")
		await contractWsBwFQk.deposeBoss1.call(newBoss1nxeEZZ, {from: accounts[2]});
		const nulltSjHes = await contractWsBwFQk.allowanceFOSTER.call(accountWmGJxsY, {from: accounts[1]});
		await contractWsBwFQk.setRate.call(newRaterx20kTw, {from: accounts[2]});

		await expect(contractWsBwFQk.deposeBoss1.call(newBoss1nxeEZZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtiw9df5 = accounts[3]
		const FOSTERAddrMT7EODi = "0x0000000000000000000000000000000000000001"
		const initialRatexIB8C9d = BigInt("1469")
		const initialPeriodkLf8bK = BigInt("134")
		const initialOwnerllZ7Yf1 = accounts[3]
		const contractAtHN2e = await Reseller.new(USDTAddrtiw9df5, FOSTERAddrMT7EODi, initialRatexIB8C9d, initialPeriodkLf8bK, initialOwnerllZ7Yf1, {from: accounts[4]});
		const _periodWjBvqYa = BigInt("247")
		const amountS5T8A1g = BigInt("1887")
		const recipientGsaDe6N = accounts[4]
		const newBoss2rXRcmK4 = accounts[2]
		const newPeriodRGREbLQ = BigInt("445")
		const newBoss2fmYUJap = "0x0000000000000000000000000000000000000001"
		await contractAtHN2e.freezeAndTransfer.call(recipientGsaDe6N, amountS5T8A1g, _periodWjBvqYa, {from: accounts[3]});
		await contractAtHN2e.deposeBoss2.call(newBoss2rXRcmK4, {from: accounts[1]});
		await contractAtHN2e.setPeriod.call(newPeriodRGREbLQ, {from: accounts[2]});
		await contractAtHN2e.deposeBoss2.call(newBoss2fmYUJap, {from: accounts[2]});

		await expect(contractAtHN2e.freezeAndTransfer.call(recipientGsaDe6N, amountS5T8A1g, _periodWjBvqYa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr1PU9vO = accounts[2]
		const FOSTERAddrQF2brAO = accounts[0]
		const initialRateHAKgk8j = BigInt("288")
		const initialPeriodQbrmi7k = BigInt("339")
		const initialOwnerM9ReOzA = accounts[2]
		const contractWBjatQ6 = await Reseller.new(USDTAddr1PU9vO, FOSTERAddrQF2brAO, initialRateHAKgk8j, initialPeriodQbrmi7k, initialOwnerM9ReOzA, {from: accounts[4]});
		const newBoss3m99v3ny = accounts[4]
		const newBoss2meca8qV = accounts[3]
		const newFeeKpO1PAA = BigInt("245")
		const accountONraacX = accounts[4]
		const newBoss2HslBPT = accounts[4]
		await contractWBjatQ6.deposeBoss3.call(newBoss3m99v3ny, {from: accounts[3]});
		await contractWBjatQ6.deposeBoss2.call(newBoss2meca8qV, {from: accounts[3]});
		await contractWBjatQ6.setFee.call(newFeeKpO1PAA, {from: "0x0000000000000000000000000000000000000001"});
		const nulls9Fa3Lo = await contractWBjatQ6.allowanceFOSTER.call(accountONraacX, {from: accounts[3]});
		await contractWBjatQ6.deposeBoss2.call(newBoss2HslBPT, {from: accounts[3]});

		await expect(contractWBjatQ6.deposeBoss3.call(newBoss3m99v3ny, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrt4tc2en = accounts[2]
		const FOSTERAddreSavGO8 = accounts[0]
		const initialRateBRcJvD = BigInt("884")
		const initialPeriodShwJ1Zp = BigInt("1850")
		const initialOwnerFFKsBgI = accounts[1]
		const contractRNaNoBG = await Reseller.new(USDTAddrt4tc2en, FOSTERAddreSavGO8, initialRateBRcJvD, initialPeriodShwJ1Zp, initialOwnerFFKsBgI, {from: accounts[5]});
		const newPeriodOjHVBlN = BigInt("768")
		const valueobfyPW = BigInt("1174")
		const newBoss4PdXjrCB = accounts[3]
		const newBoss1EaMsYbd = accounts[2]
		await contractRNaNoBG.setPeriod.call(newPeriodOjHVBlN, {from: accounts[0]});
		await contractRNaNoBG.withdraw.call(valueobfyPW, {from: "0x0000000000000000000000000000000000000001"});
		await contractRNaNoBG.deposeBoss4.call(newBoss4PdXjrCB, {from: accounts[3]});
		await contractRNaNoBG.deposeBoss1.call(newBoss1EaMsYbd, {from: accounts[0]});
		await contractRNaNoBG.switchState.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractRNaNoBG.setPeriod.call(newPeriodOjHVBlN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrl7qBrEx = accounts[2]
		const FOSTERAddrljAMfg2 = accounts[0]
		const initialRateWs1jxSx = BigInt("884")
		const initialPeriodkaDc8x4 = BigInt("1850")
		const initialOwnermFR3Hr9 = accounts[1]
		const contractzgnIjyQ = await Reseller.new(USDTAddrl7qBrEx, FOSTERAddrljAMfg2, initialRateWs1jxSx, initialPeriodkaDc8x4, initialOwnermFR3Hr9, {from: accounts[5]});
		const newRateWhtkaj = BigInt("1959")
		const newFeex5MCOJb = BigInt("246")
		const valuekhMTsG1 = BigInt("1174")
		const accountgXWo1US = "0x0000000000000000000000000000000000000001"
		const newBoss4tBPrPZw = accounts[3]
		const newBoss1HEgZBxL = accounts[2]
		await contractzgnIjyQ.setRate.call(newRateWhtkaj, {from: "0x0000000000000000000000000000000000000001"});
		await contractzgnIjyQ.setFee.call(newFeex5MCOJb, {from: accounts[4]});
		await contractzgnIjyQ.withdraw.call(valuekhMTsG1, {from: "0x0000000000000000000000000000000000000001"});
		const nullmBaWIRu = await contractzgnIjyQ.allowanceUSDT.call(accountgXWo1US, {from: accounts[2]});
		await contractzgnIjyQ.deposeBoss4.call(newBoss4tBPrPZw, {from: accounts[3]});
		await contractzgnIjyQ.deposeBoss1.call(newBoss1HEgZBxL, {from: accounts[0]});
		await contractzgnIjyQ.switchState.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractzgnIjyQ.setRate.call(newRateWhtkaj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNa3iqn = accounts[2]
		const FOSTERAddrwe7Phn = accounts[0]
		const initialRateeOsJJn2 = BigInt("884")
		const initialPeriodUZMJE6 = BigInt("1850")
		const initialOwnerrvPKnSF = accounts[1]
		const contractgokIdh4 = await Reseller.new(USDTAddrNa3iqn, FOSTERAddrwe7Phn, initialRateeOsJJn2, initialPeriodUZMJE6, initialOwnerrvPKnSF, {from: accounts[5]});
		const newMinimumaOoiepH = BigInt("1676")
		const valueTtPw5QK = BigInt("1174")
		const newBoss4XDGOLZO = accounts[1]
		const newBoss4FT5onYc = accounts[3]
		await contractgokIdh4.setMinimum.call(newMinimumaOoiepH, {from: accounts[2]});
		await contractgokIdh4.withdraw.call(valueTtPw5QK, {from: "0x0000000000000000000000000000000000000001"});
		await contractgokIdh4.deposeBoss4.call(newBoss4XDGOLZO, {from: accounts[3]});
		await contractgokIdh4.deposeBoss4.call(newBoss4FT5onYc, {from: accounts[3]});
		await contractgokIdh4.switchState.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractgokIdh4.setMinimum.call(newMinimumaOoiepH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGzCKt7s = accounts[2]
		const FOSTERAddrkkv1mbs = accounts[0]
		const initialRatee5LLoqN = BigInt("884")
		const initialPeriodemsB6oN = BigInt("1850")
		const initialOwnertejKzof = accounts[1]
		const contracts1a8uoq = await Reseller.new(USDTAddrGzCKt7s, FOSTERAddrkkv1mbs, initialRatee5LLoqN, initialPeriodemsB6oN, initialOwnertejKzof, {from: accounts[5]});
		const amountYErtA7u = BigInt("474")
		const valuelvg8PLv = BigInt("1174")
		const accountToQvKDd = accounts[2]
		const null1eOAbD = await contracts1a8uoq.getEstimation.call(amountYErtA7u, {from: accounts[4]});
		await contracts1a8uoq.withdraw.call(valuelvg8PLv, {from: "0x0000000000000000000000000000000000000001"});
		const nullrIY1pkq = await contracts1a8uoq.balanceUSDT.call(accountToQvKDd, {from: "0x0000000000000000000000000000000000000001"});
		await contracts1a8uoq.switchState.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(null1eOAbD, 419016)
		await expect(contracts1a8uoq.withdraw.call(valuelvg8PLv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrKqqqrRa = accounts[2]
		const FOSTERAddrsOxTiKc = accounts[0]
		const initialRaterUUh2ox = BigInt("884")
		const initialPeriodKE7cEAD = BigInt("1850")
		const initialOwnerSiH0GC = accounts[1]
		const contractAXaovMS = await Reseller.new(USDTAddrKqqqrRa, FOSTERAddrsOxTiKc, initialRaterUUh2ox, initialPeriodKE7cEAD, initialOwnerSiH0GC, {from: accounts[5]});
		const newMinimumvjnh8rH = BigInt("713")
		const valueJ2NX3wj = BigInt("435")
		const accountOKi8Ru6 = accounts[5]
		await contractAXaovMS.setMinimum.call(newMinimumvjnh8rH, {from: accounts[1]});
		await contractAXaovMS.withdraw.call(valueJ2NX3wj, {from: "0x0000000000000000000000000000000000000001"});
		const nullPvpaUHt = await contractAXaovMS.balanceUSDT.call(accountOKi8Ru6, {from: accounts[4]});
		await contractAXaovMS.switchState.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractAXaovMS.setMinimum.call(newMinimumvjnh8rH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVQEz28V = accounts[2]
		const FOSTERAddrTqZtU4 = accounts[0]
		const initialRateCCng6D0 = BigInt("884")
		const initialPeriodNLIb3dS = BigInt("1850")
		const initialOwnerv4HElWw = accounts[1]
		const contractf0E9aGU = await Reseller.new(USDTAddrVQEz28V, FOSTERAddrTqZtU4, initialRateCCng6D0, initialPeriodNLIb3dS, initialOwnerv4HElWw, {from: accounts[5]});
		const _periodfkq5iA = BigInt("662")
		const amountpPRpSTZ = BigInt("17")
		const recipientjYPFYFj = "0x0000000000000000000000000000000000000001"
		await contractf0E9aGU.switchState.call({from: "0x0000000000000000000000000000000000000001"});
		await contractf0E9aGU.freezeAndTransfer.call(recipientjYPFYFj, amountpPRpSTZ, _periodfkq5iA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractf0E9aGU.switchState.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrn12rAng = accounts[2]
		const FOSTERAddrrTpuZr = accounts[0]
		const initialRateEyQtCAB = BigInt("878")
		const initialPeriodsEGJBFo = BigInt("109")
		const initialOwnerEYjOqrp = accounts[2]
		const contractrjCNVp5 = await Reseller.new(USDTAddrn12rAng, FOSTERAddrrTpuZr, initialRateEyQtCAB, initialPeriodsEGJBFo, initialOwnerEYjOqrp, {from: accounts[2]});
		const accountuBT6aCd = accounts[2]
		const accountBPuHvK2 = accounts[3]
		const nullIIEJVRT = await contractrjCNVp5.balanceFOSTER.call(accountuBT6aCd, {from: accounts[2]});
		const nullABMwNpL = await contractrjCNVp5.allowanceUSDT.call(accountBPuHvK2, {from: accounts[5]});

		await expect(contractrjCNVp5.balanceFOSTER.call(accountuBT6aCd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddreibnmNL = accounts[3]
		const FOSTERAddrdfmgFRf = accounts[2]
		const initialRateNqG4qw = BigInt("560")
		const initialPeriodOmP8G62 = BigInt("774")
		const initialOwnerLm9HYif = accounts[2]
		const contractg8VIxVf = await Reseller.new(USDTAddreibnmNL, FOSTERAddrdfmgFRf, initialRateNqG4qw, initialPeriodOmP8G62, initialOwnerLm9HYif, {from: accounts[4]});
		const newBoss4y0mhrGZ = accounts[4]
		const commenthsqJas9 = "XpQl"
		const _ref5kOqUJsG = accounts[4]
		const _ref4vmR5SiE = accounts[5]
		const _ref3PMocOoJ = "0x0000000000000000000000000000000000000001"
		const _ref2diClogs = "0x0000000000000000000000000000000000000001"
		const _ref1oioRURD = accounts[4]
		const valueVRhJ2mG = BigInt("618")
		const accountcubuq3S = accounts[0]
		await contractg8VIxVf.deposeBoss4.call(newBoss4y0mhrGZ, {from: accounts[2]});
		await contractg8VIxVf.purchase.call(valueVRhJ2mG, _ref1oioRURD, _ref2diClogs, _ref3PMocOoJ, _ref4vmR5SiE, _ref5kOqUJsG, commenthsqJas9, {from: accounts[0]});
		const nullMVV9nkD = await contractg8VIxVf.allowanceUSDT.call(accountcubuq3S, {from: accounts[1]});

		await expect(contractg8VIxVf.deposeBoss4.call(newBoss4y0mhrGZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNfgxsdp = accounts[2]
		const FOSTERAddrpi4rrT = accounts[0]
		const initialRatelK7doII = BigInt("884")
		const initialPeriodHjJpTQ = BigInt("1850")
		const initialOwnerViLEzgd = accounts[1]
		const contractD0f2Q56 = await Reseller.new(USDTAddrNfgxsdp, FOSTERAddrpi4rrT, initialRatelK7doII, initialPeriodHjJpTQ, initialOwnerViLEzgd, {from: accounts[5]});
		const newBoss2hbvAqR2 = accounts[2]
		const accountq92TgCU = accounts[5]
		const valuejzKxD30 = BigInt("1173")
		await contractD0f2Q56.deposeBoss2.call(newBoss2hbvAqR2, {from: accounts[2]});
		const nullFcBg6dT = await contractD0f2Q56.allowanceUSDT.call(accountq92TgCU, {from: accounts[3]});
		await contractD0f2Q56.withdraw.call(valuejzKxD30, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractD0f2Q56.deposeBoss2.call(newBoss2hbvAqR2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlWSEQx1 = accounts[2]
		const FOSTERAddrqeksToY = accounts[0]
		const initialRatenjb7b7n = BigInt("884")
		const initialPeriod4uKvrU = BigInt("1850")
		const initialOwnerYfk3Yc0 = accounts[1]
		const contractFbGqZ2Q = await Reseller.new(USDTAddrlWSEQx1, FOSTERAddrqeksToY, initialRatenjb7b7n, initialPeriod4uKvrU, initialOwnerYfk3Yc0, {from: accounts[5]});
		const newRateXzKpRp0 = BigInt("1388")
		const valueNnDVSJo = BigInt("1174")
		await contractFbGqZ2Q.setRate.call(newRateXzKpRp0, {from: accounts[1]});
		await contractFbGqZ2Q.withdraw.call(valueNnDVSJo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractFbGqZ2Q.setRate.call(newRateXzKpRp0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTOnXiFm = accounts[4]
		const FOSTERAddrUGE71w2 = accounts[3]
		const initialRatewDjFJpA = BigInt("1708")
		const initialPeriodUZyANO = BigInt("568")
		const initialOwnerzn5HIFo = accounts[1]
		const contractnrqmXH5 = await Reseller.new(USDTAddrTOnXiFm, FOSTERAddrUGE71w2, initialRatewDjFJpA, initialPeriodUZyANO, initialOwnerzn5HIFo, {from: accounts[2]});
		const commentB0Pum0F = "CWGQPAEZ"
		const _ref5ycA2UyE = "0x0000000000000000000000000000000000000001"
		const _ref4BSrScxp = accounts[2]
		const _ref3CUIgJi = "0x0000000000000000000000000000000000000001"
		const _ref20IvMTG = accounts[2]
		const _ref15QxU7L = accounts[2]
		const valueTgyq9NN = BigInt("159")
		const newPeriodzqGaX9 = BigInt("1103")
		await contractnrqmXH5.purchase.call(valueTgyq9NN, _ref15QxU7L, _ref20IvMTG, _ref3CUIgJi, _ref4BSrScxp, _ref5ycA2UyE, commentB0Pum0F, {from: accounts[1]});
		await contractnrqmXH5.setPeriod.call(newPeriodzqGaX9, {from: accounts[1]});

		await expect(contractnrqmXH5.purchase.call(valueTgyq9NN, _ref15QxU7L, _ref20IvMTG, _ref3CUIgJi, _ref4BSrScxp, _ref5ycA2UyE, commentB0Pum0F, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrve5PK7A = accounts[1]
		const FOSTERAddrAlvAGTK = accounts[3]
		const initialRateBGi3FK = BigInt("1246")
		const initialPeriodJX9hhmu = BigInt("1340")
		const initialOwnerWmqjoCA = accounts[3]
		const contractF6YNwj8 = await Reseller.new(USDTAddrve5PK7A, FOSTERAddrAlvAGTK, initialRateBGi3FK, initialPeriodJX9hhmu, initialOwnerWmqjoCA, {from: accounts[4]});
		const newBoss3SKj11X6 = accounts[0]
		const accountKm46IO = accounts[4]
		const newBoss2JJUdC5C = accounts[4]
		await contractF6YNwj8.deposeBoss3.call(newBoss3SKj11X6, {from: accounts[3]});
		const nullHnCBhRM = await contractF6YNwj8.allowanceFOSTER.call(accountKm46IO, {from: accounts[0]});
		await contractF6YNwj8.deposeBoss2.call(newBoss2JJUdC5C, {from: accounts[3]});

		await expect(contractF6YNwj8.deposeBoss3.call(newBoss3SKj11X6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVeDGH7s = accounts[4]
		const FOSTERAddrCiI6AbM = "0x0000000000000000000000000000000000000001"
		const initialRatejzPF7rD = BigInt("561")
		const initialPeriod3DKGy9 = BigInt("961")
		const initialOwnerw171Bko = accounts[4]
		const contractPBUvcXM = await Reseller.new(USDTAddrVeDGH7s, FOSTERAddrCiI6AbM, initialRatejzPF7rD, initialPeriod3DKGy9, initialOwnerw171Bko, {from: accounts[2]});
		const _ref5zA4Sefd = accounts[0]
		const _ref4rKv8wH3 = "0x0000000000000000000000000000000000000001"
		const _ref3QBt9dbt = accounts[4]
		const _ref2e7NE8a = accounts[4]
		const _ref1RcuMGjK = accounts[5]
		const valueoaehir0 = BigInt("1328")
		const _periodPhdqsyk = BigInt("5")
		const amountRiDcFKw = BigInt("1421")
		const recipientVb7BslU = accounts[4]
		const accountRrYbK0p = accounts[1]
		const valueYkSElic = BigInt("1283")
		const recipientp4AcV1R = accounts[0]
		const ERC20TokenwkZviN3 = "0x0000000000000000000000000000000000000001"
		const accountfBfgJ9b = accounts[1]
		await contractPBUvcXM.buy.call(valueoaehir0, _ref1RcuMGjK, _ref2e7NE8a, _ref3QBt9dbt, _ref4rKv8wH3, _ref5zA4Sefd, {from: accounts[1]});
		await contractPBUvcXM.freezeAndTransfer.call(recipientVb7BslU, amountRiDcFKw, _periodPhdqsyk, {from: accounts[0]});
		const nullrpzk8F = await contractPBUvcXM.balanceFOSTER.call(accountRrYbK0p, {from: "0x0000000000000000000000000000000000000001"});
		await contractPBUvcXM.withdrawERC20.call(ERC20TokenwkZviN3, recipientp4AcV1R, valueYkSElic, {from: "0x0000000000000000000000000000000000000001"});
		const nullwRZNwaQ = await contractPBUvcXM.allowanceFOSTER.call(accountfBfgJ9b, {from: accounts[2]});

		await expect(contractPBUvcXM.buy.call(valueoaehir0, _ref1RcuMGjK, _ref2e7NE8a, _ref3QBt9dbt, _ref4rKv8wH3, _ref5zA4Sefd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrj9WDDUA = accounts[2]
		const FOSTERAddrbu72Cgo = accounts[0]
		const initialRateUYY6bT7 = BigInt("884")
		const initialPeriodF0ZNlVL = BigInt("1850")
		const initialOwnerBunxpcq = accounts[1]
		const contractsHFxDBB = await Reseller.new(USDTAddrj9WDDUA, FOSTERAddrbu72Cgo, initialRateUYY6bT7, initialPeriodF0ZNlVL, initialOwnerBunxpcq, {from: accounts[5]});
		const level5at4Vxur = BigInt("124")
		const level4nlZgXn3 = BigInt("227")
		const level3UlUm4kg = BigInt("169")
		const level2YQlAAdh = BigInt("72")
		const level1VCJwidJ = BigInt("42")
		const valueXz3cXeT = BigInt("1149")
		const valueUubyc12 = BigInt("1244")
		await contractsHFxDBB.setRefBonus.call(level1VCJwidJ, level2YQlAAdh, level3UlUm4kg, level4nlZgXn3, level5at4Vxur, {from: accounts[1]});
		await contractsHFxDBB.withdraw.call(valueXz3cXeT, {from: "0x0000000000000000000000000000000000000001"});
		await contractsHFxDBB.withdraw.call(valueUubyc12, {from: accounts[2]});

		await expect(contractsHFxDBB.setRefBonus.call(level1VCJwidJ, level2YQlAAdh, level3UlUm4kg, level4nlZgXn3, level5at4Vxur, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})