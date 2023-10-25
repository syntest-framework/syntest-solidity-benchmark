const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2V6JE4QH = await DmmControllerV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintaVdsxD = BigInt("895")
		const addressXlFfmD2 = accounts[0]
		const uintXOxaa0B = BigInt("729")
		const uintlOSrTru = await DmmControllerV2V6JE4QH.enableMarket.call(uintaVdsxD, {from: accounts[3]});
		const uintzyYMzz9 = await DmmControllerV2V6JE4QH.getTokenIdFromDmmTokenAddress.call(addressXlFfmD2, {from: accounts[3]});
		const uintjsNFaIu = await DmmControllerV2V6JE4QH.disableMarket.call(uintXOxaa0B, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressIzvFFh3 = accounts[1]
		const addressb9pa18d = accounts[2]
		const addressDW30dgG = accounts[4]
		const addressyYfcUfP = accounts[4]
		const addressJEZxbG = accounts[4]
		const addressPFypgFN = accounts[1]
		const addressigpSYEs = accounts[3]
		const addressVkpYaYr = accounts[2]
		const addresssml136T = accounts[0]
		const uintWX5cEPh = BigInt("1095")
		const uintc70k706 = BigInt("699")
		const addressDzX2hdm = accounts[5]
		const DmmControllerV2qgFm5FB = await DmmControllerV2.new(addressIzvFFh3, addressb9pa18d, addressDW30dgG, addressyYfcUfP, addressJEZxbG, addressPFypgFN, addressigpSYEs, addressVkpYaYr, addresssml136T, uintWX5cEPh, uintc70k706, addressDzX2hdm, {from: accounts[4]});
		const addressGeJ7GKx = accounts[1]
		const addressG9hYI06 = accounts[3]
		const addressJsk5j1H = accounts[3]
		const addressCR1ylRk = accounts[1]
		const addressw7jKofK = accounts[3]
		const addressqsIrTaV = await DmmControllerV2qgFm5FB.owner.call({from: accounts[2]});
		const 
CXuqRpj = await DmmControllerV2qgFm5FB.addMarketFromExistingDmmToken.call(addressG9hYI06, addressGeJ7GKx, {from: "0x0000000000000000000000000000000000000001"});
		const 
msGob6V = await DmmControllerV2qgFm5FB.addMarketFromExistingDmmToken.call(addressCR1ylRk, addressJsk5j1H, {from: accounts[0]});
		const addresszr73kh0 = await DmmControllerV2qgFm5FB.setDmmTokenFactory.call(addressw7jKofK, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressXdB416z = accounts[4]
		const addressQpIQHJ3 = accounts[2]
		const addressWiN0dAZ = "0x0000000000000000000000000000000000000001"
		const addressgUWIfbY = accounts[4]
		const addressJubm43v = accounts[1]
		const addressEeM6Nd = accounts[3]
		const addressPxnyocO = "0x0000000000000000000000000000000000000001"
		const addressvQyiKXA = accounts[1]
		const addressU2WN2nL = accounts[3]
		const uintBp5v1Z = BigInt("62")
		const uintnPDgIg1 = BigInt("80")
		const addresskXw9CVP = accounts[4]
		const DmmControllerV2CPcVcMS = await DmmControllerV2.new(addressXdB416z, addressQpIQHJ3, addressWiN0dAZ, addressgUWIfbY, addressJubm43v, addressEeM6Nd, addressPxnyocO, addressvQyiKXA, addressU2WN2nL, uintBp5v1Z, uintnPDgIg1, addresskXw9CVP, {from: accounts[4]});
		const addressHjMjUu3 = accounts[2]
		const addressq6VMKOp = accounts[4]
		const addressoqMhNPH = "0x0000000000000000000000000000000000000001"
		const addressyLs024v = accounts[0]
		const uintzwCdun = BigInt("1492")
		const addressFEoF48M = await DmmControllerV2CPcVcMS.guardian.call({from: accounts[3]});
		const uintFEBVaJT = await DmmControllerV2CPcVcMS.getExchangeRate.call(addressHjMjUu3, {from: accounts[1]});
		const addressPt7q3VQ = await DmmControllerV2CPcVcMS.transferOwnership.call(addressq6VMKOp, {from: accounts[0]});
		const 
RnBIYah = await DmmControllerV2CPcVcMS.setCollateralizationCalculator.call(addressoqMhNPH, {from: accounts[4]});
		const 
PlV61y1 = await DmmControllerV2CPcVcMS.setGuardian.call(addressyLs024v, {from: accounts[0]});
		const uintpvn0X8c = await DmmControllerV2CPcVcMS.requireCanWithdrawFunds.call(uintzwCdun, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressIgrLodQ = accounts[3]
		const addressiYCbhH = accounts[4]
		const addressdLgZs7E = accounts[3]
		const addressmMCwROL = "0x0000000000000000000000000000000000000001"
		const addresslX30ViF = accounts[4]
		const addressxipix4H = accounts[4]
		const addressdt7zeUa = accounts[4]
		const addressKJV0HTA = accounts[2]
		const addressTUCx2B8 = accounts[3]
		const uintboqkjgB = BigInt("113")
		const uintjSCgBgA = BigInt("167")
		const addressFTIGVZg = accounts[0]
		const DmmControllerV2qEjovNJ = await DmmControllerV2.new(addressIgrLodQ, addressiYCbhH, addressdLgZs7E, addressmMCwROL, addresslX30ViF, addressxipix4H, addressdt7zeUa, addressKJV0HTA, addressTUCx2B8, uintboqkjgB, uintjSCgBgA, addressFTIGVZg, {from: accounts[2]});
		const address1eNt0P = accounts[3]
		const uinth1xteM = BigInt("832")
		const addresshDFJOoY = await DmmControllerV2qEjovNJ.setDmmTokenFactory.call(address1eNt0P, {from: "0x0000000000000000000000000000000000000001"});
		const uinttVNytVz = await DmmControllerV2qEjovNJ.setMinCollateralization.call(uinth1xteM, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addresssE4wIFf = accounts[3]
		const addressavKi6m = accounts[0]
		const addressSKwWZ5 = accounts[3]
		const addressyJuF8yd = accounts[4]
		const addressNkQ5DlN = "0x0000000000000000000000000000000000000001"
		const addressgJeOfd = accounts[2]
		const addressHV7mzOw = accounts[0]
		const addresswFQ7VZ = accounts[3]
		const addresseXO7MIT = accounts[1]
		const uintBIVKdp7 = BigInt("1281")
		const uintiJHoCkX = BigInt("1493")
		const addressipDwUOC = accounts[2]
		const DmmControllerV2o6GKJSN = await DmmControllerV2.new(addresssE4wIFf, addressavKi6m, addressSKwWZ5, addressyJuF8yd, addressNkQ5DlN, addressgJeOfd, addressHV7mzOw, addresswFQ7VZ, addresseXO7MIT, uintBIVKdp7, uintiJHoCkX, addressipDwUOC, {from: accounts[3]});
		const addresstyst6j0 = accounts[0]
		const addressSFFFrcB = accounts[4]
		const addressLWsaUdL = accounts[5]
		const uintUSLpTzB = BigInt("43")
		const addressLnTXgBS = "0x0000000000000000000000000000000000000001"
		const addressJYOh9LW = await DmmControllerV2o6GKJSN.getDmmTokenForUnderlying.call(addresstyst6j0, {from: accounts[2]});
		const addressimEizfN = await DmmControllerV2o6GKJSN.transferOwnership.call(addressSFFFrcB, {from: accounts[4]});
		await DmmControllerV2o6GKJSN.unpause.call({from: accounts[3]});
		const addressben3Mc2 = await DmmControllerV2o6GKJSN.checkNotBlacklisted.call(addressLWsaUdL, {from: accounts[4]});
		const uinttYIRCc6 = await DmmControllerV2o6GKJSN.setMinReserveRatio.call(uintUSLpTzB, {from: accounts[2]});
		await DmmControllerV2o6GKJSN.requireIsFromAssetIntroducer.call({from: accounts[1]});
		const addressA710koe = await DmmControllerV2o6GKJSN.blacklist.call(addressLnTXgBS, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const address7jhGoe = accounts[1]
		const addressXKvsc8h = accounts[1]
		const addressmXSC3wJ = accounts[0]
		const addressMVKGfNV = accounts[2]
		const addressWXzLp7Q = accounts[5]
		const addressBvuZRo = accounts[2]
		const addresshrhUlXY = accounts[0]
		const addressw6VmQpU = accounts[5]
		const addressKI4oCTr = accounts[4]
		const uintaVWVvqe = BigInt("1638")
		const uintXEu4OO = BigInt("210")
		const addressmVRA0E0 = accounts[3]
		const DmmControllerV2em9JUev = await DmmControllerV2.new(address7jhGoe, addressXKvsc8h, addressmXSC3wJ, addressMVKGfNV, addressWXzLp7Q, addressBvuZRo, addresshrhUlXY, addressw6VmQpU, addressKI4oCTr, uintaVWVvqe, uintXEu4OO, addressmVRA0E0, {from: accounts[4]});
		const addressz06mxh8 = accounts[4]
		const uintf2T0Mhh = BigInt("6")
		const addressfMdC1c = accounts[2]
		const addressRiXhH5A = accounts[4]
		const boolKrQozez = await DmmControllerV2em9JUev.isPauser.call(addressz06mxh8, {from: accounts[2]});
		await DmmControllerV2em9JUev.whenNotPaused.call({from: accounts[4]});
		const uintC2vkqF = await DmmControllerV2em9JUev.getActiveCollateralization.call({from: accounts[2]});
		const uintLkv7noO = await DmmControllerV2em9JUev.requireIsValidNft.call(uintf2T0Mhh, {from: accounts[5]});
		await DmmControllerV2em9JUev.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const 
CNLAwG5 = await DmmControllerV2em9JUev.transferGuardian.call(addressfMdC1c, {from: accounts[4]});
		const addressAH5emcP = await DmmControllerV2em9JUev.getDmmTokenForUnderlying.call(addressRiXhH5A, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addresspb7CVG = accounts[3]
		const addressyUnOAks = accounts[4]
		const addresseEHW0x = accounts[3]
		const addressXelALqc = "0x0000000000000000000000000000000000000001"
		const addressiFHlaV = accounts[4]
		const addressK8QQOgi = accounts[4]
		const addressyq7jlO8 = accounts[4]
		const addressv28W4TM = accounts[2]
		const addressqCauQK = accounts[3]
		const uintK5vJLzf = BigInt("113")
		const uintTvlJki3 = BigInt("167")
		const addressN4ufX5 = accounts[0]
		const DmmControllerV2qEjovNJ = await DmmControllerV2.new(addresspb7CVG, addressyUnOAks, addresseEHW0x, addressXelALqc, addressiFHlaV, addressK8QQOgi, addressyq7jlO8, addressv28W4TM, addressqCauQK, uintK5vJLzf, uintTvlJki3, addressN4ufX5, {from: accounts[2]});
		const addresssSCQ11D = accounts[3]
		const uintZGaEg3y = BigInt("837")
		await DmmControllerV2qEjovNJ.pause.call({from: accounts[4]});
		const addresshDFJOoY = await DmmControllerV2qEjovNJ.setDmmTokenFactory.call(addresssSCQ11D, {from: "0x0000000000000000000000000000000000000001"});
		const uinttVNytVz = await DmmControllerV2qEjovNJ.setMinCollateralization.call(uintZGaEg3y, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressTaPJov5 = accounts[4]
		const addresstjrLKLf = accounts[2]
		const addressooptiU = "0x0000000000000000000000000000000000000001"
		const addressnxxzQRr = accounts[4]
		const addressUg74MMC = accounts[1]
		const addressVCfvyA = accounts[3]
		const addressQLz5CZ9 = "0x0000000000000000000000000000000000000001"
		const address6tp400 = accounts[1]
		const addressVl0gaia = accounts[3]
		const uintd231Gpy = BigInt("62")
		const uintmZgeP1s = BigInt("80")
		const addressocmdJkB = accounts[4]
		const DmmControllerV2CPcVcMS = await DmmControllerV2.new(addressTaPJov5, addresstjrLKLf, addressooptiU, addressnxxzQRr, addressUg74MMC, addressVCfvyA, addressQLz5CZ9, address6tp400, addressVl0gaia, uintd231Gpy, uintmZgeP1s, addressocmdJkB, {from: accounts[4]});
		const addressbmYKBS5 = accounts[2]
		const addressALKgrAa = accounts[1]
		const addressezAGnF5 = accounts[4]
		const addressQnhKu3 = "0x0000000000000000000000000000000000000001"
		const addressZEAIBiZ = accounts[0]
		const uintATFItKk = BigInt("1492")
		const uintFEBVaJT = await DmmControllerV2CPcVcMS.getExchangeRate.call(addressbmYKBS5, {from: accounts[1]});
		const addressPYy7Vdy = await DmmControllerV2CPcVcMS.transferOwnership.call(addressALKgrAa, {from: accounts[4]});
		const addressPt7q3VQ = await DmmControllerV2CPcVcMS.transferOwnership.call(addressezAGnF5, {from: accounts[0]});
		const 
RnBIYah = await DmmControllerV2CPcVcMS.setCollateralizationCalculator.call(addressQnhKu3, {from: accounts[4]});
		const 
PlV61y1 = await DmmControllerV2CPcVcMS.setGuardian.call(addressZEAIBiZ, {from: accounts[0]});
		const uintpvn0X8c = await DmmControllerV2CPcVcMS.requireCanWithdrawFunds.call(uintATFItKk, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressZBCaThW = accounts[3]
		const addresscoFLnNl = accounts[1]
		const addressBw1oe7J = accounts[3]
		const addressmYdlxN = accounts[1]
		const addressvg5H6Dn = accounts[3]
		const addressIODtRRg = accounts[1]
		const addressNApqzdW = accounts[1]
		const addressnXICsGc = accounts[3]
		const address77fxOc = accounts[4]
		const uintBhigVno = BigInt("1193")
		const uintyPFhzWg = BigInt("575")
		const addressxM6aIHJ = accounts[1]
		const DmmControllerV2a2g8FmA = await DmmControllerV2.new(addressZBCaThW, addresscoFLnNl, addressBw1oe7J, addressmYdlxN, addressvg5H6Dn, addressIODtRRg, addressNApqzdW, addressnXICsGc, address77fxOc, uintBhigVno, uintyPFhzWg, addressxM6aIHJ, {from: accounts[2]});
		const addressH26gyBj = accounts[1]
		const addressYlrszv9 = accounts[0]
		const booliFMu08 = await DmmControllerV2a2g8FmA.isMarketEnabledByDmmTokenAddress.call(addressH26gyBj, {from: accounts[0]});
		const uintDGqM5cW = await DmmControllerV2a2g8FmA.getActiveCollateralization.call({from: accounts[0]});
		const uintCdGxdoo = await DmmControllerV2a2g8FmA.getActiveCollateralization.call({from: accounts[0]});
		const booljR4j3x = await DmmControllerV2a2g8FmA.isPauser.call(addressYlrszv9, {from: accounts[0]});
	});
})