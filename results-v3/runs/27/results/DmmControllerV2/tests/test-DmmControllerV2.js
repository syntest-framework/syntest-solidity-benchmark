const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const addressnjyRlC1 = accounts[2]
		const addressx9IhUD9 = accounts[4]
		const addressebD38P3 = accounts[0]
		const addressuTIjj2V = accounts[3]
		const addressW3pv6BH = accounts[4]
		const addressTw4Jjrc = accounts[3]
		const addressGY2zeS2 = accounts[2]
		const addressf3FgpBa = accounts[1]
		const addresstYsWCc9 = accounts[4]
		const uintU8fO7d4 = BigInt("1615")
		const uintyk4KvXi = BigInt("810")
		const addressA44WAKr = accounts[5]
		const DmmControllerV2bWD8RuL = await DmmControllerV2.new(addressnjyRlC1, addressx9IhUD9, addressebD38P3, addressuTIjj2V, addressW3pv6BH, addressTw4Jjrc, addressGY2zeS2, addressf3FgpBa, addresstYsWCc9, uintU8fO7d4, uintyk4KvXi, addressA44WAKr, {from: accounts[3]});
		const addressthoqyV0 = accounts[1]
		const addressHJDg7Ld = accounts[0]
		const addressdogMBtD = accounts[3]
		const uintWY1RIEF = BigInt("134")
		const uintkPftjia = await DmmControllerV2bWD8RuL.getExchangeRateByUnderlying.call(addressthoqyV0, {from: accounts[2]});
		await DmmControllerV2bWD8RuL.pause.call({from: accounts[4]});
		const boolt7guSZM = await DmmControllerV2bWD8RuL.isBlacklisted.call(addressHJDg7Ld, {from: "0x0000000000000000000000000000000000000001"});
		const addressvl4Dzxi = await DmmControllerV2bWD8RuL.getDmmTokenForUnderlying.call(addressdogMBtD, {from: accounts[4]});
		await DmmControllerV2bWD8RuL.onlyBlacklister.call({from: accounts[0]});
		const uintlUNkgcA = await DmmControllerV2bWD8RuL.getInterestRateByDmmTokenId.call(uintWY1RIEF, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressYpcsCN = accounts[3]
		const addressaNW7DPh = accounts[1]
		const addressNheYwpU = accounts[2]
		const addressFT6FrC5 = accounts[3]
		const addressSvWGNI8 = accounts[2]
		const addressi5biMZb = accounts[4]
		const addressFbNk5Js = accounts[0]
		const addressQYbrTc = accounts[4]
		const addressoklQSs9 = accounts[5]
		const uintakTdfdF = BigInt("1840")
		const uintRsF6eT6 = BigInt("509")
		const addressNAFhad = accounts[2]
		const DmmControllerV2U27agJ5 = await DmmControllerV2.new(addressYpcsCN, addressaNW7DPh, addressNheYwpU, addressFT6FrC5, addressSvWGNI8, addressi5biMZb, addressFbNk5Js, addressQYbrTc, addressoklQSs9, uintakTdfdF, uintRsF6eT6, addressNAFhad, {from: accounts[3]});
		const addressCfmp5GD = accounts[1]
		const uintLNlcJc9 = BigInt("794")
		const uintGKHPpAm = BigInt("1796")
		const boolElMFZUP = await DmmControllerV2U27agJ5.isPauser.call(addressCfmp5GD, {from: accounts[4]});
		const 
bIO4lw = await DmmControllerV2U27agJ5.adminDepositFunds.call(uintGKHPpAm, uintLNlcJc9, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const DmmControllerV2pLSzxK4 = await DmmControllerV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTZ76vUm = accounts[4]
		const uintKW0WQOI = await DmmControllerV2pLSzxK4.getTotalCollateralization.call({from: accounts[0]});
		await DmmControllerV2pLSzxK4.initializer.call({from: accounts[3]});
		const boolyNYhXZg = await DmmControllerV2pLSzxK4.isMarketEnabledByDmmTokenAddress.call(addressTZ76vUm, {from: accounts[0]});
		await DmmControllerV2pLSzxK4.requireIsStakingPurchaser.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresslizrPN = accounts[3]
		const addressv5f7mJ5 = "0x0000000000000000000000000000000000000001"
		const addressuV6o5gI = accounts[0]
		const addressEHkRlDq = accounts[1]
		const addressY4kwgwB = "0x0000000000000000000000000000000000000001"
		const addresse1Byymf = accounts[1]
		const addressmhKM0n7 = accounts[0]
		const addressHfMUAgl = accounts[1]
		const addressQJfnZTV = accounts[3]
		const uintuDkydPO = BigInt("552")
		const uintRzpkw0 = BigInt("1913")
		const addressGzizvHC = accounts[1]
		const DmmControllerV2ZjX8w2T = await DmmControllerV2.new(addresslizrPN, addressv5f7mJ5, addressuV6o5gI, addressEHkRlDq, addressY4kwgwB, addresse1Byymf, addressmhKM0n7, addressHfMUAgl, addressQJfnZTV, uintuDkydPO, uintRzpkw0, addressGzizvHC, {from: accounts[1]});
		const uintRwARjFE = BigInt("1875")
		await DmmControllerV2ZjX8w2T.onlyPauser.call({from: accounts[4]});
		const uinttR38KYO = await DmmControllerV2ZjX8w2T.requireIsNftOwner.call(uintRwARjFE, {from: accounts[3]});
		const addressMJdaFv2 = await DmmControllerV2ZjX8w2T.owner.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressS9FMGVy = accounts[1]
		const addressfOVBzZ8 = accounts[4]
		const addressyCGPEzB = accounts[4]
		const addresswNVKp3 = accounts[3]
		const addressmstGKaL = accounts[1]
		const addressJdQVP6e = accounts[3]
		const addressmBy3g7G = accounts[1]
		const addressFvNEd02 = accounts[3]
		const addressg5teyV4 = accounts[4]
		const uintFb9NdbY = BigInt("1297")
		const uintLygAcnM = BigInt("691")
		const addresstwGajwX = accounts[0]
		const DmmControllerV2NvYqY0C = await DmmControllerV2.new(addressS9FMGVy, addressfOVBzZ8, addressyCGPEzB, addresswNVKp3, addressmstGKaL, addressJdQVP6e, addressmBy3g7G, addressFvNEd02, addressg5teyV4, uintFb9NdbY, uintLygAcnM, addresstwGajwX, {from: accounts[5]});
		const addresso7xGVOU = accounts[2]
		const boolmE3nHqw = await DmmControllerV2NvYqY0C.paused.call({from: accounts[2]});
		await DmmControllerV2NvYqY0C.initializer.call({from: accounts[0]});
		const addressYHTy1H = await DmmControllerV2NvYqY0C.setInterestRateInterface.call(addresso7xGVOU, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addresssLPqm8g = accounts[4]
		const addressMyonOgM = accounts[2]
		const addressYguVQj1 = accounts[1]
		const addresswsJLqs = accounts[2]
		const addressLEj4ubT = accounts[1]
		const addresszqzna9 = accounts[1]
		const addresslUhXXH = accounts[2]
		const addressdSEhgX2 = "0x0000000000000000000000000000000000000001"
		const addressbDVsxey = accounts[3]
		const uintDHjwgUQ = BigInt("1522")
		const uintFuXT4a5 = BigInt("30")
		const addressSuXGZXT = accounts[3]
		const DmmControllerV2yDNnywh = await DmmControllerV2.new(addresssLPqm8g, addressMyonOgM, addressYguVQj1, addresswsJLqs, addressLEj4ubT, addresszqzna9, addresslUhXXH, addressdSEhgX2, addressbDVsxey, uintDHjwgUQ, uintFuXT4a5, addressSuXGZXT, {from: accounts[2]});
		const uintjDPcRZx = BigInt("467")
		const uinthiIyFnI = BigInt("631")
		const addressQB5q0E = accounts[1]
		const addressQfKEDyW = await DmmControllerV2yDNnywh.getDmmTokenAddressByDmmTokenId.call(uintjDPcRZx, {from: accounts[3]});
		const boolK8mF7lu = await DmmControllerV2yDNnywh.isMarketEnabledByDmmTokenId.call(uinthiIyFnI, {from: accounts[4]});
		await DmmControllerV2yDNnywh.renouncePauser.call({from: accounts[2]});
		const 
pKVFgD = await DmmControllerV2yDNnywh.transferGuardian.call(addressQB5q0E, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressDvxQDdD = accounts[3]
		const addressnHwKA6O = accounts[1]
		const addressJoc0oxu = accounts[2]
		const addressB6U9Nmw = accounts[3]
		const addressVJz22Cn = accounts[2]
		const addressHDkXG7A = accounts[4]
		const addressqXU08PI = accounts[0]
		const addressRQ6Qgy2 = accounts[4]
		const addressXXHpbL9 = accounts[5]
		const uintmzEvYP7 = BigInt("1840")
		const uintO0rSXfh = BigInt("509")
		const addressBRz3dkn = accounts[2]
		const DmmControllerV2U27agJ5 = await DmmControllerV2.new(addressDvxQDdD, addressnHwKA6O, addressJoc0oxu, addressB6U9Nmw, addressVJz22Cn, addressHDkXG7A, addressqXU08PI, addressRQ6Qgy2, addressXXHpbL9, uintmzEvYP7, uintO0rSXfh, addressBRz3dkn, {from: accounts[3]});
		const addressuun5YFO = accounts[3]
		const addressnZXyaED = accounts[1]
		const uinttI7Mj8k = BigInt("794")
		const uintaBFiQGm = BigInt("380")
		const 
mNwgI1t = await DmmControllerV2U27agJ5.setGuardian.call(addressuun5YFO, {from: "0x0000000000000000000000000000000000000001"});
		const boolElMFZUP = await DmmControllerV2U27agJ5.isPauser.call(addressnZXyaED, {from: accounts[4]});
		const 
bIO4lw = await DmmControllerV2U27agJ5.adminDepositFunds.call(uintaBFiQGm, uinttI7Mj8k, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressXRjst2T = accounts[1]
		const addressyeRHIP = accounts[4]
		const addressK3elln = accounts[4]
		const addresshxZrL9A = accounts[3]
		const addressAw6afc = accounts[1]
		const addressCONr2d2 = accounts[3]
		const addresstlEwHbZ = accounts[1]
		const addressZfYPHLm = accounts[3]
		const addressyBk0Vnw = accounts[4]
		const uintGe5iaiV = BigInt("1297")
		const uintq2TJzMb = BigInt("691")
		const addressvRWJfaE = accounts[0]
		const DmmControllerV2NvYqY0C = await DmmControllerV2.new(addressXRjst2T, addressyeRHIP, addressK3elln, addresshxZrL9A, addressAw6afc, addressCONr2d2, addresstlEwHbZ, addressZfYPHLm, addressyBk0Vnw, uintGe5iaiV, uintq2TJzMb, addressvRWJfaE, {from: accounts[5]});
		const addressPJq8tb6 = accounts[3]
		const addressyxr95yF = accounts[3]
		const 
ihFKB44 = await DmmControllerV2NvYqY0C.transferOwnership.call(addressPJq8tb6, {from: accounts[5]});
		const boolmE3nHqw = await DmmControllerV2NvYqY0C.paused.call({from: accounts[2]});
		await DmmControllerV2NvYqY0C.initializer.call({from: accounts[0]});
		const addressYHTy1H = await DmmControllerV2NvYqY0C.setInterestRateInterface.call(addressyxr95yF, {from: accounts[1]});
	});
})