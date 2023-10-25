const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2VkGSfCM = await BTCParamV2.new({from: accounts[3]});
		const uintypsYfRg = BigInt("1183")
		const addressViQigYs = accounts[5]
//		const uint256AMR3mFt = await BTCParamV2VkGSfCM.btcIncomePerTPerSecInWei.call({from: accounts[3]});
//		const uint256k482PG = await BTCParamV2VkGSfCM.setBtcBlockReward.call(uintypsYfRg, {from: "0x0000000000000000000000000000000000000001"});
//		const addressIv7abgB = await BTCParamV2VkGSfCM.setParamSetter.call(addressViQigYs, {from: accounts[2]});
//		await BTCParamV2VkGSfCM.updateBtcPrice.call({from: accounts[2]});

		await expect(BTCParamV2VkGSfCM.btcIncomePerTPerSecInWei.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2nE7MuZo = await BTCParamV2.new({from: accounts[2]});
		const uintWvVV9R = BigInt("1921")
		const uintbDtwOdh = BigInt("654")
//		const uint256V5oo7e = await BTCParamV2nE7MuZo.setBtcNetDiff.call(uintWvVV9R, {from: accounts[1]});
//		const uint256iI528z2 = await BTCParamV2nE7MuZo.setBtcNetDiff.call(uintbDtwOdh, {from: accounts[1]});

		await expect(BTCParamV2nE7MuZo.setBtcNetDiff.call(uintWvVV9R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2ZK1P92 = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstSPTeSk = accounts[0]
		const uintI2fwBV = BigInt("559")
		const addressIekr0ns = accounts[4]
		const address6b9iUq = accounts[4]
		await BTCParamV2ZK1P92.onlyOwner.call({from: accounts[3]});
		const addressXqwoQr1 = await BTCParamV2ZK1P92.addListener.call(addresstSPTeSk, {from: accounts[4]});
		const uint256kopRkXK = await BTCParamV2ZK1P92.btcPrice.call({from: accounts[3]});
		const uint256shpHbq = await BTCParamV2ZK1P92.setBtcTxFeeRewardRate.call(uintI2fwBV, {from: accounts[1]});
		const addressGVtt7tN = await BTCParamV2ZK1P92.addListener.call(addressIekr0ns, {from: "0x0000000000000000000000000000000000000001"});
		const boolKv0PNe0 = await BTCParamV2ZK1P92.removeListener.call(address6b9iUq, {from: accounts[2]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2RF9P4lp = await BTCParamV2.new({from: accounts[1]});
		const addressHHwZGai = "0x0000000000000000000000000000000000000001"
		const addressVF7RMOe = accounts[3]
		const addressBJRN5rK = accounts[0]
		const addresskh08lQh = "0x0000000000000000000000000000000000000001"
//		const addressJkjTK9E = await BTCParamV2RF9P4lp.setParamSetter.call(addressHHwZGai, {from: accounts[1]});
//		const addressGcL3ygp = await BTCParamV2RF9P4lp.transferOwnership.call(addressVF7RMOe, {from: accounts[3]});
//		const addressYtvyCYC = await BTCParamV2RF9P4lp.transferOwnership.call(addressBJRN5rK, {from: accounts[5]});
//		await BTCParamV2RF9P4lp.onlyOwner.call({from: accounts[2]});
//		const addressvZROr7w = await BTCParamV2RF9P4lp.setParamSetter.call(addresskh08lQh, {from: accounts[5]});

		await expect(BTCParamV2RF9P4lp.setParamSetter.call(addressHHwZGai, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2GrgkNiO = await BTCParamV2.new({from: accounts[1]});
		const addressVMtKzme = accounts[0]
//		await BTCParamV2GrgkNiO.onlyParamSetter.call({from: accounts[3]});
//		const boolJ779AIE = await BTCParamV2GrgkNiO.removeListener.call(addressVMtKzme, {from: accounts[5]});
//		await BTCParamV2GrgkNiO.onlyOwner.call({from: accounts[0]});
//		await BTCParamV2GrgkNiO.updateBtcPrice.call({from: accounts[0]});

		await expect(BTCParamV2GrgkNiO.onlyParamSetter.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2nE7MuZo = await BTCParamV2.new({from: accounts[2]});
		const uintRywx0TG = BigInt("1029")
		const uintMK3ZEtM = BigInt("1881")
		const uint256Irg3bhv = await BTCParamV2nE7MuZo.btcPrice.call({from: accounts[3]});
//		const uint256CDmNBuS = await BTCParamV2nE7MuZo.setBtcTxFeeRewardRate.call(uintRywx0TG, {from: accounts[4]});
//		const uint256V5oo7e = await BTCParamV2nE7MuZo.setBtcNetDiff.call(uintMK3ZEtM, {from: accounts[1]});
//		const uint256s7idbFS = await BTCParamV2nE7MuZo.btcIncomePerTPerSecInWei.call({from: accounts[2]});

		assert.equal(uint256Irg3bhv, BigInt("0"))
		await expect(BTCParamV2nE7MuZo.setBtcTxFeeRewardRate.call(uintRywx0TG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2nE7MuZo = await BTCParamV2.new({from: accounts[2]});
		const boolobjuki2 = false
		const addressAoBX5On = accounts[1]
		const uintcox4K9G = BigInt("15")
		const uintlfooH1b = BigInt("1597")
		const addressDPUkkHM = accounts[1]
		const addressT6sBRQG = accounts[4]
		const uintnoFpXev = BigInt("747")
		const uintv0ilJ4 = BigInt("1873")
//		const addressLf9Mi2W = await BTCParamV2nE7MuZo.initialize.call(addressT6sBRQG, addressDPUkkHM, uintlfooH1b, uintcox4K9G, addressAoBX5On, boolobjuki2, {from: accounts[4]});
//		const uint256PLF7DGl = await BTCParamV2nE7MuZo.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintnoFpXev, {from: accounts[1]});
//		const uint256V5oo7e = await BTCParamV2nE7MuZo.setBtcNetDiff.call(uintv0ilJ4, {from: accounts[1]});

		await expect(BTCParamV2nE7MuZo.initialize.call(addressT6sBRQG, addressDPUkkHM, uintlfooH1b, uintcox4K9G, addressAoBX5On, boolobjuki2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})