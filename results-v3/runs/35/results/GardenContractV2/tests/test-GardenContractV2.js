const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addresssTBMz3l = accounts[3]
		const addressH4X8uIU = accounts[0]
		const addressgfppxVW = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addresssTBMz3l, addressH4X8uIU, addressgfppxVW, {from: accounts[4]});
		const uintSodK52D = BigInt("208")
		const stringhHjSIbM = "bbwbHJMnhiFhCjpGmEeDwFwebhsQF0I6GZYmeBtenIGCGschYoqYQpOerf2KFywcTlpxSh8uB3"
		const uintU0cKtjB = BigInt("23")
		await GardenContractV2Q688bkE.totalBedSupply.call(stringhHjSIbM, uintSodK52D, {from: accounts[1]});
		const uint256hTG6ysU = await GardenContractV2Q688bkE.getTotalrTLPHarvest.call(uintU0cKtjB, {from: accounts[1]});

		await expect(GardenContractV2Q688bkE.totalBedSupply.call(stringhHjSIbM, uintSodK52D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressT8ablOe = accounts[0]
		const addressfPJCg46 = accounts[3]
		const addressJWddw3L = accounts[0]
		const GardenContractV2E3aDVKw = await GardenContractV2.new(addressT8ablOe, addressfPJCg46, addressJWddw3L, {from: accounts[1]});
		const uintvObfHKd = BigInt("151")
		const uintiKySGdc = BigInt("127")
		const boolQULvrl1 = false
		const uintTgyXf4t = BigInt("144")
		const stringv7T6aLT = "VNm4xnNQ5qIlhglKuoClRqj1aNHyEq5XuwgHgh1vk8Ao2bpczhOWFW6e8AXuXA9uzdrQOgunrF5kGgjGG01sx0RPRf"
		const uintYY4SLyb = BigInt("745")
		const uintu1UII1T = BigInt("63")
		const stringCbrpf1K = "El77FPkXH"
		const uintMifySlP = BigInt("48")
		const uintiul2Ya = BigInt("70")
		const uint2562Qu08d = await GardenContractV2E3aDVKw.getTotalrTLPHarvest.call(uintvObfHKd, {from: accounts[5]});
		const uint256fCbqKG = await GardenContractV2E3aDVKw.getTotalrTLPHarvest.call(uintiKySGdc, {from: accounts[0]});
		const uint256sbhXrTh = await GardenContractV2E3aDVKw.plant.call(uintYY4SLyb, stringv7T6aLT, uintTgyXf4t, boolQULvrl1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QGmGtYC = await GardenContractV2E3aDVKw.timeUntilNextTLP.call(stringCbrpf1K, uintu1UII1T, {from: accounts[3]});
		const uint8HU2n5sc = await GardenContractV2E3aDVKw.zeroHoldings.call(uintiul2Ya, uintMifySlP, {from: accounts[2]});

		await expect(GardenContractV2E3aDVKw.getTotalrTLPHarvest.call(uintvObfHKd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstybV7iy = accounts[1]
		const addressfbubYAd = accounts[3]
		const addressbw7mIa3 = accounts[1]
		const GardenContractV2mK5a4eh = await GardenContractV2.new(addresstybV7iy, addressfbubYAd, addressbw7mIa3, {from: accounts[2]});
		const addressfcLQoJt = accounts[4]
		const uintbcEjk7T = BigInt("40")
		const stringRh6rIZh = "7F08PkL5W8rhBJWnMuSnjtiswaH5xkEHIQqFJeotGGz56e0e2Sbn2naQNKzFuD1yoEfjSxTBZvQNy"
		const uintys0Sfkr = BigInt("178")
		const stringEFiPXmF = "iwVJvs33k6OYP9ebGUULpyUpLOcOAVsa8dxvpPVUT5znS14TCyckxuJ5smxC7qKJYiWSj"
		const addressi9dKVOS = accounts[5]
		const uintRMzNWMs = BigInt("1832")
		const uintY6dWpim = BigInt("209")
		const uintudjbGPH = BigInt("194")
		const address5RqDCV = await GardenContractV2mK5a4eh.changeOwner.call(addressfcLQoJt, {from: accounts[3]});
		const uint256EjhS2YP = await GardenContractV2mK5a4eh.getTotalrTLPHarvest.call(uintbcEjk7T, {from: accounts[2]});
		const uint256UX6K4Y5 = await GardenContractV2mK5a4eh.totalGardenSupply.call(stringRh6rIZh, {from: accounts[2]});
		const stringXRwyZOC = await GardenContractV2mK5a4eh.harvest.call(stringEFiPXmF, uintys0Sfkr, {from: accounts[5]});
		const addressj7XDWX = await GardenContractV2mK5a4eh.changeBenefitiary.call(addressi9dKVOS, {from: accounts[5]});
		const uint8cUbch8 = await GardenContractV2mK5a4eh.operationBurnMint.call(uintudjbGPH, uintY6dWpim, uintRMzNWMs, {from: accounts[1]});

		await expect(GardenContractV2mK5a4eh.changeOwner.call(addressfcLQoJt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWIncZW = accounts[2]
		const addressztOAibe = accounts[4]
		const addressyMdLRI9 = accounts[0]
		const GardenContractV2yVCVIxA = await GardenContractV2.new(addressWIncZW, addressztOAibe, addressyMdLRI9, {from: "0x0000000000000000000000000000000000000001"});
		const uintzIA3A6s = BigInt("154")
		const uintv0GTBJ = BigInt("218")
		const uintuvtFepr = BigInt("100")
		const stringB15w3FH = "kM2zQ9ygyroeBHk3wiGWDMD7"
		const addressMFolZ4h = accounts[3]
		const uint8vwy05bg = await GardenContractV2yVCVIxA.zeroHoldings.call(uintv0GTBJ, uintzIA3A6s, {from: accounts[1]});
		const stringe4ze6ZZ = await GardenContractV2yVCVIxA.claimDecompose.call(stringB15w3FH, uintuvtFepr, {from: accounts[2]});
		const addressVvFKk55 = await GardenContractV2yVCVIxA.changeOwner.call(addressMFolZ4h, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressGbAHhh = accounts[3]
		const addressbdasRds = accounts[4]
		const addressQBPsxz2 = accounts[4]
		const GardenContractV2VXmgHo = await GardenContractV2.new(addressGbAHhh, addressbdasRds, addressQBPsxz2, {from: accounts[1]});
		const stringZ45zC6K = "NrXAKCyeWBm86DPuzTH2bZkwlezhmK6lLKRgverGW6sr5I3BmVCBMaUaJuiuOBQz5zhET"
		const addresshV8Ic8y = accounts[1]
		const addressuOiZig = accounts[1]
		const stringDq3fqjF = "Sq4Fafsth6Tj42hO0MK9d5EXPOtg4Jfx45mmLltV9Rey4stQJpRIe5fc6dWwtDSOu"
		const uintVOkzUnR = BigInt("195")
		const stringQcDR9WU = "uAh3aOhkXehSG3KdWMFPdx22RpVRSLEQvgvRHm"
		const uint256KK2OJ7Y = await GardenContractV2VXmgHo.balanceOf.call(addresshV8Ic8y, stringZ45zC6K, {from: accounts[1]});
		const addressh5IuX0O = await GardenContractV2VXmgHo.changeBenefitiary.call(addressuOiZig, {from: accounts[4]});
		const uint256IjCy275 = await GardenContractV2VXmgHo.totalTLPDecomposed.call(stringDq3fqjF, {from: accounts[2]});
		const uint256Yjbp9Xj = await GardenContractV2VXmgHo.timeUntilNextTLP.call(stringQcDR9WU, uintVOkzUnR, {from: accounts[1]});

		await expect(GardenContractV2VXmgHo.balanceOf.call(addresshV8Ic8y, stringZ45zC6K, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressj8wPG5 = accounts[3]
		const addressBkZxtYd = accounts[0]
		const addressSbi7HC4 = accounts[2]
		const GardenContractV2ztHG2j = await GardenContractV2.new(addressj8wPG5, addressBkZxtYd, addressSbi7HC4, {from: accounts[0]});
		const uintYKGmbC = BigInt("142")
		const stringARBdI7S = "vFPB7pp5TIg5LL6Xo"
		const uintFgUeKuk = BigInt("179")
		const uintskaF9Qy = BigInt("28")
		const addresslp1VI2h = accounts[0]
		const stringT8DDyw = "rh8EXlYjEEB68g7zk"
		const stringCG7ap6U = await GardenContractV2ztHG2j.claimDecompose.call(stringARBdI7S, uintYKGmbC, {from: accounts[2]});
		const uint8VGNbLv5 = await GardenContractV2ztHG2j.zeroHoldings.call(uintskaF9Qy, uintFgUeKuk, {from: accounts[1]});
		const addresseCavc07 = await GardenContractV2ztHG2j.renounceTokenOwner.call(addresslp1VI2h, {from: accounts[2]});
		const uint256N93ZuRx = await GardenContractV2ztHG2j.totalTLPDecomposed.call(stringT8DDyw, {from: accounts[1]});

		await expect(GardenContractV2ztHG2j.claimDecompose.call(stringARBdI7S, uintYKGmbC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressTTn0EuU = accounts[3]
		const addressoo1sbcC = accounts[5]
		const addressaYUjm31 = accounts[1]
		const GardenContractV2AocLTCq = await GardenContractV2.new(addressTTn0EuU, addressoo1sbcC, addressaYUjm31, {from: accounts[0]});
		const booldLTqWYs = false
		const uintm9rTQV0 = BigInt("227")
		const stringKBzQKxz = "mIBw1s2G4k1X1Xyj9ScnAov"
		const uintx22uqZD = BigInt("1642")
		const uintE0HJFy = BigInt("113")
		const stringDahYjV = "PcGaJ9HX2kNHJeBiiLJdHqjxp4dcHKVOIgsChUyq423UOc7MGjb99rNb72DiCHdL8vpFS13"
		const uintCTlbACi = BigInt("227")
		const stringi2qRqzk = "hKlCz"
		const addressjQPxPGv = accounts[5]
		const uint256j9eO951 = await GardenContractV2AocLTCq.plant.call(uintx22uqZD, stringKBzQKxz, uintm9rTQV0, booldLTqWYs, {from: accounts[5]});
		await GardenContractV2AocLTCq.totalBedSupply.call(stringDahYjV, uintE0HJFy, {from: accounts[2]});
		const stringK1na1Qm = await GardenContractV2AocLTCq.claimDecompose.call(stringi2qRqzk, uintCTlbACi, {from: accounts[1]});
		const addressfUiqsim = await GardenContractV2AocLTCq.renounceTokenOwner.call(addressjQPxPGv, {from: accounts[0]});

		await expect(GardenContractV2AocLTCq.plant.call(uintx22uqZD, stringKBzQKxz, uintm9rTQV0, booldLTqWYs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressr21qewx = accounts[3]
		const addressSVm28oV = accounts[0]
		const addressOzGAe4 = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addressr21qewx, addressSVm28oV, addressOzGAe4, {from: accounts[4]});
		const uintmsM8tGg = BigInt("15")
		const uintNl0z6RO = BigInt("144")
		const uintG5S2GrC = BigInt("227")
		const uintRxFIATR = BigInt("208")
		const stringhHjSIbM = "bbwbHJMnhiFhCjpGmEeDwFwebhsQF0I6GZYmeBtenIGCGschYoqYQpOerf2KFywcTlpxSh8uB3"
		const uintC0zAjWo = BigInt("195")
		const uint256bMd8VyG = await GardenContractV2Q688bkE.getTotalsTLPHarvest.call(uintmsM8tGg, {from: accounts[0]});
		const uint8PXJ5ZNo = await GardenContractV2Q688bkE.setTimeStamp.call(uintG5S2GrC, uintNl0z6RO, {from: accounts[5]});
		await GardenContractV2Q688bkE.totalBedSupply.call(stringhHjSIbM, uintRxFIATR, {from: accounts[1]});
		const uint256hTG6ysU = await GardenContractV2Q688bkE.getTotalrTLPHarvest.call(uintC0zAjWo, {from: accounts[1]});

		await expect(GardenContractV2Q688bkE.getTotalsTLPHarvest.call(uintmsM8tGg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstDP1SvD = accounts[3]
		const addressTjE4rdz = accounts[0]
		const addressnrWDv0 = accounts[2]
		const GardenContractV2ztHG2j = await GardenContractV2.new(addresstDP1SvD, addressTjE4rdz, addressnrWDv0, {from: accounts[0]});
		const uinthzE6dxt = BigInt("179")
		const uintIYeivV = BigInt("87")
		const uintU26Sz4c = BigInt("41")
		const uintLmA42wO = BigInt("29")
		const uintXe0k9wc = BigInt("30")
		const stringsxtSc1Q = "GM8aAUpVNLXpCdSZ9kcvYHsXvvLjhMYo0kpaEEUWywu6zen7NYDUrwSwgSDIgaH3UDzQZvwGOBcebcCRe"
		const uintEYKaU5s = BigInt("103")
		const stringh1II4Om = "LJeqLcLm9lQTjZ8"
		const uint8VGNbLv5 = await GardenContractV2ztHG2j.zeroHoldings.call(uintIYeivV, uinthzE6dxt, {from: accounts[1]});
		const uint8HNi1LIO = await GardenContractV2ztHG2j.setTimeStamp.call(uintLmA42wO, uintU26Sz4c, {from: accounts[2]});
		const stringzH9U7aN = await GardenContractV2ztHG2j.claimDecompose.call(stringsxtSc1Q, uintXe0k9wc, {from: accounts[1]});
		const stringRCQdtIO = await GardenContractV2ztHG2j.harvest.call(stringh1II4Om, uintEYKaU5s, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2ztHG2j.zeroHoldings.call(uintIYeivV, uinthzE6dxt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressRWigS3P = accounts[3]
		const addressoHktqZu = accounts[5]
		const addresssPMzoXv = accounts[1]
		const GardenContractV2AocLTCq = await GardenContractV2.new(addressRWigS3P, addressoHktqZu, addresssPMzoXv, {from: accounts[0]});
		const uintOyphr5 = BigInt("114")
		const stringLnQveew = "3BCvu7ti2dYrJuAhjTpP78opAbTVfz64OJybEw6cAJGano"
		const booldLTqWYs = false
		const uintTflFGHu = BigInt("227")
		const stringKBzQKxz = "mIBw1s2G4k1X1Xyj9ScnAov"
		const uint6NUHRh = BigInt("1642")
		const uintqQr5mN0 = BigInt("113")
		const stringDahYjV = "PcGaJ9HX2kNHJeBiiLJdHqjxp4dcHKVOIgsChUyq423UOc7MGjb99rNb72DiCHdL8vpFS13"
		const uintmrR1pyJ = BigInt("227")
		const stringi2qRqzk = "hKlCz"
		const addressF8SddQ = accounts[5]
		const stringdsK42mi = await GardenContractV2AocLTCq.harvest.call(stringLnQveew, uintOyphr5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256j9eO951 = await GardenContractV2AocLTCq.plant.call(uint6NUHRh, stringKBzQKxz, uintTflFGHu, booldLTqWYs, {from: accounts[5]});
		await GardenContractV2AocLTCq.totalBedSupply.call(stringDahYjV, uintqQr5mN0, {from: accounts[2]});
		const stringK1na1Qm = await GardenContractV2AocLTCq.claimDecompose.call(stringi2qRqzk, uintmrR1pyJ, {from: accounts[1]});
		const addressfUiqsim = await GardenContractV2AocLTCq.renounceTokenOwner.call(addressF8SddQ, {from: accounts[0]});

		await expect(GardenContractV2AocLTCq.harvest.call(stringLnQveew, uintOyphr5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressxGNwf0W = accounts[1]
		const addressYcWkMRK = "0x0000000000000000000000000000000000000001"
		const addressKRBfnq = "0x0000000000000000000000000000000000000001"
		const GardenContractV2EQPGLog = await GardenContractV2.new(addressxGNwf0W, addressYcWkMRK, addressKRBfnq, {from: accounts[5]});
		const stringCWXKhN = "LlzaLPwBeL8rP7C2OACMNya5FaNdsRWQzRlBBDHagnpofaw4zpaxUHvrwvjtW52b3GehfEFcmKKeYoWHMmMqw"
		const uintkHrXf5H = BigInt("94")
		const stringH5Uqyi0 = "d43UG3KodLV2ae0pcfXx8Q9q"
		const addressaLtE61j = accounts[5]
		const addressOTC3Whc = accounts[0]
		const addressGrrPhBr = accounts[2]
		const uintFcQucdz = BigInt("17")
		const stringyhrvpnf = "QR2ke7k3KsldYhthh7mmhdwlRXTkWkZzGv97Y6NGGqAUUzyzV4IsIXoiylDweMlvchc6y9MLAT3laCC1"
		const addressZRXiESM = accounts[5]
		const uintmNAvUae = BigInt("45")
		const stringkBzPBI6 = "Kqdl86YOAVkr294I5k65Bl4HtCIxyUQAfRGmW9g3FqQhPkydd3x0x3WWUWxeBqMqP5K8VjNS8gJu1nDDF"
		const uint256hbJTuNs = await GardenContractV2EQPGLog.totalTLPBurnt.call(stringCWXKhN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256B7sjuG = await GardenContractV2EQPGLog.getTotalrTLPHarvest.call(uintkHrXf5H, {from: accounts[3]});
		const uint256ahSiStS = await GardenContractV2EQPGLog.balanceOf.call(addressaLtE61j, stringH5Uqyi0, {from: accounts[3]});
		const addressoklxR4g = await GardenContractV2EQPGLog.changeBenefitiary.call(addressOTC3Whc, {from: accounts[1]});
		const addressXBh43BO = await GardenContractV2EQPGLog.changeBenefitiary.call(addressGrrPhBr, {from: accounts[2]});
		const stringca4bvuB = await GardenContractV2EQPGLog.claimDecompose.call(stringyhrvpnf, uintFcQucdz, {from: accounts[5]});
		const addressTK3BUev = await GardenContractV2EQPGLog.renounceTokenOwner.call(addressZRXiESM, {from: accounts[0]});
		const stringFfiLOn8 = await GardenContractV2EQPGLog.withdraw.call(stringkBzPBI6, uintmNAvUae, {from: accounts[3]});

		await expect(GardenContractV2EQPGLog.totalTLPBurnt.call(stringCWXKhN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressnILD2lr = accounts[3]
		const addressH7XMAML = accounts[0]
		const addressi4vZhQI = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addressnILD2lr, addressH7XMAML, addressi4vZhQI, {from: accounts[4]});
		const uintiQxp0qk = BigInt("388")
		const uintZlz4cA7 = BigInt("99")
		const stringh0w8aPe = "cUAzqE5Z3gEDXmQy5lTybeWEBKflcdzNy7qI82CNH4ncFpEyf3JQ"
		const uintfyd8glr = BigInt("16")
		const stringPSG0pG = await GardenContractV2Q688bkE.decompose.call(stringh0w8aPe, uintZlz4cA7, uintiQxp0qk, {from: accounts[1]});
		const uint256hTG6ysU = await GardenContractV2Q688bkE.getTotalrTLPHarvest.call(uintfyd8glr, {from: accounts[1]});

		await expect(GardenContractV2Q688bkE.decompose.call(stringh0w8aPe, uintZlz4cA7, uintiQxp0qk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressXAo8gux = accounts[3]
		const addressbWDuDex = accounts[0]
		const addressL3oAXP8 = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addressXAo8gux, addressbWDuDex, addressL3oAXP8, {from: accounts[4]});
		const uintZwGC7xr = BigInt("149")
		const stringTdzVRj = "wllzYKKg4uuPdfTKTFcgYKPUQ9kvLheFZR534yGdPW77pPY3hMSBa6iX"
		const uintlstKFi3 = BigInt("19")
		const uintMGY4xiI = BigInt("40")
		const stringBOXtYTD = "ynXjwGAASNrpEGA3D6bM4aQLGLsn1EVcHpSGKSmu6yxzaKC17wkNpcy7SF"
		const addressBuJcCUT = accounts[3]
		const uintaCdWhA = BigInt("1128")
		const uintqz5iNPO = BigInt("219")
		const stringXasVc6a = "hk6npkw4xpSZnvxEMgpbtmDTRM7pUWSTmBzpa4zmSbwZqHMp3OMYqNCi7S2V71KolF433sIQoBlAUQehfiDG"
		const addressSM5Rdmk = accounts[4]
		const stringqNG3xKj = "bRq5zRkBeV3iQKWdgxiBjFJixbPpFqX83qA56K5Yf17CMpmPLjHJV3AvmA2qVMgpNV"
		const addressnrWoT2 = accounts[1]
		const uint256GQHLN89 = await GardenContractV2Q688bkE.timeUntilNextTLP.call(stringTdzVRj, uintZwGC7xr, {from: accounts[3]});
		const uint256hTG6ysU = await GardenContractV2Q688bkE.getTotalrTLPHarvest.call(uintlstKFi3, {from: accounts[1]});
		const uint256wMgSRDm = await GardenContractV2Q688bkE.growthRemaining.call(addressBuJcCUT, stringBOXtYTD, uintMGY4xiI, {from: accounts[2]});
		const stringnfvr8Rd = await GardenContractV2Q688bkE.decompose.call(stringXasVc6a, uintqz5iNPO, uintaCdWhA, {from: accounts[4]});
		const addressWY5IBCh = await GardenContractV2Q688bkE.renounceTokenOwner.call(addressSM5Rdmk, {from: accounts[3]});
		const uint256h3aYvbY = await GardenContractV2Q688bkE.balanceOf.call(addressnrWoT2, stringqNG3xKj, {from: accounts[4]});

		await expect(GardenContractV2Q688bkE.timeUntilNextTLP.call(stringTdzVRj, uintZwGC7xr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressKm7cSkJ = accounts[3]
		const addressjfzlkT = accounts[0]
		const addressab5Ngrf = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addressKm7cSkJ, addressjfzlkT, addressab5Ngrf, {from: accounts[4]});
		const uintCHEthbr = BigInt("0")
		const uint256hTG6ysU = await GardenContractV2Q688bkE.getTotalrTLPHarvest.call(uintCHEthbr, {from: accounts[1]});

		await expect(GardenContractV2Q688bkE.getTotalrTLPHarvest.call(uintCHEthbr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressaafzG3T = accounts[3]
		const addressCnDj5yY = accounts[0]
		const addressalZw2nX = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addressaafzG3T, addressCnDj5yY, addressalZw2nX, {from: accounts[4]});
		const stringwWyYv2p = "mXhc2halGjp9rpp7Ihfjn1Ddt9L2kNfjkqYeJ"
		const addressdiassBg = accounts[4]
		const uintfq6aTT1 = BigInt("17")
		const uint256qwUJ9PT = await GardenContractV2Q688bkE.totalTLPGrowing.call(stringwWyYv2p, {from: accounts[4]});
		const addressNG9r19 = await GardenContractV2Q688bkE.changeOwner.call(addressdiassBg, {from: accounts[1]});
		const uint256hTG6ysU = await GardenContractV2Q688bkE.getTotalrTLPHarvest.call(uintfq6aTT1, {from: accounts[1]});

		await expect(GardenContractV2Q688bkE.totalTLPGrowing.call(stringwWyYv2p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswiLyfcH = accounts[3]
		const addresszkhYWlA = accounts[0]
		const addressGXTgNRL = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addresswiLyfcH, addresszkhYWlA, addressGXTgNRL, {from: accounts[4]});
		const stringeRxRGe = "iullSQ7Kunf4acZxn2wLolQe2TQpMBxbPv6PPlBKxW69veR1MSnuzrCtgX5n5cE7dJVJ6sRlotowtEBt5duXB"
		const boolNdynblE = true
		const uintwZ3Z9Wy = BigInt("162")
		const stringecCZ0sk = "btEAT4u7MAx9iRAqYYnZEEj47jI3n7RvBQLmbbuzosGW9ENzlVYWhtElosFutX1sUX"
		const uintWkUw6Z = BigInt("1374")
		const uintcbujeR6 = BigInt("14")
		const uint256dOql0ej = await GardenContractV2Q688bkE.totalTLPGrown.call(stringeRxRGe, {from: accounts[0]});
		const uint256nnUi2vN = await GardenContractV2Q688bkE.plant.call(uintWkUw6Z, stringecCZ0sk, uintwZ3Z9Wy, boolNdynblE, {from: accounts[4]});
		const uint256hTG6ysU = await GardenContractV2Q688bkE.getTotalrTLPHarvest.call(uintcbujeR6, {from: accounts[1]});

		await expect(GardenContractV2Q688bkE.totalTLPGrown.call(stringeRxRGe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressqMe7Ifw = accounts[3]
		const addressKpBw0QO = accounts[0]
		const addressNYC9rGX = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addressqMe7Ifw, addressKpBw0QO, addressNYC9rGX, {from: accounts[4]});
		const uinttI2p9nk = BigInt("165")
		const stringfiaJjNq = "iBhlg0fXuLu9li2HFUnQr5GOs91NZpGjhoaruPS9RwZMbZf4J7ya1njh4uxx7Sk8jWGAGsxv6BzTSB2fjH8weiWSjq"
		const uintdO71X4 = BigInt("48")
		const stringEH3RlYM = await GardenContractV2Q688bkE.withdraw.call(stringfiaJjNq, uinttI2p9nk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hTG6ysU = await GardenContractV2Q688bkE.getTotalrTLPHarvest.call(uintdO71X4, {from: accounts[1]});

		await expect(GardenContractV2Q688bkE.withdraw.call(stringfiaJjNq, uinttI2p9nk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressBYdRkjE = accounts[3]
		const addressFsNom7a = accounts[0]
		const addresss4gyssD = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addressBYdRkjE, addressFsNom7a, addresss4gyssD, {from: accounts[4]});
		const addressxghuVkp = accounts[4]
		const uintMc10GyR = BigInt("134")
		const stringhSIQtaq = "sa6sZ2J"
		const uintlZmtTdv = BigInt("139")
		const stringIUoPgkh = "NzXbgKUd1qTglsPQ8NNIMETNa29pkJWuBbC4WfSOdTPc3r6rHIV"
		const boolBozf1m = false
		const uintQ7lHJZX = BigInt("53")
		const stringsFNxsgA = "XhOimBsZYIagzT4NnA8AAvfUbpwO93tZ6EnpoI2wTTUl0sDgpUtd8ev8PsCWvzww5wRCOgW8HkBbiRxu4"
		const uintemALgec = BigInt("8")
		const addressG1IaDta = await GardenContractV2Q688bkE.renounceTokenOwner.call(addressxghuVkp, {from: accounts[4]});
		const uint256XOvl8mj = await GardenContractV2Q688bkE.timeUntilNextTLP.call(stringhSIQtaq, uintMc10GyR, {from: accounts[4]});
		const stringZx1rRUT = await GardenContractV2Q688bkE.harvest.call(stringIUoPgkh, uintlZmtTdv, {from: accounts[4]});
		const uint256hrEdw4 = await GardenContractV2Q688bkE.plant.call(uintemALgec, stringsFNxsgA, uintQ7lHJZX, boolBozf1m, {from: accounts[4]});

		await expect(GardenContractV2Q688bkE.renounceTokenOwner.call(addressxghuVkp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressgv9YgQG = accounts[3]
		const addressbeIV7QH = accounts[0]
		const addressR67CEbP = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addressgv9YgQG, addressbeIV7QH, addressR67CEbP, {from: accounts[4]});
		const stringtVCUBH8 = "74ztILj773xyn937kEkgcnPw6"
		const uinthvUXjK = BigInt("21")
		const stringoqaqUMN = "ikZJbYSLUe5AnA9iFdW81eo17"
		const uint256xjsBkq = await GardenContractV2Q688bkE.totalTLPDecomposed.call(stringtVCUBH8, {from: accounts[2]});
		const uint256hTG6ysU = await GardenContractV2Q688bkE.getTotalrTLPHarvest.call(uinthvUXjK, {from: accounts[1]});
		const stringlu82PG1 = await GardenContractV2Q688bkE.harvestAllBeds.call(stringoqaqUMN, {from: accounts[4]});

		await expect(GardenContractV2Q688bkE.totalTLPDecomposed.call(stringtVCUBH8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressCs0jYiV = accounts[3]
		const addresssQi96IL = accounts[4]
		const addressMx4U7X0 = accounts[4]
		const GardenContractV2VXmgHo = await GardenContractV2.new(addressCs0jYiV, addresssQi96IL, addressMx4U7X0, {from: accounts[1]});
		const addresspU1wiNN = accounts[2]
		const addressFB6a0h2 = accounts[5]
		const stringZ45zC6K = "NrXAKCyeWBm86DPuzTH2bZkwlezhmK6lLKRgverGW6sr5I3BmVCBMaUaJuiuOBQz5zhET"
		const addressIhabNS9 = accounts[1]
		const addresso5E5TAL = accounts[0]
		const stringDq3fqjF = "Sq4Fafsth6Tj42hO0MK9d5EXPOtg4Jfx45mmLltVWRey4stQJpRIe5fc6dWwtDSOu"
		const uintMGAxxU = BigInt("195")
		const stringQcDR9WU = "uAh3aOhkXehSG3KdWMFPdx22RpVRSLEQvgvRHm"
		const addressQ7bYHMu = await GardenContractV2VXmgHo.addTokenOwner.call(addressFB6a0h2, addresspU1wiNN, {from: accounts[1]});
		const uint256KK2OJ7Y = await GardenContractV2VXmgHo.balanceOf.call(addressIhabNS9, stringZ45zC6K, {from: accounts[1]});
		const addressTegxEbN = await GardenContractV2VXmgHo.renounceTokenOwner.call(addresso5E5TAL, {from: accounts[1]});
		const uint256IjCy275 = await GardenContractV2VXmgHo.totalTLPDecomposed.call(stringDq3fqjF, {from: accounts[2]});
		const uint256Yjbp9Xj = await GardenContractV2VXmgHo.timeUntilNextTLP.call(stringQcDR9WU, uintMGAxxU, {from: accounts[1]});

		await expect(GardenContractV2VXmgHo.addTokenOwner.call(addressFB6a0h2, addresspU1wiNN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswc5xXw = accounts[3]
		const addresswSvyvQs = accounts[0]
		const addresshkk5WWp = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addresswc5xXw, addresswSvyvQs, addresshkk5WWp, {from: accounts[4]});
		const stringUPF5mch = "dvPIfpHBBvjosLS3jTdYn4ocbJ4wtq5cjqQl2vWTqksYu9uY9d95zACrpdjbh3F64e3iqcxwQ"
		const stringXtClZYg = await GardenContractV2Q688bkE.harvestAllBeds.call(stringUPF5mch, {from: accounts[2]});

		await expect(GardenContractV2Q688bkE.harvestAllBeds.call(stringUPF5mch, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressvL9Ghgy = accounts[3]
		const addressSUPIspy = accounts[0]
		const addressVUhKNi0 = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addressvL9Ghgy, addressSUPIspy, addressVUhKNi0, {from: accounts[4]});
		const uintMa3GlUO = BigInt("159")
		const stringrVmAMw = "XjlAqsPnTLNFeiy"
		const addressKozutjV = accounts[0]
		const uintu1OxX2D = BigInt("116")
		const uintvKt2Ci = BigInt("252")
		const stringGnc8N2q = "jM1xS3ueXRq64KnRHBdQJshqGqtqUbwfqo85JgDxSw2PMBHzfQH5T4NSBlLSbjKWdebLdx"
		const uintXKMcc4V = BigInt("156")
		const uintt3q2fwZ = BigInt("78")
		const uintaxFMtoN = BigInt("134")
		const stringhSIQtaq = "sa6sZ2J"
		const uintm8ZycnE = BigInt("139")
		const stringRn7Ee4j = "K48mrrsFHL1Ikl5flcNSJmyfmAgA2TK7XSU7hHx79DWYwVJwFjS5fC9m8RV6sfbycaOTCFVZ6kGitAN1mENKOG5p3Qt"
		const uint256rmzBOrp = await GardenContractV2Q688bkE.growthRemaining.call(addressKozutjV, stringrVmAMw, uintMa3GlUO, {from: accounts[2]});
		const stringHQ86csY = await GardenContractV2Q688bkE.decompose.call(stringGnc8N2q, uintvKt2Ci, uintu1OxX2D, {from: accounts[1]});
		const uint8SJ8nRl = await GardenContractV2Q688bkE.zeroHoldings.call(uintt3q2fwZ, uintXKMcc4V, {from: accounts[3]});
		const uint256XOvl8mj = await GardenContractV2Q688bkE.timeUntilNextTLP.call(stringhSIQtaq, uintaxFMtoN, {from: accounts[4]});
		const stringn9yNA70 = await GardenContractV2Q688bkE.claimDecompose.call(stringRn7Ee4j, uintm8ZycnE, {from: accounts[2]});

		await expect(GardenContractV2Q688bkE.growthRemaining.call(addressKozutjV, stringrVmAMw, uintMa3GlUO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressOujOTv6 = accounts[3]
		const addressr1jwpEh = accounts[0]
		const addressilhGanB = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addressOujOTv6, addressr1jwpEh, addressilhGanB, {from: accounts[4]});
		const addressnRzbWtS = "0x0000000000000000000000000000000000000001"
		const uintmLda4Ku = BigInt("15")
		const uinth18jS9t = BigInt("123")
		const uintliZKSpm = BigInt("237")
		const uintDn0FeDh = BigInt("215")
		const stringhSIQtaq = "sa6sZ2J"
		const addressh362rRG = await GardenContractV2Q688bkE.changeBenefitiary.call(addressnRzbWtS, {from: accounts[4]});
		const uint256iJ3jTs7 = await GardenContractV2Q688bkE.getTotalrTLPHarvest.call(uintmLda4Ku, {from: accounts[1]});
		const uint8u7uMZh = await GardenContractV2Q688bkE.zeroHoldings.call(uintliZKSpm, uinth18jS9t, {from: accounts[3]});
		const uint256XOvl8mj = await GardenContractV2Q688bkE.timeUntilNextTLP.call(stringhSIQtaq, uintDn0FeDh, {from: accounts[4]});

		await expect(GardenContractV2Q688bkE.getTotalrTLPHarvest.call(uintmLda4Ku, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressy3sEVpc = accounts[3]
		const addressRQljBB7 = accounts[0]
		const addressqpHJb1A = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addressy3sEVpc, addressRQljBB7, addressqpHJb1A, {from: accounts[4]});
		const addressb7TmPIE = accounts[3]
		const stringx2pwJuy = "WyPyIFGKN4cgMmqDPLFmcuMr4WuYPQddgDVvNVqSnG5aSkCDyHFOkDS7PwXb1wJBjOEABL6TNJox3iuIN2iAjpD"
		const uintsbL7pUQ = BigInt("129")
		const stringhSIQtaq = "sa6sZ2J"
		const addressckdYZvi = await GardenContractV2Q688bkE.changeOwner.call(addressb7TmPIE, {from: accounts[4]});
		const uint256eDmpD14 = await GardenContractV2Q688bkE.totalTLPGrowing.call(stringx2pwJuy, {from: accounts[3]});
		const uint256XOvl8mj = await GardenContractV2Q688bkE.timeUntilNextTLP.call(stringhSIQtaq, uintsbL7pUQ, {from: accounts[4]});

		await expect(GardenContractV2Q688bkE.totalTLPGrowing.call(stringx2pwJuy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresskEjeGT = accounts[3]
		const addressfbheixm = accounts[0]
		const addressBr0nnQn = accounts[0]
		const GardenContractV2Q688bkE = await GardenContractV2.new(addresskEjeGT, addressfbheixm, addressBr0nnQn, {from: accounts[4]});
		const stringYp9f2mo = "oIEhsCvMW8RWjZxPB5LivcejGuN44pq25gfHuFQ8ImEtLUjOwrMEziPH1epo"
		const uintRbhLmJm = BigInt("242")
		const stringezMv3LO = "BhkksnFzmNTcBxaIqKC4VWqBNPB1195qvRNTcuxOskkqX3Tot6HyTF5U9whYhlaHWy"
		const uintm3xCpoa = BigInt("9")
		const uint256NNmm2hy = await GardenContractV2Q688bkE.totalGardenSupply.call(stringYp9f2mo, {from: accounts[2]});
		const stringpquQY54 = await GardenContractV2Q688bkE.withdraw.call(stringezMv3LO, uintRbhLmJm, {from: accounts[0]});
		const uint256hTG6ysU = await GardenContractV2Q688bkE.getTotalrTLPHarvest.call(uintm3xCpoa, {from: accounts[1]});

		await expect(GardenContractV2Q688bkE.totalGardenSupply.call(stringYp9f2mo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})