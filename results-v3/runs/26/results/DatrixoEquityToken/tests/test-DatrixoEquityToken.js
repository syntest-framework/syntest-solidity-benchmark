const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressZFgrWAK = accounts[5]
		const uintLeOs9sA = BigInt("328")
		const DatrixoEquityTokenhP1bFDe = await DatrixoEquityToken.new(addressZFgrWAK, uintLeOs9sA, {from: accounts[1]});
		const uintT70QUB6 = BigInt("710")
		await DatrixoEquityTokenhP1bFDe.afterStartTime.call({from: accounts[5]});
		await DatrixoEquityTokenhP1bFDe.afterStartTime.call({from: accounts[5]});
		const uintyAMBrES = await DatrixoEquityTokenhP1bFDe.setStart.call(uintT70QUB6, {from: accounts[5]});

		await expect(DatrixoEquityTokenhP1bFDe.afterStartTime.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressUk3vPSM = accounts[2]
		const uintwCAY6C6 = BigInt("1215")
		const DatrixoEquityTokengJSnMeV = await DatrixoEquityToken.new(addressUk3vPSM, uintwCAY6C6, {from: accounts[0]});
		const uint6QvOU0 = BigInt("1271")
		const addressCoAGkJh = accounts[2]
		const addressYAqgbpT = accounts[2]
		const addressvkLN2Bl = accounts[4]
		const boolbeQLwSl = await DatrixoEquityTokengJSnMeV.transferFrom.call(addressYAqgbpT, addressCoAGkJh, uint6QvOU0, {from: accounts[5]});
		const boolaWR8oZZ = await DatrixoEquityTokengJSnMeV.removeShareholder.call(addressvkLN2Bl, {from: accounts[1]});

		await expect(DatrixoEquityTokengJSnMeV.transferFrom.call(addressYAqgbpT, addressCoAGkJh, uint6QvOU0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressay3Oz68 = accounts[1]
		const uintgUlcn0q = BigInt("1235")
		const DatrixoEquityTokenaaNRXLN = await DatrixoEquityToken.new(addressay3Oz68, uintgUlcn0q, {from: "0x0000000000000000000000000000000000000001"});
		const uintgbnjTrw = BigInt("970")
		const addressbv8onM = accounts[4]
		const uintkvJ84CV = BigInt("235")
		const address1n1nOq = accounts[4]
		const boolfpl5JoY = await DatrixoEquityTokenaaNRXLN.transfer.call(addressbv8onM, uintgbnjTrw, {from: accounts[1]});
		const boolEycwrON = await DatrixoEquityTokenaaNRXLN.transfer.call(address1n1nOq, uintkvJ84CV, {from: accounts[0]});
		await DatrixoEquityTokenaaNRXLN.afterStartTime.call({from: accounts[0]});
		const addressarrayNqSkNi1 = await DatrixoEquityTokenaaNRXLN.getShareholdersArray.call({from: accounts[2]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressjZhFGdv = accounts[2]
		const uintMY0DvTb = BigInt("1903")
		const DatrixoEquityTokenv9BTsS = await DatrixoEquityToken.new(addressjZhFGdv, uintMY0DvTb, {from: accounts[4]});
		const uintkRN7gms = BigInt("1525")
		const addressSgR2iPt = accounts[0]
		const addresszhw0QS0 = accounts[2]
		const uintnoC0og = BigInt("295")
		const addressV3UkpWC = accounts[1]
		const addressaNo3PHR = accounts[0]
		const booliA6T7y = await DatrixoEquityTokenv9BTsS.transferFrom.call(addresszhw0QS0, addressSgR2iPt, uintkRN7gms, {from: accounts[2]});
		const booleyXkFE2 = await DatrixoEquityTokenv9BTsS.transferFrom.call(addressaNo3PHR, addressV3UkpWC, uintnoC0og, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booliA6T7y, true)
		await expect(DatrixoEquityTokenv9BTsS.transferFrom.call(addressaNo3PHR, addressV3UkpWC, uintnoC0og, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresscUYFzni = accounts[2]
		const uintEqrv20s = BigInt("1903")
		const DatrixoEquityTokenv9BTsS = await DatrixoEquityToken.new(addresscUYFzni, uintEqrv20s, {from: accounts[4]});
		const uintd8BLzgT = BigInt("1525")
		const addressJsI51uN = accounts[0]
		const addressgi9PeWv = accounts[2]
		const uintMqBTzfa = BigInt("998")
		const addressJIz311n = accounts[0]
		const addressYLGkt5 = accounts[5]
		const uint3kxmBR = BigInt("295")
		const addressmUguSRI = accounts[1]
		const addressgrfG7G3 = accounts[0]
		const addressarraymBfJHGs = await DatrixoEquityTokenv9BTsS.getShareholdersArray.call({from: accounts[2]});
		const booliA6T7y = await DatrixoEquityTokenv9BTsS.transferFrom.call(addressgi9PeWv, addressJsI51uN, uintd8BLzgT, {from: accounts[2]});
		const bools1oezk0 = await DatrixoEquityTokenv9BTsS.transferFrom.call(addressYLGkt5, addressJIz311n, uintMqBTzfa, {from: accounts[2]});
		const booleyXkFE2 = await DatrixoEquityTokenv9BTsS.transferFrom.call(addressgrfG7G3, addressmUguSRI, uint3kxmBR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarraymBfJHGs, )
		assert.equal(booliA6T7y, true)
		await expect(DatrixoEquityTokenv9BTsS.transferFrom.call(addressYLGkt5, addressJIz311n, uintMqBTzfa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressrAUX5S9 = accounts[2]
		const uintWhJRVU = BigInt("1215")
		const DatrixoEquityTokengJSnMeV = await DatrixoEquityToken.new(addressrAUX5S9, uintWhJRVU, {from: accounts[0]});
		const addressme3LEcd = accounts[4]
		const uintR2MCCRA = BigInt("1271")
		const addresszdWJh9Y = accounts[2]
		const addresszvZvdPx = accounts[2]
		const uintqqFn3DM = BigInt("742")
		const addressq10xJ1 = accounts[2]
		const addressORlYRva = accounts[4]
		const boolRov7eVK = await DatrixoEquityTokengJSnMeV.removeShareholder.call(addressme3LEcd, {from: accounts[2]});
		const boolbeQLwSl = await DatrixoEquityTokengJSnMeV.transferFrom.call(addresszvZvdPx, addresszdWJh9Y, uintR2MCCRA, {from: accounts[5]});
		const boola08Ie6 = await DatrixoEquityTokengJSnMeV.transfer.call(addressq10xJ1, uintqqFn3DM, {from: accounts[2]});
		const boolaWR8oZZ = await DatrixoEquityTokengJSnMeV.removeShareholder.call(addressORlYRva, {from: accounts[1]});

		await expect(DatrixoEquityTokengJSnMeV.removeShareholder.call(addressme3LEcd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresswtNrINA = accounts[2]
		const uintDYs74S9 = BigInt("1903")
		const DatrixoEquityTokenv9BTsS = await DatrixoEquityToken.new(addresswtNrINA, uintDYs74S9, {from: accounts[4]});
		const uintSjKlClH = BigInt("1557")
		const addresswaYyg5 = accounts[2]
		const addressDggNLLk = accounts[2]
		const uintHzgvXFN = BigInt("845")
		const addressAAYwon2 = accounts[3]
		const booliA6T7y = await DatrixoEquityTokenv9BTsS.transferFrom.call(addressDggNLLk, addresswaYyg5, uintSjKlClH, {from: accounts[2]});
		const booluQdYLta = await DatrixoEquityTokenv9BTsS.transfer.call(addressAAYwon2, uintHzgvXFN, {from: accounts[2]});

		assert.equal(booliA6T7y, true)
		assert.equal(booluQdYLta, true)
	});

	it('test for DatrixoEquityToken', async () => {
		const addressDMJsm22 = accounts[2]
		const uintl6b2ZWI = BigInt("1903")
		const DatrixoEquityTokenv9BTsS = await DatrixoEquityToken.new(addressDMJsm22, uintl6b2ZWI, {from: accounts[4]});
		const uint4GOxle = BigInt("1443")
		const uintyIuZkHI = BigInt("1525")
		const addressCX8htoy = accounts[2]
		const addressV8jWfh0 = accounts[2]
		const uintvdWOWsO = await DatrixoEquityTokenv9BTsS.setStart.call(uint4GOxle, {from: accounts[2]});
		const booliA6T7y = await DatrixoEquityTokenv9BTsS.transferFrom.call(addressV8jWfh0, addressCX8htoy, uintyIuZkHI, {from: accounts[2]});

		assert.equal(booliA6T7y, true)
	});

	it('test for DatrixoEquityToken', async () => {
		const addressyWRRJLn = accounts[2]
		const uintaQlJn5c = BigInt("1215")
		const DatrixoEquityTokengJSnMeV = await DatrixoEquityToken.new(addressyWRRJLn, uintaQlJn5c, {from: accounts[0]});
		const uintqLGCAcB = BigInt("1263")
		const uintsCLhN1 = BigInt("1271")
		const addresscKCEP3l = accounts[2]
		const address9ad7lm = accounts[2]
		const uintgT2ZTJx = await DatrixoEquityTokengJSnMeV.setStart.call(uintqLGCAcB, {from: accounts[2]});
		const boolbeQLwSl = await DatrixoEquityTokengJSnMeV.transferFrom.call(address9ad7lm, addresscKCEP3l, uintsCLhN1, {from: accounts[5]});

		await expect(DatrixoEquityTokengJSnMeV.setStart.call(uintqLGCAcB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressb1i5gM6 = accounts[5]
		const uintFJ9tdO8 = BigInt("1148")
		const DatrixoEquityTokeniOHXzCq = await DatrixoEquityToken.new(addressb1i5gM6, uintFJ9tdO8, {from: accounts[4]});
		const uintHrHBmPe = BigInt("1083")
		const addressLKDW3ya = accounts[5]
		const addressKL6fJg4 = accounts[3]
		const boolfuBHuYQ = await DatrixoEquityTokeniOHXzCq.transfer.call(addressLKDW3ya, uintHrHBmPe, {from: accounts[5]});
		await DatrixoEquityTokeniOHXzCq.afterStartTime.call({from: accounts[4]});
		const boolXUtrsKj = await DatrixoEquityTokeniOHXzCq.removeShareholder.call(addressKL6fJg4, {from: accounts[3]});

		await expect(DatrixoEquityTokeniOHXzCq.transfer.call(addressLKDW3ya, uintHrHBmPe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})