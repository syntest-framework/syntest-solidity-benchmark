const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazvWBm4a3 = await Baz.new({from: accounts[3]});
		const intfKUB8jv = BigInt("-815")
		const intVCaCsWk = BigInt("565")
		const intJMSNFj0 = BigInt("-1841")
		const int256GYsFr0 = await BazvWBm4a3.baz.call(intJMSNFj0, intVCaCsWk, intfKUB8jv, {from: accounts[1]});
		const boolYnEfT4P = await BazvWBm4a3.echidna_all_states.call({from: accounts[4]});
		const boolgbnbEZL = await BazvWBm4a3.echidna_all_states.call({from: accounts[3]});
		const boolOLUfcx4 = await BazvWBm4a3.echidna_all_states.call({from: accounts[2]});

		assert.equal(boolOLUfcx4, true)
		assert.equal(boolYnEfT4P, true)
		assert.equal(boolgbnbEZL, true)
		assert.equal(int256GYsFr0, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BazwV81cjm = await Baz.new({from: accounts[1]});
		const intHqZXQFt = BigInt("-676")
		const intKIAoNVH = BigInt("725")
		const intpNlvpCy = BigInt("-1860")
		const int256kwVyAgk = await BazwV81cjm.baz.call(intpNlvpCy, intKIAoNVH, intHqZXQFt, {from: accounts[5]});
		const boolStQf9Aq = await BazwV81cjm.echidna_all_states.call({from: accounts[3]});
		const boolTpH0pnl = await BazwV81cjm.echidna_all_states.call({from: accounts[0]});
		const boolUPhWn9r = await BazwV81cjm.echidna_all_states.call({from: accounts[5]});

		assert.equal(boolStQf9Aq, true)
		assert.equal(boolTpH0pnl, true)
		assert.equal(boolUPhWn9r, true)
		assert.equal(int256kwVyAgk, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazVibuNg = await Baz.new({from: accounts[1]});
		const intmquP9DW = BigInt("-1658")
		const intJmWEby = BigInt("-1145")
		const inthkXvoqf = BigInt("-481")
		const intWyWCDSl = BigInt("-1110")
		const intXfuPjQG = BigInt("-1054")
		const intKMmXTJj = BigInt("-149")
		const inth2TJ6gq = BigInt("-1024")
		const intauZ1bQq = BigInt("1806")
		const intH8juH4 = BigInt("-1075")
		const int256OeoOWf1 = await BazVibuNg.baz.call(inthkXvoqf, intJmWEby, intmquP9DW, {from: accounts[1]});
		const boolsjS7Nar = await BazVibuNg.echidna_all_states.call({from: accounts[1]});
		const int256I3AfCpy = await BazVibuNg.baz.call(intKMmXTJj, intXfuPjQG, intWyWCDSl, {from: accounts[2]});
		const boold00myh8 = await BazVibuNg.echidna_all_states.call({from: accounts[3]});
		const boolAn7IlE = await BazVibuNg.echidna_all_states.call({from: accounts[1]});
		const int256cZ9MK9D = await BazVibuNg.baz.call(intH8juH4, intauZ1bQq, inth2TJ6gq, {from: accounts[4]});

		assert.equal(boolAn7IlE, true)
		assert.equal(boold00myh8, true)
		assert.equal(boolsjS7Nar, true)
		assert.equal(int256I3AfCpy, BigInt("1"))
		assert.equal(int256OeoOWf1, BigInt("1"))
		assert.equal(int256cZ9MK9D, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazgyfOoG = await Baz.new({from: accounts[3]});
		const intK4albGf = BigInt("1554")
		const intY0TMYFs = BigInt("-554")
		const intpbKtjms = BigInt("-1127")
		const intwKjzmRD = BigInt("698")
		const intS36M6zY = BigInt("-148")
		const intzC6wavb = BigInt("1244")
		const int256JlmlJCi = await BazgyfOoG.baz.call(intpbKtjms, intY0TMYFs, intK4albGf, {from: accounts[2]});
		const boolwIWLMqm = await BazgyfOoG.echidna_all_states.call({from: accounts[4]});
		const int256nLobWzg = await BazgyfOoG.baz.call(intzC6wavb, intS36M6zY, intwKjzmRD, {from: accounts[1]});
		const boolrNOJLwM = await BazgyfOoG.echidna_all_states.call({from: accounts[4]});

		assert.equal(boolrNOJLwM, true)
		assert.equal(boolwIWLMqm, true)
		assert.equal(int256JlmlJCi, BigInt("5"))
		assert.equal(int256nLobWzg, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazLsXMA5k = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intBQuWoVW = BigInt("-208")
		const inty6UwRVf = BigInt("1527")
		const intNZeVKwv = BigInt("831")
		const intvioHneW = BigInt("-903")
		const intrp5Qae0 = BigInt("-405")
		const intHEVike = BigInt("504")
		const boolVhLbg9 = await BazLsXMA5k.echidna_all_states.call({from: accounts[0]});
		const int256m7wAjEj = await BazLsXMA5k.baz.call(intNZeVKwv, inty6UwRVf, intBQuWoVW, {from: accounts[1]});
		const int256CbKvPmV = await BazLsXMA5k.baz.call(intHEVike, intrp5Qae0, intvioHneW, {from: accounts[0]});
	});

	it('test for Baz', async () => {
		const Bazrb2zhZv = await Baz.new({from: accounts[2]});
		const intft1hNKy = BigInt("-331")
		const intUfA9acJ = BigInt("1384")
		const intRRqkyc3 = BigInt("-714")
		const intGjnL6kD = BigInt("1705")
		const intC5soyiK = BigInt("-990")
		const intQMqXtw9 = BigInt("2046")
		const intJvPZd2y = BigInt("-1672")
		const intgM1USH8 = BigInt("291")
		const intNOwPoAE = BigInt("42")
		const boolxayZ4Zh = await Bazrb2zhZv.echidna_all_states.call({from: accounts[1]});
		const boolFdGG9J = await Bazrb2zhZv.echidna_all_states.call({from: accounts[3]});
		const boolTY3SAe4 = await Bazrb2zhZv.echidna_all_states.call({from: accounts[3]});
		const boolQoyvuzT = await Bazrb2zhZv.echidna_all_states.call({from: accounts[1]});
		const boolnpKqR4c = await Bazrb2zhZv.echidna_all_states.call({from: accounts[1]});
		const int256GcYZ6v = await Bazrb2zhZv.baz.call(intRRqkyc3, intUfA9acJ, intft1hNKy, {from: accounts[1]});
		const boolZg13zXz = await Bazrb2zhZv.echidna_all_states.call({from: accounts[5]});
		const boolsjiGhtu = await Bazrb2zhZv.echidna_all_states.call({from: accounts[4]});
		const int256jYwuzW = await Bazrb2zhZv.baz.call(intQMqXtw9, intC5soyiK, intGjnL6kD, {from: accounts[1]});
		const int256sIU0hIp = await Bazrb2zhZv.baz.call(intNOwPoAE, intgM1USH8, intJvPZd2y, {from: accounts[1]});

		assert.equal(boolFdGG9J, true)
		assert.equal(boolQoyvuzT, true)
		assert.equal(boolTY3SAe4, true)
		assert.equal(boolZg13zXz, true)
		assert.equal(boolnpKqR4c, true)
		assert.equal(boolsjiGhtu, true)
		assert.equal(boolxayZ4Zh, true)
		assert.equal(int256GcYZ6v, BigInt("4"))
		assert.equal(int256jYwuzW, BigInt("5"))
		assert.equal(int256sIU0hIp, BigInt("2"))
	});
})