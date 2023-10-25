const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinYeLD5L = await MetaCoin.new({from: accounts[3]});
		const uintcUL8qEo = BigInt("1525")
		const addressNkBUybK = "0x0000000000000000000000000000000000000001"
		const uintvPXENpF = BigInt("69")
		const addressDaqCAn4 = accounts[4]
		const uintAvt3UO5 = BigInt("772")
		const addressiAbqVBr = accounts[0]
		const uintjPqtB33 = BigInt("835")
		const addresstE5b9jW = accounts[4]
		const booloR4V2O = await MetaCoinYeLD5L.sendCoin.call(addressNkBUybK, uintcUL8qEo, {from: accounts[5]});
		const boolfLC4h1a = await MetaCoinYeLD5L.sendCoin.call(addressDaqCAn4, uintvPXENpF, {from: accounts[4]});
		const boolpEbGehN = await MetaCoinYeLD5L.sendCoin.call(addressiAbqVBr, uintAvt3UO5, {from: accounts[4]});
		const boolcQ0dL6O = await MetaCoinYeLD5L.sendCoin.call(addresstE5b9jW, uintjPqtB33, {from: accounts[0]});

		assert.equal(boolcQ0dL6O, false)
		assert.equal(boolfLC4h1a, false)
		assert.equal(booloR4V2O, false)
		assert.equal(boolpEbGehN, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinv4JMq6 = await MetaCoin.new({from: accounts[2]});
		const uintiP7Z8P0 = BigInt("555")
		const address0u4OTA = accounts[3]
		const uinta9DEVJI = BigInt("1331")
		const addressauyeXi1 = accounts[2]
		const uintnvlvj0C = BigInt("802")
		const addressbqG514l = accounts[4]
		const uintyk2hLl = BigInt("7")
		const addressZPDNkJ = accounts[4]
		const uintvWx5ElX = BigInt("1569")
		const addresskvDc8T4 = accounts[2]
		const boolLcGVRew = await MetaCoinv4JMq6.sendCoin.call(address0u4OTA, uintiP7Z8P0, {from: "0x0000000000000000000000000000000000000001"});
		const boolQ88FBJB = await MetaCoinv4JMq6.sendCoin.call(addressauyeXi1, uinta9DEVJI, {from: accounts[0]});
		const boolfVCSngp = await MetaCoinv4JMq6.sendCoin.call(addressbqG514l, uintnvlvj0C, {from: accounts[5]});
		const boolXF9bOFC = await MetaCoinv4JMq6.sendCoin.call(addressZPDNkJ, uintyk2hLl, {from: accounts[2]});
		const boolAh3Qiyk = await MetaCoinv4JMq6.sendCoin.call(addresskvDc8T4, uintvWx5ElX, {from: accounts[4]});

		assert.equal(boolAh3Qiyk, false)
		assert.equal(boolLcGVRew, false)
		assert.equal(boolQ88FBJB, false)
		assert.equal(boolXF9bOFC, true)
		assert.equal(boolfVCSngp, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinDOz44j0 = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzb75Bwf = BigInt("1731")
		const addresseU9uL6 = accounts[4]
		const uintyj7F7a = BigInt("1977")
		const address9DglYF = accounts[2]
		const boolwm8787v = await MetaCoinDOz44j0.sendCoin.call(addresseU9uL6, uintzb75Bwf, {from: accounts[4]});
		const boolKI0lddv = await MetaCoinDOz44j0.sendCoin.call(address9DglYF, uintyj7F7a, {from: accounts[4]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinv4JMq6 = await MetaCoin.new({from: accounts[2]});
		const uintDDWj6bJ = BigInt("555")
		const addressJAsJNAe = accounts[3]
		const uintbzJSlGQ = BigInt("802")
		const addressFUtYt4H = accounts[4]
		const uintuaFDe68 = BigInt("4")
		const addressvAyKQPj = accounts[4]
		const uintWuwRe0z = BigInt("1569")
		const addressO2BGY9 = accounts[2]
		const boolLcGVRew = await MetaCoinv4JMq6.sendCoin.call(addressJAsJNAe, uintDDWj6bJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolfVCSngp = await MetaCoinv4JMq6.sendCoin.call(addressFUtYt4H, uintbzJSlGQ, {from: accounts[5]});
		const boolXF9bOFC = await MetaCoinv4JMq6.sendCoin.call(addressvAyKQPj, uintuaFDe68, {from: accounts[2]});
		const boolAh3Qiyk = await MetaCoinv4JMq6.sendCoin.call(addressO2BGY9, uintWuwRe0z, {from: accounts[4]});

		assert.equal(boolAh3Qiyk, false)
		assert.equal(boolLcGVRew, false)
		assert.equal(boolXF9bOFC, true)
		assert.equal(boolfVCSngp, false)
	});
})