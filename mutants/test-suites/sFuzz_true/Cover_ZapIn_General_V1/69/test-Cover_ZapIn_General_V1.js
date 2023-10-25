const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintwWZsvRq = BigInt("557")
		const Cover_ZapIn_General_V1g8zTaEJ = await Cover_ZapIn_General_V1.new(uintwWZsvRq, {from: accounts[2]});
		const addressIXnPnx0 = accounts[0]
		const addressj6sLlXS = accounts[4]
		const uintgS5YVAm = BigInt("1564")
		const addressZ7jbJ6S = accounts[4]
		const bytecB6G3mN = "0x1c02070e1317090d201d00151a131901"
		const addressBE2Sqih = accounts[1]
		const addresshq2zN3w = accounts[4]
		const uintwo7Z9TF = BigInt("131")
		const addressP78XUeH = accounts[3]
		const addressn74lRBY = accounts[0]
		const addresswef523V = accounts[4]
		const addressxWJ12Ko = accounts[1]
		await Cover_ZapIn_General_V1g8zTaEJ.renounceOwnership.call({from: accounts[3]});
		await Cover_ZapIn_General_V1g8zTaEJ.toggleContractActive.call({from: accounts[1]});
		const 
ZU11fC8 = await Cover_ZapIn_General_V1g8zTaEJ._getCoverDetails.call(addressIXnPnx0, {from: "0x0000000000000000000000000000000000000001"});
		const 
tGwLnw = await Cover_ZapIn_General_V1g8zTaEJ._getCoverDetails.call(addressj6sLlXS, {from: accounts[4]});
		await Cover_ZapIn_General_V1g8zTaEJ._enterCover.call(addressZ7jbJ6S, uintgS5YVAm, {from: accounts[5]});
		const 
s7vraEu = await Cover_ZapIn_General_V1g8zTaEJ.ZapIn.call(addressxWJ12Ko, addresswef523V, addressn74lRBY, addressP78XUeH, uintwo7Z9TF, addresshq2zN3w, addressBE2Sqih, bytecB6G3mN, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinthStilHc = BigInt("1247")
		const Cover_ZapIn_General_V1TXyK7d5 = await Cover_ZapIn_General_V1.new(uinthStilHc, {from: accounts[0]});
		const bytemSJ1Izv = "0x151018031508081e0f1420"
		const addressTJjGuqs = accounts[0]
		const addressp3WeSZ2 = accounts[4]
		const uintD7eFLyZ = BigInt("1349")
		const addressqo6pzNY = accounts[1]
		const addresso7K0qMZ = "0x0000000000000000000000000000000000000001"
		const addressss2AypA = accounts[4]
		const addressuQj0VZ3 = accounts[3]
		const addresshT0qt6y = accounts[0]
		const addresskUSKnq = accounts[3]
		const uintohnUSln = BigInt("1153")
		const addressfqbHO4D = accounts[1]
		const addressIoETdGz = accounts[1]
		const addressGjllRPm = accounts[0]
		const uintcqmaEQF = BigInt("1643")
		const addressTafGdGX = accounts[1]
		const uinthsPH1C6 = BigInt("1612")
		const 
ogPMOPn = await Cover_ZapIn_General_V1TXyK7d5.ZapIn.call(addressuQj0VZ3, addressss2AypA, addresso7K0qMZ, addressqo6pzNY, uintD7eFLyZ, addressp3WeSZ2, addressTJjGuqs, bytemSJ1Izv, {from: accounts[3]});
		await Cover_ZapIn_General_V1TXyK7d5.withdraw.call({from: accounts[3]});
		const addressmutKJY = await Cover_ZapIn_General_V1TXyK7d5.owner.call({from: accounts[3]});
		const 
GqIMKre = await Cover_ZapIn_General_V1TXyK7d5._enterPosition.call(addressfqbHO4D, uintohnUSln, addresskUSKnq, addresshT0qt6y, {from: accounts[2]});
		const 
kaVFJla = await Cover_ZapIn_General_V1TXyK7d5._enterPosition.call(addressTafGdGX, uintcqmaEQF, addressGjllRPm, addressIoETdGz, {from: accounts[4]});
		const uint16tw6iCJk = await Cover_ZapIn_General_V1TXyK7d5.set_new_goodwill.call(uinthsPH1C6, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uint1DIqub = BigInt("897")
		const Cover_ZapIn_General_V1rx10cwJ = await Cover_ZapIn_General_V1.new(uint1DIqub, {from: accounts[5]});
		const addressoBxZhEC = accounts[5]
		const uintpxQ9qfe = BigInt("1316")
		const addressWKMPTHy = accounts[1]
		const addresssUSkadR = accounts[0]
		const addressBPZPpa = accounts[0]
		const uintGJmVkjk = BigInt("1810")
		const addressBgXpYcr = accounts[1]
		const addressl9n6KnS = accounts[3]
		const addressCFPuk2f = await Cover_ZapIn_General_V1rx10cwJ.transferOwnership.call(addressoBxZhEC, {from: accounts[5]});
		await Cover_ZapIn_General_V1rx10cwJ._enterCover.call(addressWKMPTHy, uintpxQ9qfe, {from: accounts[3]});
		const 
ZpvXoEE = await Cover_ZapIn_General_V1rx10cwJ._enterPosition.call(addressBgXpYcr, uintGJmVkjk, addressBPZPpa, addresssUSkadR, {from: accounts[2]});
		await Cover_ZapIn_General_V1rx10cwJ.renounceOwnership.call({from: accounts[1]});
		const addresszSbu8Wr = await Cover_ZapIn_General_V1rx10cwJ.transferOwnership.call(addressl9n6KnS, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintH3IsDd0 = BigInt("1472")
		const Cover_ZapIn_General_V1dL0CiIV = await Cover_ZapIn_General_V1.new(uintH3IsDd0, {from: accounts[5]});
		const addressdmMHmVb = await Cover_ZapIn_General_V1dL0CiIV.owner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1dL0CiIV.nonReentrant.call({from: accounts[4]});
		await Cover_ZapIn_General_V1dL0CiIV.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintcdXCP18 = BigInt("38")
		const Cover_ZapIn_General_V1nRmTVFA = await Cover_ZapIn_General_V1.new(uintcdXCP18, {from: "0x0000000000000000000000000000000000000001"});
		const addresszD2JjOZ = accounts[4]
		await Cover_ZapIn_General_V1nRmTVFA.renounceOwnership.call({from: accounts[0]});
		const addressrW0SbLR = await Cover_ZapIn_General_V1nRmTVFA.toPayable.call(addresszD2JjOZ, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintXMnSIVZ = BigInt("1729")
		const Cover_ZapIn_General_V1fS7TNBW = await Cover_ZapIn_General_V1.new(uintXMnSIVZ, {from: accounts[4]});
		const uintfWJ1eV = BigInt("1")
		const addressWpyoKcu = accounts[3]
		await Cover_ZapIn_General_V1fS7TNBW.withdraw.call({from: accounts[4]});
		await Cover_ZapIn_General_V1fS7TNBW._enterCover.call(addressWpyoKcu, uintfWJ1eV, {from: accounts[3]});
		await Cover_ZapIn_General_V1fS7TNBW.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1fS7TNBW.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1fS7TNBW.toggleContractActive.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintYsNQX76 = BigInt("1535")
		const Cover_ZapIn_General_V1PXAIej6 = await Cover_ZapIn_General_V1.new(uintYsNQX76, {from: accounts[0]});
		const uintBJWT1U = BigInt("1791")
		const uint3uNJ9E = BigInt("162")
		const addressNlsMVBc = accounts[5]
		const uint16QoHkVHs = await Cover_ZapIn_General_V1PXAIej6.set_new_goodwill.call(uintBJWT1U, {from: accounts[0]});
		await Cover_ZapIn_General_V1PXAIej6.nonReentrant.call({from: accounts[0]});
		await Cover_ZapIn_General_V1PXAIej6._enterCover.call(addressNlsMVBc, uint3uNJ9E, {from: accounts[2]});
		await Cover_ZapIn_General_V1PXAIej6.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintbbz9XY1 = BigInt("1247")
		const Cover_ZapIn_General_V1TXyK7d5 = await Cover_ZapIn_General_V1.new(uintbbz9XY1, {from: accounts[0]});
		const bytevUP1qWq = "0x151018031508081e0f1420"
		const addressiHTdQZV = accounts[0]
		const addresso084HuB = accounts[4]
		const uintAglCIvV = BigInt("1349")
		const addressoTsWy9 = accounts[1]
		const address7qJehy = "0x0000000000000000000000000000000000000001"
		const addressyMIG5a = accounts[4]
		const addressLKjEQ2A = accounts[3]
		const addresslFEZJr8 = accounts[0]
		const addressjgxvxb7 = accounts[4]
		const uintlRsuH2 = BigInt("1153")
		const addressL0rYdNk = accounts[1]
		const addressCUiqNLv = accounts[1]
		const addresszk7UFvq = accounts[0]
		const uintVAVxeqX = BigInt("1643")
		const addressWojbW6V = accounts[1]
		await Cover_ZapIn_General_V1TXyK7d5.toggleContractActive.call({from: accounts[0]});
		const 
ogPMOPn = await Cover_ZapIn_General_V1TXyK7d5.ZapIn.call(addressLKjEQ2A, addressyMIG5a, address7qJehy, addressoTsWy9, uintAglCIvV, addresso084HuB, addressiHTdQZV, bytevUP1qWq, {from: accounts[3]});
		const 
GqIMKre = await Cover_ZapIn_General_V1TXyK7d5._enterPosition.call(addressL0rYdNk, uintlRsuH2, addressjgxvxb7, addresslFEZJr8, {from: accounts[2]});
		const 
kaVFJla = await Cover_ZapIn_General_V1TXyK7d5._enterPosition.call(addressWojbW6V, uintVAVxeqX, addresszk7UFvq, addressCUiqNLv, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinteYI9N0O = BigInt("1247")
		const Cover_ZapIn_General_V1TXyK7d5 = await Cover_ZapIn_General_V1.new(uinteYI9N0O, {from: accounts[0]});
		const addressVCPpfN = accounts[2]
		const byteVq6GjaF = "0x150d18031508081e0f1420"
		const addressRgtJd9c = accounts[0]
		const addressYZxGLU6 = accounts[4]
		const uintdTHD7RD = BigInt("1349")
		const addresst6OnjyT = accounts[1]
		const addressfFouxxW = "0x0000000000000000000000000000000000000001"
		const addressdd6owH7 = accounts[4]
		const addresscpc00PM = accounts[3]
		const addressSFDeOZg = await Cover_ZapIn_General_V1TXyK7d5.inCaseTokengetsStuck.call(addressVCPpfN, {from: accounts[0]});
		const 
ogPMOPn = await Cover_ZapIn_General_V1TXyK7d5.ZapIn.call(addresscpc00PM, addressdd6owH7, addressfFouxxW, addresst6OnjyT, uintdTHD7RD, addressYZxGLU6, addressRgtJd9c, byteVq6GjaF, {from: accounts[3]});
		await Cover_ZapIn_General_V1TXyK7d5.stopInEmergency.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintAd7wueR = BigInt("1247")
		const Cover_ZapIn_General_V1TXyK7d5 = await Cover_ZapIn_General_V1.new(uintAd7wueR, {from: accounts[0]});
		const byteRUPQFIh = "0x151018031508081e0f1420"
		const addressp0o0ka5 = accounts[0]
		const addressIlThaMu = accounts[4]
		const uintoBtmi4I = BigInt("1349")
		const addressDYy7HTL = accounts[1]
		const addressk9HEN7 = "0x0000000000000000000000000000000000000001"
		const addressxnVkX1O = accounts[5]
		const addresswEhK6bD = accounts[3]
		await Cover_ZapIn_General_V1TXyK7d5.renounceOwnership.call({from: accounts[0]});
		const 
ogPMOPn = await Cover_ZapIn_General_V1TXyK7d5.ZapIn.call(addresswEhK6bD, addressxnVkX1O, addressk9HEN7, addressDYy7HTL, uintoBtmi4I, addressIlThaMu, addressp0o0ka5, byteRUPQFIh, {from: accounts[3]});
	});
})