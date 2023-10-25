const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressmjNsXf4 = accounts[4]
		const addressNAjSqj1 = accounts[5]
		const addressClsDW8p = accounts[5]
		const GardenContractV2PdaZ35 = await GardenContractV2.new(addressmjNsXf4, addressNAjSqj1, addressClsDW8p, {from: accounts[2]});
		const uintt1VIKiZ = BigInt("112")
		const stringcVqFL8F = "0N6VHEH2k9qrJek0yLS84KYfYZHO5KKxDpuqy7G66dmqSdEamgRDYMnPJ56PkLJ6ElsS6RpWYYNNiUXEcW6TBl2aiMXHDacg"
		const uintKiUe5nD = BigInt("164")
		const stringtPAIcdf = "bAES3NApC5iUJ1Ufh1uGLFdMvUF69wqzyuu2U8g95X1WTn"
		const uintzOazSzy = BigInt("133")
		const uintaXnnoBj = BigInt("36")
		const stringTGYvV8 = "awC9g5SkBItKDf71zXw1NBLzwrBhcnR4XAX9BCVxqc"
		await GardenContractV2PdaZ35.totalBedSupply.call(stringcVqFL8F, uintt1VIKiZ, {from: accounts[1]});
		const stringvqfJHof = await GardenContractV2PdaZ35.claimDecompose.call(stringtPAIcdf, uintKiUe5nD, {from: accounts[0]});
		const uint8H5jK4Vw = await GardenContractV2PdaZ35.zeroHoldings.call(uintaXnnoBj, uintzOazSzy, {from: accounts[5]});
		const uint256XfE3LTN = await GardenContractV2PdaZ35.totalGardenSupply.call(stringTGYvV8, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GardenContractV2', async () => {
		const addressLaodWD = accounts[4]
		const addressb85h3P0 = accounts[1]
		const addressTMkeDwU = accounts[0]
		const GardenContractV2zADVgaK = await GardenContractV2.new(addressLaodWD, addressb85h3P0, addressTMkeDwU, {from: accounts[4]});
		const stringuOptxHl = "CDZeDgRpJYFYlaGhOSjbdGrVm8IibM9WHJQMEhmOjaSBm8NO"
		const addressGEd2cpA = accounts[0]
		const uintEPItBKZ = BigInt("230")
		const uintoBc1rya = BigInt("51")
		const string1gP38U = "tN2RkXTVyPG2oPAjNVz4zBje3KVbpEvqt5CeQuTN2XVjvA8PxVmuW7vCI1CQQ6RJwN5GCXuCiL89jf22KMrVQ2a5IP8q"
		const uint256b6fgDWv = await GardenContractV2zADVgaK.balanceOf.call(addressGEd2cpA, stringuOptxHl, {from: accounts[1]});
		const uint8OvXGG55 = await GardenContractV2zADVgaK.setTimeStamp.call(uintoBc1rya, uintEPItBKZ, {from: accounts[1]});
		const uint2565YSy86 = await GardenContractV2zADVgaK.totalTLPGrowing.call(string1gP38U, {from: accounts[2]});
	});

	it('test for GardenContractV2', async () => {
		const addressDlVeruD = accounts[2]
		const addressXnG6j8a = accounts[1]
		const addressm9hFFyp = accounts[0]
		const GardenContractV2xYnRg7s = await GardenContractV2.new(addressDlVeruD, addressXnG6j8a, addressm9hFFyp, {from: accounts[2]});
		const addressF72s7zy = accounts[4]
		const addressKIVRSf0 = accounts[3]
		const addressxI3GBfn = await GardenContractV2xYnRg7s.changeOwner.call(addressF72s7zy, {from: accounts[4]});
		const addressbXoNcS = await GardenContractV2xYnRg7s.changeBenefitiary.call(addressKIVRSf0, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addresssCLuASu = accounts[1]
		const addressuRHQ3j2 = accounts[3]
		const addressQ9KYOu = accounts[0]
		const GardenContractV2x89JjG = await GardenContractV2.new(addresssCLuASu, addressuRHQ3j2, addressQ9KYOu, {from: accounts[1]});
		const uintKyRCUmA = BigInt("245")
		const stringjnyQCSh = "ZQTJKaIT7qS93TrixEVm2zAkdQ7a1C86m1MYjxVoUK6f4ohpEzDeEdARh6XL8pof8JFqsRCBD2tIfFE3"
		const addressZnpWrg6 = accounts[2]
		const uintm1AA0pV = BigInt("134")
		const stringH0evuh9 = "tphFeQBRD9SqiVhaVT3MIsBOIN7FpSPd5IMTwbkNop0b4At4VCVORo236fsJm5"
		const uint256F50lp3 = await GardenContractV2x89JjG.growthRemaining.call(addressZnpWrg6, stringjnyQCSh, uintKyRCUmA, {from: accounts[1]});
		const stringMgQREaB = await GardenContractV2x89JjG.claimDecompose.call(stringH0evuh9, uintm1AA0pV, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressTgRIdBL = accounts[1]
		const addresskevt0m7 = accounts[4]
		const addressELsfvuV = accounts[1]
		const GardenContractV29t3TBG = await GardenContractV2.new(addressTgRIdBL, addresskevt0m7, addressELsfvuV, {from: accounts[0]});
		const uintJGTYHbK = BigInt("245")
		const uintBF891g3 = BigInt("72")
		const uintTKfFNpR = BigInt("249")
		const uintl9clD8f = BigInt("140")
		const uint8eRvuHc = await GardenContractV29t3TBG.zeroHoldings.call(uintBF891g3, uintJGTYHbK, {from: accounts[0]});
		const uint2560vXDvl = await GardenContractV29t3TBG.getTotalrTLPHarvest.call(uintTKfFNpR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256q6JV6Lm = await GardenContractV29t3TBG.getTotalsTLPHarvest.call(uintl9clD8f, {from: accounts[2]});
	});

	it('test for GardenContractV2', async () => {
		const addressgkydalL = accounts[2]
		const addressh5Esbsn = accounts[0]
		const addressRgQif4r = accounts[4]
		const GardenContractV2moQwuk = await GardenContractV2.new(addressgkydalL, addressh5Esbsn, addressRgQif4r, {from: accounts[3]});
		const addressEmdDtcW = accounts[5]
		const uintqjcQTZy = BigInt("1757")
		const uintWFNtkHx = BigInt("169")
		const stringV1KkOF = "CYFKzvtr0"
		const addressP0uMIuY = await GardenContractV2moQwuk.changeOwner.call(addressEmdDtcW, {from: accounts[3]});
		const stringvFgwceO = await GardenContractV2moQwuk.decompose.call(stringV1KkOF, uintWFNtkHx, uintqjcQTZy, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressrWCF9sk = accounts[2]
		const addressNk09wcx = accounts[1]
		const addressrTShqDx = accounts[0]
		const GardenContractV2xYnRg7s = await GardenContractV2.new(addressrWCF9sk, addressNk09wcx, addressrTShqDx, {from: accounts[2]});
		const stringxWmGYjR = "ncEtNbmqtGgbpOJma78EwCIxqqw15Evi2glSUskpIGg069geVMCxoYAgrvjkyJLWMLSxO2le3mhnXgMcOh4Oca1XV4WA"
		const uintwt2FBgY = BigInt("117")
		const stringTeReleQ = "lWYE"
		const addressZ21H4yZ = accounts[2]
		const uint256yIBnDKf = await GardenContractV2xYnRg7s.totalTLPDecomposed.call(stringxWmGYjR, {from: "0x0000000000000000000000000000000000000001"});
		await GardenContractV2xYnRg7s.totalBedSupply.call(stringTeReleQ, uintwt2FBgY, {from: accounts[5]});
		const addressbXoNcS = await GardenContractV2xYnRg7s.changeBenefitiary.call(addressZ21H4yZ, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addresssGD00ze = accounts[1]
		const addresszpIf76S = accounts[5]
		const addressG849vP = "0x0000000000000000000000000000000000000001"
		const GardenContractV2tBkwwL = await GardenContractV2.new(addresssGD00ze, addresszpIf76S, addressG849vP, {from: accounts[1]});
		const uintULm1JTt = BigInt("228")
		const stringcwRhlm = "dmCcVwxVbLaY1kda866JhUcbpNQ3fl3Qui83jBAlyeAOLuk5v9O83EOECcfH7yctvfAa"
		const stringD355SpH = "eT0XFJcHrDProorWhucki6Dqh3wudNBOWn1XjXxoL1qu1ArCHxenK7I1lyxCHO5h"
		const uintoBpwUPX = BigInt("3")
		const stringucHJSyR = "1ZG3IB7mVjrJf4CxiMq820daoKgURelgm2hGJKXxeIgn4ZdeeF1Sb5Iln1NLJmPzkiliCd3oHOyPa9DKUwPsjavuPs"
		const stringQGFqCC = "VBbrrw4z9Yt7QlY2zBu9kPR5ZSrk37rQbhPsTj287PCst8Jmi64a"
		const uintQnVers1 = BigInt("457")
		const uintwBn8qPx = BigInt("148")
		const uintrLbjKt9 = BigInt("118")
		const stringU9A8UtJ = await GardenContractV2tBkwwL.claimDecompose.call(stringcwRhlm, uintULm1JTt, {from: accounts[0]});
		const uint256zQjvmWx = await GardenContractV2tBkwwL.totalTLPDecomposed.call(stringD355SpH, {from: "0x0000000000000000000000000000000000000001"});
		const stringacSpHTi = await GardenContractV2tBkwwL.withdraw.call(stringucHJSyR, uintoBpwUPX, {from: accounts[3]});
		const uint256xPhTuHf = await GardenContractV2tBkwwL.totalTLPGrowing.call(stringQGFqCC, {from: accounts[3]});
		const uint8bLV5e3w = await GardenContractV2tBkwwL.operationBurnMint.call(uintrLbjKt9, uintwBn8qPx, uintQnVers1, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressPX5Ymlm = accounts[2]
		const addressoMK6sDQ = accounts[1]
		const addressBsqTY0F = accounts[0]
		const GardenContractV2xYnRg7s = await GardenContractV2.new(addressPX5Ymlm, addressoMK6sDQ, addressBsqTY0F, {from: accounts[2]});
		const stringYhuguK = "UF2HtLNFb7Q22mPnwDHfuyIgGyt8p1mQMhX4FVa2z7o2vZU3gzE7vobn2CfplO6LnB4T6Ypcofqk"
		const addressPpaZUy = accounts[6]
		const stringZFsq5tY = await GardenContractV2xYnRg7s.harvestAllBeds.call(stringYhuguK, {from: accounts[1]});
		const addressbXoNcS = await GardenContractV2xYnRg7s.changeBenefitiary.call(addressPpaZUy, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressWeDVd8y = accounts[4]
		const addressXez1BOu = accounts[1]
		const addressEzIQR5C = accounts[0]
		const GardenContractV2zADVgaK = await GardenContractV2.new(addressWeDVd8y, addressXez1BOu, addressEzIQR5C, {from: accounts[4]});
		const uinti1WL65M = BigInt("191")
		const stringYvgaeHV = "ofDwn"
		const stringuOptxHl = "CDZeDgRpJYFYlaGhOSjbdGrVm8IibM9WHJQMEhmOjaSBm8NO"
		const addressj2CkPpw = accounts[2]
		const addresskXYOUJ8 = "0x0000000000000000000000000000000000000001"
		const uint256NZd9T4q = await GardenContractV2zADVgaK.timeUntilNextTLP.call(stringYvgaeHV, uinti1WL65M, {from: accounts[4]});
		const uint256b6fgDWv = await GardenContractV2zADVgaK.balanceOf.call(addressj2CkPpw, stringuOptxHl, {from: accounts[1]});
		const addressCVk2VI4 = await GardenContractV2zADVgaK.changeBenefitiary.call(addresskXYOUJ8, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressvjSccPX = accounts[2]
		const addressEoMlnNH = accounts[1]
		const addressMtubq0b = accounts[0]
		const GardenContractV2xYnRg7s = await GardenContractV2.new(addressvjSccPX, addressEoMlnNH, addressMtubq0b, {from: accounts[2]});
		const uintOuF2MK2 = BigInt("52")
		const address0BIReP = accounts[1]
		const addresss9b4V7c = accounts[4]
		const uint256UvtyBtw = await GardenContractV2xYnRg7s.getTotalrTLPHarvest.call(uintOuF2MK2, {from: accounts[3]});
		const addresskEAMJ0W = await GardenContractV2xYnRg7s.renounceTokenOwner.call(address0BIReP, {from: accounts[2]});
		const addressbXoNcS = await GardenContractV2xYnRg7s.changeBenefitiary.call(addresss9b4V7c, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressKO16rI = accounts[0]
		const addressXiDsiBe = "0x0000000000000000000000000000000000000001"
		const addressBwLQKP7 = accounts[3]
		const GardenContractV2YsGFpNt = await GardenContractV2.new(addressKO16rI, addressXiDsiBe, addressBwLQKP7, {from: accounts[2]});
		const uintNv3CGH = BigInt("23")
		const string7coPX4 = "wk9w1OCZHrJXvXpeBYwXsd4Fo5PNfmVmuccOpqCbDk3PodpCeaAWZuVwF7cBIP9FQ1mIB2i"
		const uintVdYFH5 = BigInt("221")
		const stringUUimqM = "zPs29gxNUdE8iE956ztFFUyQBDaSYl6CRaTtlS6oQBR8RJvTTzXZpCoHwWmSjUd"
		const addressW57gUlH = accounts[1]
		const addresssryS9jw = accounts[1]
		const uinte9TMKs7 = BigInt("231")
		const stringxHRKSiJ = await GardenContractV2YsGFpNt.harvest.call(string7coPX4, uintNv3CGH, {from: accounts[4]});
		const stringadQU0wS = await GardenContractV2YsGFpNt.harvest.call(stringUUimqM, uintVdYFH5, {from: accounts[1]});
		const address2DDhnb = await GardenContractV2YsGFpNt.addTokenOwner.call(addresssryS9jw, addressW57gUlH, {from: accounts[0]});
		const uint256bwkSWy7 = await GardenContractV2YsGFpNt.getTotalrTLPHarvest.call(uinte9TMKs7, {from: accounts[1]});
	});

	it('test for GardenContractV2', async () => {
		const addresszJMpr0 = "0x0000000000000000000000000000000000000001"
		const addressYloc9uC = accounts[5]
		const addressQFPHJOm = accounts[1]
		const GardenContractV2Q6BI9je = await GardenContractV2.new(addresszJMpr0, addressYloc9uC, addressQFPHJOm, {from: accounts[3]});
		const stringcE7FPqF = "PLQRlR88rQ9hNY7sQJkqwjHvNETDlDajvLTQwNhsNjslCTNGcNr9npt5JORY7"
		const uintq3vspFl = BigInt("11")
		const stringduZsOhw = "oiuhqcUZNwLBoE5DsL2ngKFsDsPfxVHzz"
		const uintbBILrF5 = BigInt("45")
		const stringqcqUNe6 = "gDHRfn4odWPloNqg5m1M6pPh33w4830pwzVYoGYnjnnJLo4GNwwVsS5zBooQQSb6MQLxHXEV4cUKB8AGzBCMW"
		const string8KL1jU = "GJMmi94bwKSjoYyMz3IAa8H9Dwy9Ej4jByJVlvj3KC2yyLIT8y3YfaqyOavFu5dyo3y4drkwjoFxc"
		const uintOQMZegK = BigInt("216")
		const stringgZj04Uf = "6RohVeilCbckiBpOtFoo9t4P6tIHO3PQLwWnm"
		const addressescO8Fv = accounts[3]
		const addressZDpctW8 = accounts[4]
		const uint256GqDZxfg = await GardenContractV2Q6BI9je.totalTLPGrown.call(stringcE7FPqF, {from: accounts[0]});
		await GardenContractV2Q6BI9je.totalBedSupply.call(stringduZsOhw, uintq3vspFl, {from: accounts[2]});
		const stringJo3rTjo = await GardenContractV2Q6BI9je.withdraw.call(stringqcqUNe6, uintbBILrF5, {from: accounts[2]});
		const uint256YVPHxIe = await GardenContractV2Q6BI9je.totalTLPBurnt.call(string8KL1jU, {from: accounts[2]});
		const stringEqgxLzV = await GardenContractV2Q6BI9je.harvest.call(stringgZj04Uf, uintOQMZegK, {from: accounts[3]});
		const addressw1kLVlR = await GardenContractV2Q6BI9je.addTokenOwner.call(addressZDpctW8, addressescO8Fv, {from: accounts[1]});
	});

	it('test for GardenContractV2', async () => {
		const addressDgq0GsD = accounts[4]
		const addressVDRTX2R = accounts[1]
		const addressuGOdCpq = accounts[0]
		const GardenContractV2zADVgaK = await GardenContractV2.new(addressDgq0GsD, addressVDRTX2R, addressuGOdCpq, {from: accounts[4]});
		const uintbiXGjC = BigInt("157")
		const stringuOptxHl = "CDZeDgRpJYFYlaGhOSjbdGrVm8IibM9WHJQMuhmOjaSBm8NO"
		const addressFgJdwjJ = accounts[1]
		const uint256EGzjXhA = await GardenContractV2zADVgaK.getTotalsTLPHarvest.call(uintbiXGjC, {from: accounts[1]});
		const uint256b6fgDWv = await GardenContractV2zADVgaK.balanceOf.call(addressFgJdwjJ, stringuOptxHl, {from: accounts[1]});
	});

	it('test for GardenContractV2', async () => {
		const addressp2AHCc7 = accounts[4]
		const addresskZsS5ur = accounts[1]
		const addressqTCQw9a = accounts[0]
		const GardenContractV2zADVgaK = await GardenContractV2.new(addressp2AHCc7, addresskZsS5ur, addressqTCQw9a, {from: accounts[4]});
		const boolTaYDlXu = true
		const uintWgYdoVk = BigInt("186")
		const stringkF2GaGN = "d279rUDOoA9Hk1iV72D3jyidin4ejl7PSqBf4RwKftER"
		const uintVSVyjBe = BigInt("786")
		const stringuOptxHl = "CDZeDgRpJYFYlaGhOSjbdGrVm8IibM9WHJQMuhmOjaSBm8NO"
		const addressDo85yLz = accounts[2]
		const uintJAWp1qf = BigInt("218")
		const stringVkmNeMb = "eKiIqpjZBIBipCaWNIs7wmVuDVisV6sfc9q53CkuTxML"
		const addressuGVVwN = accounts[1]
		const uint256D9r1MKK = await GardenContractV2zADVgaK.plant.call(uintVSVyjBe, stringkF2GaGN, uintWgYdoVk, boolTaYDlXu, {from: accounts[5]});
		const uint256b6fgDWv = await GardenContractV2zADVgaK.balanceOf.call(addressDo85yLz, stringuOptxHl, {from: accounts[1]});
		const uint256iohqsAf = await GardenContractV2zADVgaK.growthRemaining.call(addressuGVVwN, stringVkmNeMb, uintJAWp1qf, {from: accounts[0]});
	});

	it('test for GardenContractV2', async () => {
		const addressX1QKVZU = accounts[2]
		const addressnuqeF24 = accounts[1]
		const addressr7ukajX = accounts[0]
		const GardenContractV2xYnRg7s = await GardenContractV2.new(addressX1QKVZU, addressnuqeF24, addressr7ukajX, {from: accounts[2]});
		const stringnbSkDE = "q2bunMGRX2dKkzXgrukY3Iyfmw"
		const uintxGbHIvG = BigInt("52")
		const stringmw1I6Xv = "Y54n3awbKYkAsLnePTZson6DYmXRlzbgnuW2wg5KWIMA2LQqoHyLU8GvN2YwD4CkSuYBkqEvVWcH1BwYFVIuA"
		const addressZI2ZCbv = accounts[5]
		const addressT6E00K8 = accounts[4]
		const uint256ZKoJYt = await GardenContractV2xYnRg7s.totalGardenSupply.call(stringnbSkDE, {from: accounts[1]});
		const uint256UvtyBtw = await GardenContractV2xYnRg7s.getTotalrTLPHarvest.call(uintxGbHIvG, {from: accounts[3]});
		const uint256taJ5x5 = await GardenContractV2xYnRg7s.balanceOf.call(addressZI2ZCbv, stringmw1I6Xv, {from: accounts[0]});
		const addressbXoNcS = await GardenContractV2xYnRg7s.changeBenefitiary.call(addressT6E00K8, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressOael6Qp = accounts[2]
		const addressKptXVg3 = accounts[4]
		const addressuT3PUG = accounts[3]
		const GardenContractV2liYRY8R = await GardenContractV2.new(addressOael6Qp, addressKptXVg3, addressuT3PUG, {from: "0x0000000000000000000000000000000000000001"});
		const addressbe7uJyf = accounts[0]
		const uintgqtsjVk = BigInt("153")
		const stringPjclej = "W0mYsokePN0OzWw4aArwemFgrsdC5zTMVnydnLIHh6fg9MeYGDrQO1qjKOb3wK2yt8uNdILAAz8V"
		const uintPYZrCE = BigInt("171")
		const stringWTaHJ33 = "Gy9HzxtkhKSPTXSocMUFaFeQczToYi04Nt745VpHrgJavifNPjg9a2Ao31xdo8v5V6b9ySA3vClX"
		const uintQskntoZ = BigInt("237")
		const addressv7jppLg = await GardenContractV2liYRY8R.changeOwner.call(addressbe7uJyf, {from: accounts[4]});
		const stringB8ru1Lj = await GardenContractV2liYRY8R.harvest.call(stringPjclej, uintgqtsjVk, {from: accounts[2]});
		const uint256JK02kWP = await GardenContractV2liYRY8R.getTotalrTLPHarvest.call(uintPYZrCE, {from: accounts[1]});
		const uint256Z5ER7Le = await GardenContractV2liYRY8R.totalTLPGrown.call(stringWTaHJ33, {from: accounts[2]});
		const uint256ipDP4kC = await GardenContractV2liYRY8R.getTotalrTLPHarvest.call(uintQskntoZ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GardenContractV2', async () => {
		const addressK7pL34m = accounts[2]
		const addressV6i78cD = accounts[1]
		const addressfWa2DLf = accounts[0]
		const GardenContractV2xYnRg7s = await GardenContractV2.new(addressK7pL34m, addressV6i78cD, addressfWa2DLf, {from: accounts[2]});
		const uintQFP1Ppv = BigInt("182")
		const stringr9ltC1T = "j7UVvQhKl0Iv8AOcuzvJh7fYuLGPj5TcuvTxMboURPORHkz"
		const stringYhuguK = "UF2HtLNFb7Q22mPnwDHfuyIgEGyt8p1mQMhX4FVa2z7o2vZU3gzE7vobn2CfplO6LnB4T6Ypcofqk"
		const uintgvxER0w = BigInt("210")
		const stringvxKEhsj = "i3UqKfRvVgDk3yPzJPGkYBbViBQtGJPpXwb4Qw7FX4tSes4P5k3Zsch7L41xKGKZtY7jS2FlZTFGvtuHIbxz"
		const addressv760gbl = accounts[4]
		const addresswZELlHt = accounts[2]
		const stringPc6D45E = await GardenContractV2xYnRg7s.withdraw.call(stringr9ltC1T, uintQFP1Ppv, {from: accounts[3]});
		const stringZFsq5tY = await GardenContractV2xYnRg7s.harvestAllBeds.call(stringYhuguK, {from: accounts[1]});
		const uint256yw32w34 = await GardenContractV2xYnRg7s.growthRemaining.call(addressv760gbl, stringvxKEhsj, uintgvxER0w, {from: accounts[2]});
		const addressbXoNcS = await GardenContractV2xYnRg7s.changeBenefitiary.call(addresswZELlHt, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressvepy0f1 = accounts[4]
		const addresstDfm0Om = accounts[1]
		const addressxB2meOu = accounts[0]
		const GardenContractV2zADVgaK = await GardenContractV2.new(addressvepy0f1, addresstDfm0Om, addressxB2meOu, {from: accounts[4]});
		const stringqwqZlQe = "rx2GHGUFR3weKxBmqX0Q4yY"
		const stringuOptxHl = "CDZeDgRpJYFYlaGhOSjbdGrVm8IibM9WHJQMuhmOjaSBm8NO"
		const addressV44eLB1 = accounts[1]
		const uint256z6tL55C = await GardenContractV2zADVgaK.totalTLPGrowing.call(stringqwqZlQe, {from: accounts[5]});
		const uint256b6fgDWv = await GardenContractV2zADVgaK.balanceOf.call(addressV44eLB1, stringuOptxHl, {from: accounts[1]});
	});

	it('test for GardenContractV2', async () => {
		const addressyQvZTl1 = accounts[4]
		const addressj0TspZT = accounts[0]
		const addressVtM39xF = accounts[3]
		const GardenContractV2uWfNAfS = await GardenContractV2.new(addressyQvZTl1, addressj0TspZT, addressVtM39xF, {from: accounts[3]});
		const addressH9fn5Hi = accounts[4]
		const stringOwcBRX1 = "8aV"
		const uint4btlOf = BigInt("61")
		const uintTbMRqlz = BigInt("1457")
		const uintyifsrEQ = BigInt("125")
		const stringdW9cReX = "A1hAz78E9ihx5PXV6aI1S1nOQ2vfvEsoR9RXRONeaLwcjt2ayrx48xiXlzWzoXm8IcN67CKUueokW0EGS6bmU"
		const stringuptSHSm = "BOkQH2W3CzSSu2oK9RdYeo"
		const addressZVz8fd1 = await GardenContractV2uWfNAfS.changeBenefitiary.call(addressH9fn5Hi, {from: accounts[3]});
		const uint256x0t415 = await GardenContractV2uWfNAfS.totalTLPDecomposed.call(stringOwcBRX1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uwao7Lt = await GardenContractV2uWfNAfS.getTotalsTLPHarvest.call(uint4btlOf, {from: accounts[4]});
		const stringDppzVYh = await GardenContractV2uWfNAfS.decompose.call(stringdW9cReX, uintyifsrEQ, uintTbMRqlz, {from: accounts[2]});
		const uint256pDhQl6H = await GardenContractV2uWfNAfS.totalGardenSupply.call(stringuptSHSm, {from: accounts[0]});
	});

	it('test for GardenContractV2', async () => {
		const addressVF508ur = accounts[2]
		const addressKaW5YmC = accounts[1]
		const addressVlIKOE = accounts[0]
		const GardenContractV2xYnRg7s = await GardenContractV2.new(addressVF508ur, addressKaW5YmC, addressVlIKOE, {from: accounts[2]});
		const string4s8e0c = "1CzJsKqMhuS2ujb3uBh8FidpLWNJ1JAWriYGczKiXludtc5SfGLK5xNi6Ns1ehEhsLq6aJCejkq74IuKOJI8686VtuE2xI2JYUD"
		const uintBO3s55i = BigInt("81")
		const stringPlSDacn = "iTiqbDbAWcp5TYnM2tROo6PWkIOLd0oFHXl4cwjniDrq6VN4Suv2LcXMSTys4YkeTaWxTcH27RHLF3o4s91ANWE"
		const uintx6kGQJl = BigInt("67")
		const addresssPWHkcu = accounts[4]
		const uint256Crh76Bw = await GardenContractV2xYnRg7s.totalTLPBurnt.call(string4s8e0c, {from: accounts[2]});
		await GardenContractV2xYnRg7s.totalBedSupply.call(stringPlSDacn, uintBO3s55i, {from: accounts[3]});
		const uint256jm7JL4 = await GardenContractV2xYnRg7s.getTotalsTLPHarvest.call(uintx6kGQJl, {from: accounts[0]});
		const addressbXoNcS = await GardenContractV2xYnRg7s.changeBenefitiary.call(addresssPWHkcu, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressZ3GPdT = accounts[2]
		const addressdY4Ozqz = accounts[1]
		const addressA7EihjN = accounts[0]
		const GardenContractV2xYnRg7s = await GardenContractV2.new(addressZ3GPdT, addressdY4Ozqz, addressA7EihjN, {from: accounts[2]});
		const addressCxctV1u = accounts[2]
		const addresskEAMJ0W = await GardenContractV2xYnRg7s.renounceTokenOwner.call(addressCxctV1u, {from: accounts[2]});
	});

	it('test for GardenContractV2', async () => {
		const addressjzDNap = accounts[2]
		const addressdHnte1 = accounts[1]
		const addressAkBriyY = accounts[0]
		const GardenContractV2xYnRg7s = await GardenContractV2.new(addressjzDNap, addressdHnte1, addressAkBriyY, {from: accounts[2]});
		const uintW34Dbx = BigInt("7")
		const uint256UvtyBtw = await GardenContractV2xYnRg7s.getTotalrTLPHarvest.call(uintW34Dbx, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressEBicBD = accounts[3]
		const address1darOJ = accounts[4]
		const addressLynnZNC = accounts[2]
		const GardenContractV2aBvga76 = await GardenContractV2.new(addressEBicBD, address1darOJ, addressLynnZNC, {from: accounts[4]});
		const addresssD3hCEo = accounts[4]
		const addressyzjaaSj = accounts[2]
		const uintan6VLjK = BigInt("104")
		const stringkqG8Smh = "dAsSXBmLuxzKG9P4H19catZJJMzDx"
		const stringJ0XhsBz = "Ht62EK3mENfJ15DRrfFEhUobvn9URpYW2Adk3csg"
		const string3KRi9h = "3GvXdrVLGKDO2VIqv"
		const addressufTVx3l = await GardenContractV2aBvga76.addTokenOwner.call(addressyzjaaSj, addresssD3hCEo, {from: accounts[4]});
		await GardenContractV2aBvga76.totalBedSupply.call(stringkqG8Smh, uintan6VLjK, {from: accounts[0]});
		const uint256s4JV8B = await GardenContractV2aBvga76.totalTLPDecomposed.call(stringJ0XhsBz, {from: accounts[4]});
		const uint256pinVjPN = await GardenContractV2aBvga76.totalTLPDecomposed.call(string3KRi9h, {from: accounts[4]});
	});
})