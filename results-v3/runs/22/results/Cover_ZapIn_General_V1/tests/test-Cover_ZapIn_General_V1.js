const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintkWrBrIP = BigInt("1655")
		const Cover_ZapIn_General_V1t141Iqj = await Cover_ZapIn_General_V1.new(uintkWrBrIP, {from: accounts[3]});
		const uintB1YvbNX = BigInt("521")
		const addressfogcrlF = "0x0000000000000000000000000000000000000001"
		const uintLefv53 = BigInt("1204")
		const addressiLgynuq = accounts[2]
		await Cover_ZapIn_General_V1t141Iqj.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1t141Iqj.toggleContractActive.call({from: accounts[5]});
		await Cover_ZapIn_General_V1t141Iqj._enterCover.call(addressfogcrlF, uintB1YvbNX, {from: accounts[4]});
		await Cover_ZapIn_General_V1t141Iqj._enterCover.call(addressiLgynuq, uintLefv53, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintWRnozMd = BigInt("972")
		const Cover_ZapIn_General_V1QLl0PL5 = await Cover_ZapIn_General_V1.new(uintWRnozMd, {from: accounts[1]});
		const addressTXLQkiL = "0x0000000000000000000000000000000000000001"
		const addressqZjt5XI = accounts[0]
		const addressaXUcyR4 = accounts[4]
		const uintiXaUCON = BigInt("1058")
		const addressbPe8UvZ = accounts[0]
		const addressvY0rix0 = await Cover_ZapIn_General_V1QLl0PL5.transferOwnership.call(addressTXLQkiL, {from: "0x0000000000000000000000000000000000000001"});
		const addressTY4JgDS = await Cover_ZapIn_General_V1QLl0PL5.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const 
iKsu9fA = await Cover_ZapIn_General_V1QLl0PL5._enterPosition.call(addressbPe8UvZ, uintiXaUCON, addressaXUcyR4, addressqZjt5XI, {from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uint1snonE = BigInt("1387")
		const Cover_ZapIn_General_V1kJZ4nmJ = await Cover_ZapIn_General_V1.new(uint1snonE, {from: accounts[5]});
		const addressJMECMoB = accounts[1]
		const addressstTYw9e = accounts[3]
		const uintYckJs1e = BigInt("1095")
		const addressmempAcl = accounts[0]
		const addressBhwqsQz = await Cover_ZapIn_General_V1kJZ4nmJ.owner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1kJZ4nmJ.stopInEmergency.call({from: accounts[4]});
		const 
FjX0jeA = await Cover_ZapIn_General_V1kJZ4nmJ._enterPosition.call(addressmempAcl, uintYckJs1e, addressstTYw9e, addressJMECMoB, {from: accounts[0]});
		await Cover_ZapIn_General_V1kJZ4nmJ.nonReentrant.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintDjG3ccT = BigInt("739")
		const Cover_ZapIn_General_V1s63pgY1 = await Cover_ZapIn_General_V1.new(uintDjG3ccT, {from: accounts[1]});
		const uintEZy0Jlh = BigInt("64")
		const addressSm10DyY = accounts[2]
		const addressaCD2aqK = accounts[1]
		await Cover_ZapIn_General_V1s63pgY1.renounceOwnership.call({from: accounts[1]});
		await Cover_ZapIn_General_V1s63pgY1._enterCover.call(addressSm10DyY, uintEZy0Jlh, {from: "0x0000000000000000000000000000000000000001"});
		const addresssa4XkHO = await Cover_ZapIn_General_V1s63pgY1.owner.call({from: accounts[1]});
		const 
Ji4amb9 = await Cover_ZapIn_General_V1s63pgY1._getCoverDetails.call(addressaCD2aqK, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintS0cpgL6 = BigInt("1653")
		const Cover_ZapIn_General_V1uvi4HKr = await Cover_ZapIn_General_V1.new(uintS0cpgL6, {from: accounts[3]});
		const byteQAvqxM = "0x0f030311051708020a1c141e"
		const addressl6r9stb = accounts[1]
		const addressjvruK9 = accounts[3]
		const uintmagwnFs = BigInt("861")
		const addressNi7ke4E = accounts[0]
		const address9L4Kql = accounts[0]
		const addressAnW9nJf = accounts[2]
		const address4Eegte = accounts[0]
		const addressRokCqb8 = accounts[0]
		const address62EGmG = accounts[2]
		const uinthsKyeb = BigInt("92")
		const addressBTqMQCo = accounts[4]
		const addressenV9F3G = accounts[0]
		const 
P5V6I7N = await Cover_ZapIn_General_V1uvi4HKr.ZapIn.call(address4Eegte, addressAnW9nJf, address9L4Kql, addressNi7ke4E, uintmagwnFs, addressjvruK9, addressl6r9stb, byteQAvqxM, {from: accounts[5]});
		const 
tZ0XCgD = await Cover_ZapIn_General_V1uvi4HKr._enterPosition.call(addressBTqMQCo, uinthsKyeb, address62EGmG, addressRokCqb8, {from: accounts[2]});
		const addressv7afIjg = await Cover_ZapIn_General_V1uvi4HKr.toPayable.call(addressenV9F3G, {from: accounts[3]});
		await Cover_ZapIn_General_V1uvi4HKr.nonReentrant.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintLzly7DA = BigInt("739")
		const Cover_ZapIn_General_V1s63pgY1 = await Cover_ZapIn_General_V1.new(uintLzly7DA, {from: accounts[1]});
		const addressta8cZnV = accounts[0]
		const addressb7uBHeM = await Cover_ZapIn_General_V1s63pgY1.transferOwnership.call(addressta8cZnV, {from: accounts[1]});
		await Cover_ZapIn_General_V1s63pgY1.withdraw.call({from: accounts[4]});
		const addresssa4XkHO = await Cover_ZapIn_General_V1s63pgY1.owner.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintwmUAagX = BigInt("739")
		const Cover_ZapIn_General_V1s63pgY1 = await Cover_ZapIn_General_V1.new(uintwmUAagX, {from: accounts[1]});
		const uintDedxZx9 = BigInt("1875")
		const addressh9cj3S3 = accounts[3]
		const addresssa4XkHO = await Cover_ZapIn_General_V1s63pgY1.owner.call({from: accounts[1]});
		const uint16MoOr0Fx = await Cover_ZapIn_General_V1s63pgY1.set_new_goodwill.call(uintDedxZx9, {from: accounts[1]});
		const addressD4K3XpL = await Cover_ZapIn_General_V1s63pgY1.inCaseTokengetsStuck.call(addressh9cj3S3, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintPZCu7yl = BigInt("739")
		const Cover_ZapIn_General_V1s63pgY1 = await Cover_ZapIn_General_V1.new(uintPZCu7yl, {from: accounts[1]});
		const addressjUZzyj = "0x0000000000000000000000000000000000000001"
		const addresssa4XkHO = await Cover_ZapIn_General_V1s63pgY1.owner.call({from: accounts[1]});
		await Cover_ZapIn_General_V1s63pgY1.toggleContractActive.call({from: accounts[1]});
		const 
aSzMIIV = await Cover_ZapIn_General_V1s63pgY1._getCoverDetails.call(addressjUZzyj, {from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintwbGGEIr = BigInt("1003")
		const Cover_ZapIn_General_V1hcG8sni = await Cover_ZapIn_General_V1.new(uintwbGGEIr, {from: accounts[2]});
		const uintH1OM4d6 = BigInt("1627")
		const uintX3cD9RJ = BigInt("1824")
		await Cover_ZapIn_General_V1hcG8sni.withdraw.call({from: accounts[2]});
		await Cover_ZapIn_General_V1hcG8sni.onlyOwner.call({from: accounts[4]});
		const uint16lIdN4Aq = await Cover_ZapIn_General_V1hcG8sni.set_new_goodwill.call(uintH1OM4d6, {from: accounts[3]});
		const uint16tq9539u = await Cover_ZapIn_General_V1hcG8sni.set_new_goodwill.call(uintX3cD9RJ, {from: accounts[2]});
		await Cover_ZapIn_General_V1hcG8sni.toggleContractActive.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintOD4RsJH = BigInt("739")
		const Cover_ZapIn_General_V1s63pgY1 = await Cover_ZapIn_General_V1.new(uintOD4RsJH, {from: accounts[1]});
		const addressTts5WeI = accounts[2]
		const addresssa4XkHO = await Cover_ZapIn_General_V1s63pgY1.owner.call({from: accounts[1]});
		const addressqleQ9q = await Cover_ZapIn_General_V1s63pgY1.inCaseTokengetsStuck.call(addressTts5WeI, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintg1V4Aah = BigInt("374")
		const Cover_ZapIn_General_V1x4yBAGz = await Cover_ZapIn_General_V1.new(uintg1V4Aah, {from: "0x0000000000000000000000000000000000000001"});
		const addressQDQKjvA = accounts[2]
		await Cover_ZapIn_General_V1x4yBAGz.stopInEmergency.call({from: accounts[5]});
		const addressbxQEAZS = await Cover_ZapIn_General_V1x4yBAGz.toPayable.call(addressQDQKjvA, {from: accounts[2]});
		await Cover_ZapIn_General_V1x4yBAGz.onlyOwner.call({from: accounts[0]});
	});
})