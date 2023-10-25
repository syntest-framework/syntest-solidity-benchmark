const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2wAPhZLt = await DmmControllerV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXeS3DcI = accounts[3]
		const addressrHi3WrT = accounts[4]
		const 
HYktqV0 = await DmmControllerV2wAPhZLt.transferOwnershipToNewController.call(addressXeS3DcI, {from: accounts[2]});
		await DmmControllerV2wAPhZLt.whenNotPaused.call({from: accounts[4]});
		const uintC9hlM1W = await DmmControllerV2wAPhZLt.getExchangeRate.call(addressrHi3WrT, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressDkRkuRA = accounts[4]
		const addresscaN7L43 = accounts[0]
		const addressWtPYlGA = accounts[4]
		const addressHgr7UD6 = accounts[4]
		const addressOviCOaq = accounts[5]
		const addressWvi4dX = accounts[1]
		const addresslM1LkF = accounts[4]
		const addressuZJr5QW = accounts[0]
		const addressS2O2ON1 = accounts[1]
		const uintrqEpkwZ = BigInt("1911")
		const uintocHabq2 = BigInt("593")
		const addressWVJONGh = accounts[3]
		const DmmControllerV2DoYqGZG = await DmmControllerV2.new(addressDkRkuRA, addresscaN7L43, addressWtPYlGA, addressHgr7UD6, addressOviCOaq, addressWvi4dX, addresslM1LkF, addressuZJr5QW, addressS2O2ON1, uintrqEpkwZ, uintocHabq2, addressWVJONGh, {from: accounts[5]});
		const addressrxIXki = accounts[1]
		const uint81c1jV = BigInt("1130")
		const address2fYbA1 = accounts[1]
		const boolwjymo8z = await DmmControllerV2DoYqGZG.isBlacklisted.call(addressrxIXki, {from: accounts[0]});
		const uintzWFb8hZ = await DmmControllerV2DoYqGZG.requireIsValidNft.call(uint81c1jV, {from: accounts[0]});
		await DmmControllerV2DoYqGZG.whenPaused.call({from: accounts[0]});
		await DmmControllerV2DoYqGZG.requireIsStakingPurchaser.call({from: "0x0000000000000000000000000000000000000001"});
		const addressCAMtgN = await DmmControllerV2DoYqGZG.setInterestRateInterface.call(address2fYbA1, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressL3J0F2H = accounts[0]
		const addressX8Xw523 = accounts[4]
		const addressB1KKnJU = "0x0000000000000000000000000000000000000001"
		const addressmoRUMq = accounts[3]
		const addressKfuP2b = accounts[4]
		const addressyvYsiUp = accounts[4]
		const addressvMZfJFC = accounts[2]
		const addressAL3XvNU = accounts[4]
		const addressGJ9E4Ic = accounts[0]
		const uintMq7kEQu = BigInt("1723")
		const uintr9i9luU = BigInt("215")
		const addressxIg2h0D = accounts[1]
		const DmmControllerV2tMsvPuo = await DmmControllerV2.new(addressL3J0F2H, addressX8Xw523, addressB1KKnJU, addressmoRUMq, addressKfuP2b, addressyvYsiUp, addressvMZfJFC, addressAL3XvNU, addressGJ9E4Ic, uintMq7kEQu, uintr9i9luU, addressxIg2h0D, {from: accounts[5]});
		const uintFsl2usd = BigInt("348")
		const uintHmoERL8 = BigInt("590")
		const uintVfjRjm8 = BigInt("1927")
		const uintDNmoJOV = BigInt("1189")
		const uintZM7NgAS = BigInt("53")
		const stringj1WR1CK = "xmRIseIiAXxejU5SCxNEXRonxqtNSr"
		const stringlatzqu = "eMoy3P7EFls4ar3khLS46JODmlYNb8PIo5dDEp9FLuTU7srkoy4SBRnSQui1LRH5hAoVp4kHJSW7ujGVuzn"
		const addresszTNkpbX = accounts[3]
		const uintJWj7EO3 = await DmmControllerV2tMsvPuo.getInterestRateByDmmTokenId.call(uintFsl2usd, {from: accounts[4]});
		const 
a5j4Rlp = await DmmControllerV2tMsvPuo.addMarket.call(addresszTNkpbX, stringlatzqu, stringj1WR1CK, uintZM7NgAS, uintDNmoJOV, uintVfjRjm8, uintHmoERL8, {from: accounts[2]});
		await DmmControllerV2tMsvPuo.onlyPauser.call({from: accounts[4]});
		const boolqBEogAd = await DmmControllerV2tMsvPuo.paused.call({from: accounts[4]});
		await DmmControllerV2tMsvPuo.onlyBlacklister.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addresskjUB0Cc = accounts[4]
		const addressGIL6YjB = accounts[1]
		const addresswGxBw2j = accounts[4]
		const addressmm1hAUB = accounts[1]
		const addressS1yeqLk = accounts[4]
		const addressRXbYobI = accounts[4]
		const addressunKRV6o = accounts[2]
		const addressDtEjk6 = accounts[0]
		const addressCJVkjt6 = accounts[5]
		const uintX5it4BA = BigInt("1221")
		const uintPeHjY61 = BigInt("1077")
		const addressrkCSxd = accounts[4]
		const DmmControllerV2SB7GWL = await DmmControllerV2.new(addresskjUB0Cc, addressGIL6YjB, addresswGxBw2j, addressmm1hAUB, addressS1yeqLk, addressRXbYobI, addressunKRV6o, addressDtEjk6, addressCJVkjt6, uintX5it4BA, uintPeHjY61, addressrkCSxd, {from: "0x0000000000000000000000000000000000000001"});
		const addressk235CXX = accounts[5]
		const addressydoeaq5 = accounts[5]
		const addressdmLuGwM = accounts[1]
		const addressOErsX5l = accounts[1]
		const 
pozvVXp = await DmmControllerV2SB7GWL.initialize.call(addressydoeaq5, addressk235CXX, {from: accounts[0]});
		const 
qxlbTYv = await DmmControllerV2SB7GWL.transferOwnership.call(addressdmLuGwM, {from: accounts[3]});
		await DmmControllerV2SB7GWL.renounceOwnership.call({from: accounts[1]});
		const addresskIfibcS = await DmmControllerV2SB7GWL.setOffChainCurrencyValuator.call(addressOErsX5l, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addresssuMDQzw = "0x0000000000000000000000000000000000000001"
		const addressQK7dXH = accounts[2]
		const addressCPh6gN = accounts[4]
		const addressH64TiBC = accounts[0]
		const addressAWOrYnn = accounts[0]
		const addressAF68W4F = accounts[3]
		const addressFJxVWh = accounts[2]
		const addressSfz8nDL = accounts[2]
		const addressUWdA7CY = accounts[4]
		const uintOITn1lm = BigInt("1385")
		const uintT9G4kRT = BigInt("1085")
		const addressSTiAiTS = accounts[2]
		const DmmControllerV2ohASQux = await DmmControllerV2.new(addresssuMDQzw, addressQK7dXH, addressCPh6gN, addressH64TiBC, addressAWOrYnn, addressAF68W4F, addressFJxVWh, addressSfz8nDL, addressUWdA7CY, uintOITn1lm, uintT9G4kRT, addressSTiAiTS, {from: accounts[1]});
		const uinto7rv51T = BigInt("211")
		const addressPEm6dBT = accounts[4]
		await DmmControllerV2ohASQux.renouncePauser.call({from: accounts[1]});
		await DmmControllerV2ohASQux.onlyBlacklister.call({from: accounts[1]});
		const uintarrayjyhJAv7 = await DmmControllerV2ohASQux.getDmmTokenIds.call({from: accounts[1]});
		const uintKG3U5xJ = await DmmControllerV2ohASQux.requireIsSecondaryMarketNft.call(uinto7rv51T, {from: accounts[1]});
		const addressm2xyXS = await DmmControllerV2ohASQux.setOffChainAssetValuator.call(addressPEm6dBT, {from: accounts[4]});
	});
})