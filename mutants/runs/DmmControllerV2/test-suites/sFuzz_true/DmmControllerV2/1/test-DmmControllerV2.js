const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2Lwuw1FB = await DmmControllerV2.new({from: accounts[0]});
		const uintcLCfxFj = BigInt("1189")
		const addressPqARZvZ = "0x0000000000000000000000000000000000000001"
		const uintxW0Uz4 = await DmmControllerV2Lwuw1FB.requireIsValidNft.call(uintcLCfxFj, {from: "0x0000000000000000000000000000000000000001"});
		const uintqot7wif = await DmmControllerV2Lwuw1FB.getInterestRateByUnderlyingTokenAddress.call(addressPqARZvZ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addresskEO1V8t = accounts[1]
		const addressAHsCmfy = accounts[4]
		const addressd3eLXmk = accounts[1]
		const addressG7dSkyd = accounts[0]
		const addressFnT6Edl = accounts[3]
		const addressHE42Olh = "0x0000000000000000000000000000000000000001"
		const addressC8fT6zN = "0x0000000000000000000000000000000000000001"
		const address1YywZd = accounts[4]
		const addressuQRBksH = accounts[2]
		const uinthN8o5a = BigInt("1914")
		const uintOca7FDa = BigInt("463")
		const addresszFzklep = accounts[4]
		const DmmControllerV2ELvKvDL = await DmmControllerV2.new(addresskEO1V8t, addressAHsCmfy, addressd3eLXmk, addressG7dSkyd, addressFnT6Edl, addressHE42Olh, addressC8fT6zN, address1YywZd, addressuQRBksH, uinthN8o5a, uintOca7FDa, addresszFzklep, {from: accounts[2]});
		const uintnL1u7pl = BigInt("1317")
		const uintzz56w0W = BigInt("234")
		const uintXGq4hel = BigInt("1398")
		await DmmControllerV2ELvKvDL.whenNotPaused.call({from: accounts[0]});
		await DmmControllerV2ELvKvDL.onlyOwnerOrGuardian.call({from: accounts[5]});
		const boolFW3esfK = await DmmControllerV2ELvKvDL.isMarketEnabledByDmmTokenId.call(uintnL1u7pl, {from: accounts[2]});
		const 
R8lfAZA = await DmmControllerV2ELvKvDL.adminDepositFunds.call(uintXGq4hel, uintzz56w0W, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addresstFFaig = accounts[0]
		const addressuuEl2nY = accounts[4]
		const addressQu47PeS = accounts[4]
		const addressEagIcPs = accounts[0]
		const addressETDalR = accounts[0]
		const addressxApzUA = accounts[1]
		const addressJCMM9Lj = accounts[2]
		const addressMJOjaxd = accounts[2]
		const addressRYF7O2e = accounts[0]
		const uintAivhqv0 = BigInt("96")
		const uinta6DpFT = BigInt("1641")
		const addresslKEBt55 = accounts[4]
		const DmmControllerV2B5s1ll0 = await DmmControllerV2.new(addresstFFaig, addressuuEl2nY, addressQu47PeS, addressEagIcPs, addressETDalR, addressxApzUA, addressJCMM9Lj, addressMJOjaxd, addressRYF7O2e, uintAivhqv0, uinta6DpFT, addresslKEBt55, {from: accounts[1]});
		const uintt4g5Bsk = BigInt("985")
		const uintolptXIA = BigInt("226")
		const addressFCtjr7U = accounts[5]
		const addressyrhEIr5 = accounts[0]
		const uinteb7JeNc = BigInt("1245")
		const addressA33Er7H = accounts[2]
		const 
qXn7E0y = await DmmControllerV2B5s1ll0.adminWithdrawFunds.call(uintolptXIA, uintt4g5Bsk, {from: accounts[3]});
		const uintQObiTB0 = await DmmControllerV2B5s1ll0.getExchangeRateByUnderlying.call(addressFCtjr7U, {from: accounts[5]});
		const boolv34XpPj = await DmmControllerV2B5s1ll0.isPauser.call(addressyrhEIr5, {from: "0x0000000000000000000000000000000000000001"});
		const uintDvCZSxi = await DmmControllerV2B5s1ll0.requireIsValidNft.call(uinteb7JeNc, {from: accounts[2]});
		const addressezP3M3Q = await DmmControllerV2B5s1ll0.getDmmTokenForUnderlying.call(addressA33Er7H, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresszT4cetu = accounts[4]
		const addressSXKYJO9 = accounts[3]
		const addressqqjQwYV = accounts[2]
		const addressFARMuL = accounts[1]
		const addressOy8v7k0 = accounts[2]
		const addressfJDQjMC = accounts[1]
		const addressOiIjchF = accounts[4]
		const addressSlVbcS = accounts[3]
		const addressntbfi0h = accounts[2]
		const uintzPGLV0W = BigInt("845")
		const uintPJo55A = BigInt("1346")
		const address6HsssX = accounts[5]
		const DmmControllerV2TO72ial = await DmmControllerV2.new(addresszT4cetu, addressSXKYJO9, addressqqjQwYV, addressFARMuL, addressOy8v7k0, addressfJDQjMC, addressOiIjchF, addressSlVbcS, addressntbfi0h, uintzPGLV0W, uintPJo55A, address6HsssX, {from: accounts[3]});
		const addressD8un33e = accounts[2]
		const uintarrayJXquvO = await DmmControllerV2TO72ial.getDmmTokenIds.call({from: accounts[1]});
		const uintJNqiiuo = await DmmControllerV2TO72ial.getActiveCollateralization.call({from: accounts[2]});
		const boolu4Lgs0b = await DmmControllerV2TO72ial.isMarketEnabledByDmmTokenAddress.call(addressD8un33e, {from: accounts[4]});
		await DmmControllerV2TO72ial.requireIsFromAssetIntroducer.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressKLrpimJ = accounts[0]
		const addressWV7s2uk = accounts[1]
		const addresspTmqmPG = accounts[1]
		const addressKITLI0X = accounts[5]
		const addressMCWQ2XW = accounts[4]
		const addressTjb7d1x = accounts[5]
		const addresszq0cfFT = accounts[5]
		const addressMSNNkv = accounts[4]
		const addressbX8wi86 = accounts[4]
		const uintGhFl8xZ = BigInt("17")
		const uintmoRzeZd = BigInt("480")
		const addressNWi8vhm = accounts[5]
		const DmmControllerV2tZFldKr = await DmmControllerV2.new(addressKLrpimJ, addressWV7s2uk, addresspTmqmPG, addressKITLI0X, addressMCWQ2XW, addressTjb7d1x, addresszq0cfFT, addressMSNNkv, addressbX8wi86, uintGhFl8xZ, uintmoRzeZd, addressNWi8vhm, {from: accounts[1]});
		const addressmL7gy2i = "0x0000000000000000000000000000000000000001"
		const uintClMkb8k = BigInt("232")
		const uintZhlag8o = BigInt("239")
		const uintrTLSIxP = BigInt("191")
		const addressv5UbM41 = await DmmControllerV2tZFldKr.setInterestRateInterface.call(addressmL7gy2i, {from: accounts[0]});
		const 
fceRmyL = await DmmControllerV2tZFldKr.decreaseTotalSupply.call(uintZhlag8o, uintClMkb8k, {from: "0x0000000000000000000000000000000000000001"});
		const addresseZUyDU1 = await DmmControllerV2tZFldKr.owner.call({from: accounts[0]});
		const addressoHNSnv2 = await DmmControllerV2tZFldKr.guardian.call({from: accounts[2]});
		const uintHM6viYX = await DmmControllerV2tZFldKr.requireTokenExists.call(uintrTLSIxP, {from: accounts[2]});
		const uintAbAGz4b = await DmmControllerV2tZFldKr.getActiveCollateralization.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressbuc2Qpu = accounts[2]
		const addressMjaIgoL = accounts[2]
		const addressuDKnebS = accounts[4]
		const addressIOG5y1 = accounts[3]
		const addressmj1NlPx = accounts[3]
		const addressLXjcVh = accounts[5]
		const addressu2LIYeY = accounts[5]
		const addressZiDtDtr = accounts[5]
		const addresskHoRDz = accounts[0]
		const uintNreZV0 = BigInt("540")
		const uintPjrVleG = BigInt("141")
		const addresstprJMFr = accounts[4]
		const DmmControllerV2KCFYjrw = await DmmControllerV2.new(addressbuc2Qpu, addressMjaIgoL, addressuDKnebS, addressIOG5y1, addressmj1NlPx, addressLXjcVh, addressu2LIYeY, addressZiDtDtr, addresskHoRDz, uintNreZV0, uintPjrVleG, addresstprJMFr, {from: accounts[4]});
		const addressvEsnUNK = accounts[2]
		const uintw9OG5Vx = BigInt("1144")
		const uintTq2TEbm = BigInt("764")
		const uintIQ81wUF = BigInt("37")
		const uintb839FqT = BigInt("120")
		const stringclmyvAI = "oDPKNdAiGqNv4DW9tPfHL4N1ucmoDEW9hiEA0TQ3geC8HFS8fJqWVFycIBSjz8JuSQhvI"
		const stringakl1PjN = "Q3ioSrNnlWj9I"
		const addressrhxWnA = accounts[2]
		const addressYPRdIY6 = accounts[0]
		const uintvA6HEi3 = BigInt("591")
		await DmmControllerV2KCFYjrw.unpause.call({from: accounts[5]});
		const 
zuzaL4X = await DmmControllerV2KCFYjrw.transferOwnership.call(addressvEsnUNK, {from: accounts[2]});
		await DmmControllerV2KCFYjrw.nonReentrant.call({from: accounts[2]});
		const 
pCkqOO = await DmmControllerV2KCFYjrw.addMarket.call(addressrhxWnA, stringakl1PjN, stringclmyvAI, uintb839FqT, uintIQ81wUF, uintTq2TEbm, uintw9OG5Vx, {from: accounts[3]});
		const addressx9zBmPh = await DmmControllerV2KCFYjrw.getDmmTokenForUnderlying.call(addressYPRdIY6, {from: accounts[0]});
		const addressUmPTts2 = await DmmControllerV2KCFYjrw.getDmmTokenAddressByDmmTokenId.call(uintvA6HEi3, {from: accounts[1]});
	});
})