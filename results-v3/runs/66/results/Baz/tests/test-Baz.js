const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazZXTrzp1 = await Baz.new({from: accounts[5]});
		const intexSjzOd = BigInt("883")
		const intb9QXzQs = BigInt("866")
		const intoIeOUEg = BigInt("1815")
		const intBRHfwjH = BigInt("-676")
		const intxl5agac = BigInt("453")
		const inttHM2IMZ = BigInt("-1465")
		const intBkANB3K = BigInt("-1923")
		const intsSROTq = BigInt("-1535")
		const intYFPIB6g = BigInt("1585")
		const boolcTuyaSd = await BazZXTrzp1.echidna_all_states.call({from: accounts[4]});
		const boolgx16pcC = await BazZXTrzp1.echidna_all_states.call({from: accounts[2]});
		const boolU3Gt2LQ = await BazZXTrzp1.echidna_all_states.call({from: accounts[2]});
		const int256f6RmMmg = await BazZXTrzp1.baz.call(intoIeOUEg, intb9QXzQs, intexSjzOd, {from: accounts[3]});
		const int256zcrFP6D = await BazZXTrzp1.baz.call(inttHM2IMZ, intxl5agac, intBRHfwjH, {from: accounts[0]});
		const int256vNiTrz = await BazZXTrzp1.baz.call(intYFPIB6g, intsSROTq, intBkANB3K, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolU3Gt2LQ, true)
		assert.equal(boolcTuyaSd, true)
		assert.equal(boolgx16pcC, true)
		assert.equal(int256f6RmMmg, BigInt("5"))
		assert.equal(int256vNiTrz, BigInt("1"))
		assert.equal(int256zcrFP6D, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BazpOIShw7 = await Baz.new({from: accounts[3]});
		const inteFKsOhQ = BigInt("-53")
		const intFLe5AyU = BigInt("903")
		const intmg4kFK2 = BigInt("-53")
		const boolptF5E5 = await BazpOIShw7.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});
		const int256SBXu5LG = await BazpOIShw7.baz.call(intmg4kFK2, intFLe5AyU, inteFKsOhQ, {from: accounts[3]});
		const boolZrRnmou = await BazpOIShw7.echidna_all_states.call({from: accounts[2]});
		const boolwPWdKLC = await BazpOIShw7.echidna_all_states.call({from: accounts[0]});
		const booltZ13wP2 = await BazpOIShw7.echidna_all_states.call({from: accounts[1]});

		assert.equal(boolZrRnmou, true)
		assert.equal(boolptF5E5, true)
		assert.equal(booltZ13wP2, true)
		assert.equal(boolwPWdKLC, true)
		assert.equal(int256SBXu5LG, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazpsFprWh = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intFi0reWl = BigInt("-754")
		const intjI3u2u8 = BigInt("-30")
		const intauKUgg = BigInt("31")
		const intu0T7fkc = BigInt("-117")
		const intR2O0fY = BigInt("195")
		const intFD1iWLp = BigInt("-1157")
		const intM9HZ1AK = BigInt("-359")
		const intMcg5v4D = BigInt("94")
		const intMDqGl1i = BigInt("-494")
		const intmeFI4ah = BigInt("1640")
		const intf8hIras = BigInt("833")
		const intSrVKhRd = BigInt("-1972")
		const intLqBvPgR = BigInt("-1504")
		const intxYblBpM = BigInt("743")
		const intR16P7j0 = BigInt("-1919")
		const int256k8J07Pe = await BazpsFprWh.baz.call(intauKUgg, intjI3u2u8, intFi0reWl, {from: accounts[5]});
		const boolu2S56H9 = await BazpsFprWh.echidna_all_states.call({from: accounts[3]});
		const int256ggjiIkS = await BazpsFprWh.baz.call(intFD1iWLp, intR2O0fY, intu0T7fkc, {from: accounts[4]});
		const int256rRDQQds = await BazpsFprWh.baz.call(intMDqGl1i, intMcg5v4D, intM9HZ1AK, {from: accounts[0]});
		const int256klo33iL = await BazpsFprWh.baz.call(intSrVKhRd, intf8hIras, intmeFI4ah, {from: accounts[0]});
		const int256JjW7Rj4 = await BazpsFprWh.baz.call(intR16P7j0, intxYblBpM, intLqBvPgR, {from: accounts[2]});
	});

	it('test for Baz', async () => {
		const BazZq6yiCs = await Baz.new({from: accounts[2]});
		const inthGeJHSz = BigInt("-603")
		const intT6LAyLE = BigInt("579")
		const intNxqLx6U = BigInt("42")
		const int256rMFrpkw = await BazZq6yiCs.baz.call(intNxqLx6U, intT6LAyLE, inthGeJHSz, {from: accounts[2]});
		const boolNn0pS18 = await BazZq6yiCs.echidna_all_states.call({from: accounts[4]});

		assert.equal(boolNn0pS18, true)
		assert.equal(int256rMFrpkw, BigInt("2"))
	});
})