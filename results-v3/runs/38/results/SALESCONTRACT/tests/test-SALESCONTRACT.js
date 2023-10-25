const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTVXs0Q4l = await SALESCONTRACT.new({from: accounts[0]});
		const addressgGoiGAb = accounts[0]
		const uintngD1dTo = BigInt("1270")
		const addressAGEgP0F = accounts[5]
		const addressNsUYq6Q = await SALESCONTRACTVXs0Q4l.setToken.call(addressgGoiGAb, {from: accounts[4]});
		const addressu2w1e3 = await SALESCONTRACTVXs0Q4l._setSalesPool.call(addressAGEgP0F, uintngD1dTo, {from: accounts[3]});
		await SALESCONTRACTVXs0Q4l.clearETH.call({from: accounts[3]});

		await expect(SALESCONTRACTVXs0Q4l.setToken.call(addressgGoiGAb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTNl6OH4U = await SALESCONTRACT.new({from: accounts[4]});
		const addressCMxUrEH = accounts[3]
		const uint63cQdM = BigInt("1412")
		const addressGTioMTL = accounts[0]
		const addressPJLiUl = accounts[1]
		const addressQ9U4Guh = accounts[2]
		const boolPBkGcsU = await SALESCONTRACTNl6OH4U.tokenSale.call(addressCMxUrEH, {from: accounts[1]});
		const addressVyuCgs7 = await SALESCONTRACTNl6OH4U._setSalesPool.call(addressGTioMTL, uint63cQdM, {from: "0x0000000000000000000000000000000000000001"});
		const boolVEU94Rh = await SALESCONTRACTNl6OH4U.tokenSale.call(addressPJLiUl, {from: accounts[2]});
		await SALESCONTRACTNl6OH4U.clearTokens.call({from: accounts[3]});
		const addressbdcreMy = await SALESCONTRACTNl6OH4U.setToken.call(addressQ9U4Guh, {from: accounts[3]});

		await expect(SALESCONTRACTNl6OH4U.tokenSale.call(addressCMxUrEH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTZoL44n = await SALESCONTRACT.new({from: accounts[4]});
		const uintGBBv6OA = BigInt("1202")
		const uintOW2LUEy = BigInt("1180")
		await SALESCONTRACTZoL44n.ff.call({from: accounts[2]});
		await SALESCONTRACTZoL44n.ff.call({from: accounts[2]});
		await SALESCONTRACTZoL44n.clearTokens.call({from: accounts[4]});
		const uintQsWg45C = await SALESCONTRACTZoL44n._setStage.call(uintGBBv6OA, {from: accounts[4]});
		const uintgVzu5vk = await SALESCONTRACTZoL44n._setStage.call(uintOW2LUEy, {from: accounts[4]});
		await SALESCONTRACTZoL44n.ff.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTZoL44n.ff.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTj7NVJm5 = await SALESCONTRACT.new({from: accounts[4]});
		await SALESCONTRACTj7NVJm5.clearTokens.call({from: accounts[4]});

		await expect(SALESCONTRACTj7NVJm5.clearTokens.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTDQgq5YJ = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintt5k3lMo = BigInt("1038")
		await SALESCONTRACTDQgq5YJ.ff.call({from: accounts[3]});
		const uintNltmwn = await SALESCONTRACTDQgq5YJ._setStage.call(uintt5k3lMo, {from: accounts[0]});
		await SALESCONTRACTDQgq5YJ.clearTokens.call({from: accounts[2]});
		await SALESCONTRACTDQgq5YJ.clearTokens.call({from: accounts[1]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTV5AMHsO = await SALESCONTRACT.new({from: accounts[4]});
		const uintv25J6vE = BigInt("1315")
		const addressx1hDVQr = "0x0000000000000000000000000000000000000001"
		const addressW2O3BgP = accounts[5]
		const addressk2KjHpU = await SALESCONTRACTV5AMHsO._setSalesPool.call(addressx1hDVQr, uintv25J6vE, {from: accounts[4]});
		const boolPMZt3Q = await SALESCONTRACTV5AMHsO.tokenSale.call(addressW2O3BgP, {from: accounts[3]});

		await expect(SALESCONTRACTV5AMHsO.tokenSale.call(addressW2O3BgP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTV5AMHsO = await SALESCONTRACT.new({from: accounts[4]});
		const uintahy6Qoy = BigInt("1424")
		const addresslgVBOai = "0x0000000000000000000000000000000000000001"
		const addressPBtuVdt = accounts[4]
		const addressY8uF4ze = accounts[6]
		const uintND6RA4o = await SALESCONTRACTV5AMHsO._setStage.call(uintahy6Qoy, {from: accounts[4]});
		const booljGiK4u7 = await SALESCONTRACTV5AMHsO.tokenSale.call(addresslgVBOai, {from: accounts[1]});
		const boolvUgQxL7 = await SALESCONTRACTV5AMHsO.tokenSale.call(addressPBtuVdt, {from: accounts[4]});
		const boolPMZt3Q = await SALESCONTRACTV5AMHsO.tokenSale.call(addressY8uF4ze, {from: accounts[3]});

		await expect(SALESCONTRACTV5AMHsO.tokenSale.call(addresslgVBOai, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTV5AMHsO = await SALESCONTRACT.new({from: accounts[4]});
		const addressAQL54mM = accounts[1]
		const addressa5iOfDn = accounts[6]
		const addressUYjWwd = await SALESCONTRACTV5AMHsO.setToken.call(addressAQL54mM, {from: accounts[4]});
		await SALESCONTRACTV5AMHsO.clearETH.call({from: accounts[1]});
		const boolPMZt3Q = await SALESCONTRACTV5AMHsO.tokenSale.call(addressa5iOfDn, {from: accounts[3]});

		await expect(SALESCONTRACTV5AMHsO.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTh8UgAbD = await SALESCONTRACT.new({from: accounts[0]});
		const addressOUBVDoW = accounts[1]
		const addressB9u3v7l = accounts[4]
		await SALESCONTRACTh8UgAbD.clearETH.call({from: accounts[0]});
		const boolRuOX3AB = await SALESCONTRACTh8UgAbD.tokenSale.call(addressOUBVDoW, {from: "0x0000000000000000000000000000000000000001"});
		const booluf3CSWh = await SALESCONTRACTh8UgAbD.tokenSale.call(addressB9u3v7l, {from: accounts[4]});

		await expect(SALESCONTRACTh8UgAbD.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})