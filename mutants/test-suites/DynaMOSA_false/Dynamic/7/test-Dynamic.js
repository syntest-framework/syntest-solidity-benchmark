const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicpjsnACG = await Dynamic.new({from: accounts[0]});
		const uintnqnP5uo = BigInt("1619")
		const stringeq85Qj0 = "Gp1mZqwxDny5AEzFIDvhZ9DqGIL7VQ9IBss2hg3zBb3QkBF38a8pLUdSpvxKYq4ndyI9"
		const uintkv254cI = BigInt("925")
		const uintzDI48EH = BigInt("1855")
		const stringx1alcyw = "PC89iz1EgfOtjPAijyvPMM9aN6dK3t983ih2Qhtk41rLbz3nO561YDYL1aaHGrd1yasKJKvUWhULgvfDrcal9d"
		const uint32p888 = BigInt("219")
		const boolLNanLG4 = await DynamicpjsnACG.yolo.call(uintkv254cI, stringeq85Qj0, uintnqnP5uo, {from: accounts[5]});
		const boolX5geMJ1 = await DynamicpjsnACG.yolo.call(uint32p888, stringx1alcyw, uintzDI48EH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLNanLG4, true)
		assert.equal(boolX5geMJ1, true)
	});

	it('test for Dynamic', async () => {
		const DynamicnZi0wQi = await Dynamic.new({from: accounts[3]});
		const uintvs1A2RQ = BigInt("1920")
		const stringr7q1Wl = "jqCaUPtBCjP64WaBIy5wOATn7CP7ANfVBzUdrwrHnugcxVdA9Y2Xz"
		const uintfZ9ZxOP = BigInt("967")
		const uintnQHm04l = BigInt("545")
		const stringST71ZTi = "34KSBUKHHYpaokVCS6T5wStJlIFHF7KQrsbAhKIAev6UZ67jRtmZbPUvJ"
		const uintLnVVDel = BigInt("1518")
		const boolDkpzgNy = await DynamicnZi0wQi.yolo.call(uintfZ9ZxOP, stringr7q1Wl, uintvs1A2RQ, {from: accounts[1]});
		const boolU2rx9nk = await DynamicnZi0wQi.yolo.call(uintLnVVDel, stringST71ZTi, uintnQHm04l, {from: accounts[1]});
		const boolN4fGkoG = await DynamicnZi0wQi.echidna_test.call({from: accounts[2]});
		const boolBREyeHD = await DynamicnZi0wQi.echidna_test.call({from: accounts[3]});

		assert.equal(boolBREyeHD, true)
		assert.equal(boolDkpzgNy, true)
		assert.equal(boolN4fGkoG, true)
		assert.equal(boolU2rx9nk, true)
	});

	it('test for Dynamic', async () => {
		const Dynamic2bBokI = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintW1KlQwL = BigInt("360")
		const stringXMp2jd1 = "j4xtrR1br9Sq7unLrZwwxOgyMvlkNttt"
		const uintdW2QK63 = BigInt("852")
		const uintEHZjbux = BigInt("735")
		const stringuKnIsuf = "PE"
		const uintGMTRfgn = BigInt("701")
		const boolHOTU7j8 = await Dynamic2bBokI.yolo.call(uintdW2QK63, stringXMp2jd1, uintW1KlQwL, {from: "0x0000000000000000000000000000000000000001"});
		const boolUW1Xalc = await Dynamic2bBokI.yolo.call(uintGMTRfgn, stringuKnIsuf, uintEHZjbux, {from: accounts[2]});
	});
})