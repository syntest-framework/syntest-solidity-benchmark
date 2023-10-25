const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintNSWxich = BigInt("538")
		const BancorV2_ZapIn_General_V1_1EfYdYjU = await BancorV2_ZapIn_General_V1_1.new(uintNSWxich, {from: accounts[4]});
		const boolRMFpuUY = await BancorV2_ZapIn_General_V1_1EfYdYjU.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1EfYdYjU.nonReentrant.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1EfYdYjU.withdraw.call({from: accounts[0]});
		const addressUvr8O59 = await BancorV2_ZapIn_General_V1_1EfYdYjU.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1EfYdYjU.toggleContractActive.call({from: accounts[5]});
		const boolS8Q4IxB = await BancorV2_ZapIn_General_V1_1EfYdYjU.isOwner.call({from: accounts[2]});

		assert.equal(boolRMFpuUY, false)
		await expect(BancorV2_ZapIn_General_V1_1EfYdYjU.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintmFAsKqA = BigInt("1065")
		const BancorV2_ZapIn_General_V1_1PJanxq2 = await BancorV2_ZapIn_General_V1_1.new(uintmFAsKqA, {from: accounts[1]});
		const addressXBVwQWj = accounts[1]
		const addresshsCdxE7 = "0x0000000000000000000000000000000000000001"
		const addressSDSadA = "0x0000000000000000000000000000000000000001"
		const addressS8nDyc = accounts[0]
		const addresspFagrln = await BancorV2_ZapIn_General_V1_1PJanxq2.owner.call({from: accounts[5]});
		const addressFdG6QG9 = await BancorV2_ZapIn_General_V1_1PJanxq2.transferOwnership.call(addressXBVwQWj, {from: accounts[1]});
		const addressOM5XM04 = await BancorV2_ZapIn_General_V1_1PJanxq2.inCaseTokengetsStuck.call(addresshsCdxE7, {from: accounts[1]});
		const addressgFIo97 = await BancorV2_ZapIn_General_V1_1PJanxq2.transferOwnership.call(addressSDSadA, {from: "0x0000000000000000000000000000000000000001"});
		const addressfpDZ1N = await BancorV2_ZapIn_General_V1_1PJanxq2.toPayable.call(addressS8nDyc, {from: accounts[4]});

		assert.equal(addresspFagrln, 0x57CC6BE30DFC9018ccC1E276Ab79b3C2ef28D184)
		await expect(BancorV2_ZapIn_General_V1_1PJanxq2.inCaseTokengetsStuck.call(addresshsCdxE7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintcH3Fg6N = BigInt("1899")
		const BancorV2_ZapIn_General_V1_1vTlqhZk = await BancorV2_ZapIn_General_V1_1.new(uintcH3Fg6N, {from: accounts[2]});
		const bytey4Qc7SS = "0x1e1c1e11111f0618"
		const addressGZoeh9j = accounts[0]
		const addressUs50Paf = accounts[1]
		const uintcU9fcj1 = BigInt("279")
		const uintIMycA1g = BigInt("1022")
		const addressjq5d4m8 = accounts[0]
		const addressQeLQPoj = accounts[4]
		const addressR6KdGix = accounts[3]
		const addresstuTqsOB = accounts[0]
		const uint256X2xdRL = await BancorV2_ZapIn_General_V1_1vTlqhZk.ZapInSingleSided.call(addressR6KdGix, addressQeLQPoj, addressjq5d4m8, uintIMycA1g, uintcU9fcj1, addressUs50Paf, addressGZoeh9j, bytey4Qc7SS, {from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1vTlqhZk.onlyOwner.call({from: accounts[4]});
		const addressGk5Ebzn = await BancorV2_ZapIn_General_V1_1vTlqhZk.transferOwnership.call(addresstuTqsOB, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1vTlqhZk.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1vTlqhZk.ZapInSingleSided.call(addressR6KdGix, addressQeLQPoj, addressjq5d4m8, uintIMycA1g, uintcU9fcj1, addressUs50Paf, addressGZoeh9j, bytey4Qc7SS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintu2el84j = BigInt("1766")
		const BancorV2_ZapIn_General_V1_1Q6KDdjK = await BancorV2_ZapIn_General_V1_1.new(uintu2el84j, {from: accounts[0]});
		const addressdFa7adY = "0x0000000000000000000000000000000000000001"
		const byteY7661oe = "0x0619"
		const addressYBCDPag = accounts[5]
		const addressrykvpZZ = accounts[3]
		const uintFa8JVKa = BigInt("33")
		const uintzWIqIIN = BigInt("1084")
		const addressLHbP2OS = accounts[3]
		const address7cFH9E = accounts[1]
		const addressGorKoc = accounts[1]
		await BancorV2_ZapIn_General_V1_1Q6KDdjK.renounceOwnership.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1Q6KDdjK.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressWtAYAQQ = await BancorV2_ZapIn_General_V1_1Q6KDdjK.transferOwnership.call(addressdFa7adY, {from: accounts[3]});
		const uint256G8OkJ0a = await BancorV2_ZapIn_General_V1_1Q6KDdjK.ZapInSingleSided.call(addressGorKoc, address7cFH9E, addressLHbP2OS, uintzWIqIIN, uintFa8JVKa, addressrykvpZZ, addressYBCDPag, byteY7661oe, {from: accounts[5]});
		const addressoiPuDU7 = await BancorV2_ZapIn_General_V1_1Q6KDdjK.owner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1Q6KDdjK.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintUXppFX9 = BigInt("375")
		const BancorV2_ZapIn_General_V1_1mgtsvFl = await BancorV2_ZapIn_General_V1_1.new(uintUXppFX9, {from: accounts[0]});
		const addressu2oVpJn = accounts[0]
		const uint0IIUT3 = BigInt("1122")
		const addressoViXHv = accounts[5]
		const addressoqJTYrQ = await BancorV2_ZapIn_General_V1_1mgtsvFl.owner.call({from: accounts[1]});
		const addressp3U6Iua = await BancorV2_ZapIn_General_V1_1mgtsvFl.transferOwnership.call(addressu2oVpJn, {from: accounts[3]});
		const uint16ezZkH1 = await BancorV2_ZapIn_General_V1_1mgtsvFl.set_new_goodwill.call(uint0IIUT3, {from: accounts[1]});
		const addressHq9ptwP = await BancorV2_ZapIn_General_V1_1mgtsvFl.inCaseTokengetsStuck.call(addressoViXHv, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1mgtsvFl.stopInEmergency.call({from: accounts[4]});

		assert.equal(addressoqJTYrQ, 0xD931dE09C1336FA37A0068669204F206F7EC6598)
		await expect(BancorV2_ZapIn_General_V1_1mgtsvFl.transferOwnership.call(addressu2oVpJn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintWviM2a2 = BigInt("549")
		const BancorV2_ZapIn_General_V1_1mPwVnSp = await BancorV2_ZapIn_General_V1_1.new(uintWviM2a2, {from: "0x0000000000000000000000000000000000000001"});
		const uinteKcgCE = BigInt("1946")
		const bytevt2lnu = "0x080306020e151120061e0e0c09"
		const addressxLvPGxf = accounts[3]
		const addressPGfPciy = accounts[3]
		const uint1Jr5Fw = BigInt("1431")
		const uintswGUO2 = BigInt("263")
		const addressSs4dXpQ = accounts[1]
		const addressP7iwHZp = accounts[2]
		const addressDA3yKxB = "0x0000000000000000000000000000000000000001"
		const addressa0jwup = accounts[5]
		const uint16sQC5Dh8 = await BancorV2_ZapIn_General_V1_1mPwVnSp.set_new_goodwill.call(uinteKcgCE, {from: accounts[0]});
		const uint256xapAhZD = await BancorV2_ZapIn_General_V1_1mPwVnSp.ZapInSingleSided.call(addressDA3yKxB, addressP7iwHZp, addressSs4dXpQ, uintswGUO2, uint1Jr5Fw, addressPGfPciy, addressxLvPGxf, bytevt2lnu, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1mPwVnSp.toggleContractActive.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1mPwVnSp.toggleContractActive.call({from: accounts[0]});
		const addressJOQRArM = await BancorV2_ZapIn_General_V1_1mPwVnSp.transferOwnership.call(addressa0jwup, {from: accounts[1]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintthgh0dt = BigInt("1273")
		const BancorV2_ZapIn_General_V1_1YsMnJRG = await BancorV2_ZapIn_General_V1_1.new(uintthgh0dt, {from: accounts[1]});
		const uintoPJwkf3 = BigInt("1973")
		const boolEjYlIm = await BancorV2_ZapIn_General_V1_1YsMnJRG.isOwner.call({from: accounts[0]});
		const uint16bCP1hH2 = await BancorV2_ZapIn_General_V1_1YsMnJRG.set_new_goodwill.call(uintoPJwkf3, {from: accounts[1]});

		assert.equal(boolEjYlIm, false)
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintAyDx6tA = BigInt("1273")
		const BancorV2_ZapIn_General_V1_1YsMnJRG = await BancorV2_ZapIn_General_V1_1.new(uintAyDx6tA, {from: accounts[1]});
		const boolEjYlIm = await BancorV2_ZapIn_General_V1_1YsMnJRG.isOwner.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1YsMnJRG.toggleContractActive.call({from: accounts[1]});

		assert.equal(boolEjYlIm, false)
		await expect(BancorV2_ZapIn_General_V1_1YsMnJRG.toggleContractActive.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintfeTfiMg = BigInt("1273")
		const BancorV2_ZapIn_General_V1_1YsMnJRG = await BancorV2_ZapIn_General_V1_1.new(uintfeTfiMg, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1YsMnJRG.withdraw.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1YsMnJRG.toggleContractActive.call({from: accounts[3]});
		const boolEjYlIm = await BancorV2_ZapIn_General_V1_1YsMnJRG.isOwner.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1YsMnJRG.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})