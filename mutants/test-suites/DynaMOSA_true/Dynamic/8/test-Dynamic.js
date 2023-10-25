const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicRbuCmgz = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintz9Wyfj7 = BigInt("904")
		const stringLuhv6Z6 = "ZBGinji2UusjPf3pvpt7Xz1ImVU4EazCDATdxz2CR8iTR4QLUgikySeU5axdkXfSeeMpwvPTGyjjRofm"
		const uintjbQAgFC = BigInt("1085")
		const boolsjKw2iL = await DynamicRbuCmgz.echidna_test.call({from: accounts[1]});
		const boolEcgmuKG = await DynamicRbuCmgz.echidna_test.call({from: accounts[3]});
		const boolJmzljBu = await DynamicRbuCmgz.echidna_test.call({from: accounts[2]});
		const boolkp01pPC = await DynamicRbuCmgz.yolo.call(uintjbQAgFC, stringLuhv6Z6, uintz9Wyfj7, {from: accounts[4]});
		const booldOKBQ64 = await DynamicRbuCmgz.echidna_test.call({from: accounts[0]});
		const boolAkfXMxa = await DynamicRbuCmgz.echidna_test.call({from: accounts[3]});
	});

	it('test for Dynamic', async () => {
		const DynamicDnzH6zb = await Dynamic.new({from: accounts[2]});
		const uintdRvm9BO = BigInt("811")
		const stringDU5qCTP = "xKuSQFAeAKNotMWWh20k1dKJpmBiXDSFxjlmPlpxJizMrBVBOMHhItybTUvqpPh5qbJlKztwfOg56fuIw3aw4iHY6IlUuSfQS"
		const uintZZTUMZU = BigInt("1872")
		const uintR9WZOTO = BigInt("240")
		const stringZt0XXz7 = "o"
		const uintWhEnfjg = BigInt("1103")
		const uintmozksx = BigInt("1989")
		const stringuNwEBxZ = "vhBcE3"
		const uintw00DE76 = BigInt("1475")
		const boolfeHTjI0 = await DynamicDnzH6zb.yolo.call(uintZZTUMZU, stringDU5qCTP, uintdRvm9BO, {from: accounts[3]});
		const boolhnmvG1a = await DynamicDnzH6zb.yolo.call(uintWhEnfjg, stringZt0XXz7, uintR9WZOTO, {from: accounts[5]});
		const boolMNwUFo3 = await DynamicDnzH6zb.echidna_test.call({from: accounts[3]});
		const boolEexRjMy = await DynamicDnzH6zb.yolo.call(uintw00DE76, stringuNwEBxZ, uintmozksx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolEexRjMy, true)
		assert.equal(boolMNwUFo3, true)
		assert.equal(boolfeHTjI0, true)
		assert.equal(boolhnmvG1a, true)
	});
})