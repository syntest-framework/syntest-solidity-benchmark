const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2j5GvmQR = await DmmControllerV2.new({from: accounts[0]});
		const addresspprAfd = accounts[2]
		const addressq2NCD2k = accounts[4]
		const addressEFY1ot4 = accounts[2]
		const uintYt3LwqM = BigInt("1287")
		const uinti7zJdZk = BigInt("1128")
		const addressoQJWHFa = await DmmControllerV2j5GvmQR.getDmmTokenForUnderlying.call(addresspprAfd, {from: accounts[3]});
		await DmmControllerV2j5GvmQR.renouncePauser.call({from: accounts[0]});
		const addressoinREsA = await DmmControllerV2j5GvmQR.checkNotBlacklisted.call(addressq2NCD2k, {from: accounts[0]});
		const addressijhfDWI = await DmmControllerV2j5GvmQR.setOffChainCurrencyValuator.call(addressEFY1ot4, {from: accounts[2]});
		const uintejHTSrA = await DmmControllerV2j5GvmQR.requireIsSecondaryMarketNft.call(uintYt3LwqM, {from: accounts[5]});
		const uintWa06C2Z = await DmmControllerV2j5GvmQR.disableMarket.call(uinti7zJdZk, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressuC7Kqpc = accounts[0]
		const addressJL7dr3R = accounts[4]
		const address1YM2N3 = accounts[2]
		const addressuBz3dWv = accounts[4]
		const addressDmhMjfr = accounts[0]
		const addressvdBe9MB = accounts[2]
		const addressFHdWqOd = accounts[2]
		const addressypbfQbt = "0x0000000000000000000000000000000000000001"
		const addressqbdIXEw = accounts[3]
		const uintxMbGmf = BigInt("127")
		const uintloMhz5Q = BigInt("925")
		const addressKHjBuSj = accounts[4]
		const DmmControllerV24SIAjh = await DmmControllerV2.new(addressuC7Kqpc, addressJL7dr3R, address1YM2N3, addressuBz3dWv, addressDmhMjfr, addressvdBe9MB, addressFHdWqOd, addressypbfQbt, addressqbdIXEw, uintxMbGmf, uintloMhz5Q, addressKHjBuSj, {from: "0x0000000000000000000000000000000000000001"});
		const uintXZ3Ve9y = BigInt("1178")
		const uintVlIFdLy = BigInt("1456")
		const addressoCCVNz = accounts[4]
		const addressBGFdUu9 = accounts[5]
		const addressyHjNvp = accounts[2]
		const addressay8B1p = accounts[0]
		const addressYL3VczM = accounts[1]
		const 
kqANBiI = await DmmControllerV24SIAjh.decreaseTotalSupply.call(uintVlIFdLy, uintXZ3Ve9y, {from: accounts[3]});
		const addresstWQyl2y = await DmmControllerV24SIAjh.blacklist.call(addressoCCVNz, {from: accounts[4]});
		const 
PWdWcqu = await DmmControllerV24SIAjh.addMarketFromExistingDmmToken.call(addressyHjNvp, addressBGFdUu9, {from: accounts[1]});
		const 
YheKqm9 = await DmmControllerV24SIAjh.transferGuardian.call(addressay8B1p, {from: accounts[1]});
		const uintKyEzLL = await DmmControllerV24SIAjh.getInterestRateByDmmTokenAddress.call(addressYL3VczM, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressJTzc844 = "0x0000000000000000000000000000000000000001"
		const addressAlHXT2 = accounts[0]
		const addressZutBohx = "0x0000000000000000000000000000000000000001"
		const addressW8GAXFV = accounts[0]
		const address8s6VTC = accounts[4]
		const addressyw1tmLT = accounts[3]
		const addressgBJxtvT = accounts[0]
		const addressN7loTGC = accounts[0]
		const addressi6RQgBJ = accounts[4]
		const uintS2Had7 = BigInt("581")
		const uintgjce0UE = BigInt("963")
		const addressBeswZZy = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2VtMgPB3 = await DmmControllerV2.new(addressJTzc844, addressAlHXT2, addressZutBohx, addressW8GAXFV, address8s6VTC, addressyw1tmLT, addressgBJxtvT, addressN7loTGC, addressi6RQgBJ, uintS2Had7, uintgjce0UE, addressBeswZZy, {from: accounts[1]});
		const uintVEG2tWP = BigInt("1684")
		const uintfKA22j = BigInt("1789")
		const addressqjC83Hl = accounts[5]
		const addressxrNGz1j = accounts[4]
		const 
wyF8A4L = await DmmControllerV2VtMgPB3.adminWithdrawFunds.call(uintfKA22j, uintVEG2tWP, {from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV2VtMgPB3.onlyOwner.call({from: accounts[3]});
		const uintCqhkJqF = await DmmControllerV2VtMgPB3.getTotalCollateralization.call({from: accounts[3]});
		const addressNiLRhhK = await DmmControllerV2VtMgPB3.getDmmTokenForUnderlying.call(addressqjC83Hl, {from: accounts[5]});
		const boolu6IkguL = await DmmControllerV2VtMgPB3.isPauser.call(addressxrNGz1j, {from: accounts[0]});
		await DmmControllerV2VtMgPB3.renounceOwnership.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressnZbMHzX = accounts[4]
		const addressHJuFu58 = accounts[4]
		const addressd4ojIa = accounts[0]
		const addressz0jBI7 = accounts[1]
		const addressTRlv17a = accounts[0]
		const addressBdF38z = accounts[0]
		const addressdweTTbp = accounts[4]
		const addressOrQVsiY = accounts[1]
		const addressaLDiNE = accounts[0]
		const uintOEPboPp = BigInt("1967")
		const uintmhZIpvw = BigInt("627")
		const addressu9K2XCq = accounts[5]
		const DmmControllerV2wtlaMrL = await DmmControllerV2.new(addressnZbMHzX, addressHJuFu58, addressd4ojIa, addressz0jBI7, addressTRlv17a, addressBdF38z, addressdweTTbp, addressOrQVsiY, addressaLDiNE, uintOEPboPp, uintmhZIpvw, addressu9K2XCq, {from: accounts[1]});
		const addresshMCmOBT = accounts[3]
		await DmmControllerV2wtlaMrL.nonReentrant.call({from: accounts[5]});
		await DmmControllerV2wtlaMrL.nonReentrant.call({from: accounts[3]});
		const addressJuvelW = await DmmControllerV2wtlaMrL.getDmmTokenForUnderlying.call(addresshMCmOBT, {from: accounts[2]});
		await DmmControllerV2wtlaMrL.unpause.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addressu50JVG8 = accounts[3]
		const addressvGAWPwv = "0x0000000000000000000000000000000000000001"
		const addressJFIOg3T = accounts[4]
		const addressf0hsR0t = accounts[5]
		const addresss2Goax1 = accounts[1]
		const addressx9z0bbN = accounts[2]
		const addressvaS9RRB = accounts[2]
		const addressboT3TPc = accounts[0]
		const addressbZwfFMX = accounts[5]
		const uintgoB9rLt = BigInt("193")
		const uintB1y8ZXG = BigInt("153")
		const addressmuRS4ZY = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2tIl1ylp = await DmmControllerV2.new(addressu50JVG8, addressvGAWPwv, addressJFIOg3T, addressf0hsR0t, addresss2Goax1, addressx9z0bbN, addressvaS9RRB, addressboT3TPc, addressbZwfFMX, uintgoB9rLt, uintB1y8ZXG, addressmuRS4ZY, {from: accounts[1]});
		const addressb5cdXTc = accounts[3]
		const addressnZdZGER = accounts[2]
		const uintTwvKmTM = BigInt("1500")
		const uintPCq9CbC = BigInt("1885")
		const uinteDwfirQ = await DmmControllerV2tIl1ylp.getTokenIdFromDmmTokenAddress.call(addressb5cdXTc, {from: "0x0000000000000000000000000000000000000001"});
		const uintdtu74r = await DmmControllerV2tIl1ylp.getInterestRateByUnderlyingTokenAddress.call(addressnZdZGER, {from: accounts[5]});
		const 
GfqCBIa = await DmmControllerV2tIl1ylp.adminWithdrawFunds.call(uintPCq9CbC, uintTwvKmTM, {from: accounts[0]});
		const addressWSPU67o = await DmmControllerV2tIl1ylp.owner.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressPpMEdeT = accounts[3]
		const addressxBR68b = accounts[0]
		const addressQ16uMYg = accounts[2]
		const addressP10ERzM = accounts[1]
		const addressB5KNPCo = accounts[3]
		const addresscm85t5a = accounts[5]
		const addressxt2yFHl = accounts[2]
		const addressDDNKKbx = accounts[4]
		const addressvorL65q = accounts[0]
		const uintFbLLtIy = BigInt("397")
		const uintJ8myW2i = BigInt("1568")
		const addressiAMEcXX = accounts[4]
		const DmmControllerV2iCU8HHF = await DmmControllerV2.new(addressPpMEdeT, addressxBR68b, addressQ16uMYg, addressP10ERzM, addressB5KNPCo, addresscm85t5a, addressxt2yFHl, addressDDNKKbx, addressvorL65q, uintFbLLtIy, uintJ8myW2i, addressiAMEcXX, {from: accounts[1]});
		const addresshTkrj3p = accounts[1]
		await DmmControllerV2iCU8HHF.renouncePauser.call({from: accounts[1]});
		const addressVr2bq5G = await DmmControllerV2iCU8HHF.setOffChainCurrencyValuator.call(addresshTkrj3p, {from: accounts[4]});
	});
})