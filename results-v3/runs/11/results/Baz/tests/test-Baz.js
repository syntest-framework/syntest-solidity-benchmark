const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazhtTDm1J = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intp5yzwU6 = BigInt("382")
		const inteMBzPBB = BigInt("1828")
		const inti5lbV16 = BigInt("1009")
		const intEi4zHrS = BigInt("-802")
		const intipsYeY6 = BigInt("-1070")
		const intTKINHi = BigInt("-124")
		const intmM752P9 = BigInt("100")
		const intjXE8cf = BigInt("788")
		const intfkPD2Qc = BigInt("-242")
		const int256YDoPRes = await BazhtTDm1J.baz.call(inti5lbV16, inteMBzPBB, intp5yzwU6, {from: accounts[5]});
		const int256kHtenPF = await BazhtTDm1J.baz.call(intTKINHi, intipsYeY6, intEi4zHrS, {from: accounts[3]});
		const boolLRnYKv1 = await BazhtTDm1J.echidna_all_states.call({from: accounts[3]});
		const int256rMI16Zr = await BazhtTDm1J.baz.call(intfkPD2Qc, intjXE8cf, intmM752P9, {from: accounts[3]});
	});

	it('test for Baz', async () => {
		const Baznitd2T7 = await Baz.new({from: accounts[3]});
		const intHT9cuJh = BigInt("-1709")
		const intt6KINpS = BigInt("515")
		const intiNzEBQz = BigInt("1027")
		const int256tdGunVL = await Baznitd2T7.baz.call(intiNzEBQz, intt6KINpS, intHT9cuJh, {from: accounts[5]});
		const boolOU6b20B = await Baznitd2T7.echidna_all_states.call({from: accounts[2]});
		const boolMNoAuXR = await Baznitd2T7.echidna_all_states.call({from: accounts[4]});

		assert.equal(boolMNoAuXR, true)
		assert.equal(boolOU6b20B, true)
		assert.equal(int256tdGunVL, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BazwvHiB64 = await Baz.new({from: accounts[2]});
		const intqCC4p8N = BigInt("-903")
		const intA7YKbtl = BigInt("-1593")
		const intnWp1c4H = BigInt("-497")
		const intwZjotbx = BigInt("534")
		const intAuT5oX8 = BigInt("-2")
		const intVghCtTF = BigInt("-37")
		const boolaZ3frIh = await BazwvHiB64.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});
		const int256B5BAKGN = await BazwvHiB64.baz.call(intnWp1c4H, intA7YKbtl, intqCC4p8N, {from: accounts[0]});
		const int256avhQLys = await BazwvHiB64.baz.call(intVghCtTF, intAuT5oX8, intwZjotbx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolaZ3frIh, true)
		assert.equal(int256B5BAKGN, BigInt("1"))
		assert.equal(int256avhQLys, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazWkL2eei = await Baz.new({from: accounts[5]});
		const intrUXKm3r = BigInt("-565")
		const intQAJ2x4v = BigInt("-1971")
		const intckPjbWn = BigInt("-455")
		const intGalp4o3 = BigInt("-1018")
		const intp8pPwKB = BigInt("1910")
		const intAdi0euc = BigInt("-1572")
		const int256iRyhON = await BazWkL2eei.baz.call(intckPjbWn, intQAJ2x4v, intrUXKm3r, {from: accounts[2]});
		const boolZEvjae = await BazWkL2eei.echidna_all_states.call({from: accounts[0]});
		const boolxUktZk = await BazWkL2eei.echidna_all_states.call({from: accounts[1]});
		const int256ZLmloc = await BazWkL2eei.baz.call(intAdi0euc, intp8pPwKB, intGalp4o3, {from: accounts[3]});

		assert.equal(boolZEvjae, true)
		assert.equal(boolxUktZk, true)
		assert.equal(int256ZLmloc, BigInt("4"))
		assert.equal(int256iRyhON, BigInt("1"))
	});
})