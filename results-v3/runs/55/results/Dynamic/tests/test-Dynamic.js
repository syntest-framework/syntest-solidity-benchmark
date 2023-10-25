const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicPYErP4G = await Dynamic.new({from: accounts[1]});
		const boolJDfIJM = await DynamicPYErP4G.echidna_test.call({from: accounts[4]});
		const boolt5QBQye = await DynamicPYErP4G.echidna_test.call({from: accounts[2]});
		const boolLnMsDWF = await DynamicPYErP4G.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});
		const boolQnayrjV = await DynamicPYErP4G.echidna_test.call({from: accounts[4]});

		assert.equal(boolJDfIJM, true)
		assert.equal(boolLnMsDWF, true)
		assert.equal(boolQnayrjV, true)
		assert.equal(boolt5QBQye, true)
	});

	it('test for Dynamic', async () => {
		const Dynamick8dKJ33 = await Dynamic.new({from: accounts[4]});
		const uintPHTpepH = BigInt("884")
		const stringAegnOBs = "l2bbaqCwToRYhwgv2DBfbPf2jQjXvNuPMiTqW"
		const uintipunoeO = BigInt("595")
		const uinttCJJw1U = BigInt("224")
		const stringjF9HSPS = "MRDadKmoaaBlzRCA5CDOYu6xaqQbUmXBhhkjoOA2706E"
		const uintdLAzhKU = BigInt("728")
		const boolKvHizMj = await Dynamick8dKJ33.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTg8jwxe = await Dynamick8dKJ33.yolo.call(uintipunoeO, stringAegnOBs, uintPHTpepH, {from: accounts[2]});
		const boolTK65R81 = await Dynamick8dKJ33.echidna_test.call({from: accounts[0]});
		const boolrYXHhoY = await Dynamick8dKJ33.yolo.call(uintdLAzhKU, stringjF9HSPS, uinttCJJw1U, {from: accounts[3]});
		const boolVaQ3CKQ = await Dynamick8dKJ33.echidna_test.call({from: accounts[1]});

		assert.equal(boolKvHizMj, true)
		assert.equal(boolTK65R81, true)
		assert.equal(boolTg8jwxe, true)
		assert.equal(boolVaQ3CKQ, true)
		assert.equal(boolrYXHhoY, true)
	});

	it('test for Dynamic', async () => {
		const DynamicUEPo3yS = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const booleOf0E3b = await DynamicUEPo3yS.echidna_test.call({from: accounts[1]});
		const booluthx8NB = await DynamicUEPo3yS.echidna_test.call({from: accounts[4]});
	});
})