const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2oWPYzqu = await YieldFarmLP2.new({from: accounts[0]});
		const addressQ7N6blW = accounts[4]
		const uinteJEKwdy = BigInt("1813")
		const addressefd7t2T = "0x0000000000000000000000000000000000000001"
		const uintcD0HlKI = await YieldFarmLP2oWPYzqu.massHarvest.call({from: accounts[2]});
		const uintfdKVCil = await YieldFarmLP2oWPYzqu.massHarvest.call({from: accounts[0]});
		const uinttqbuYMT = await YieldFarmLP2oWPYzqu.claimable.call(addressQ7N6blW, {from: accounts[4]});
		const uinte0erucV = await YieldFarmLP2oWPYzqu.getEpochStake.call(addressefd7t2T, uinteJEKwdy, {from: accounts[2]});
		const uintB3kRccA = await YieldFarmLP2oWPYzqu.massHarvest.call({from: accounts[2]});

		await expect(YieldFarmLP2oWPYzqu.massHarvest.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2lrmFaqT = await YieldFarmLP2.new({from: accounts[1]});
		const uintMwB6NE = BigInt("373")
		const uintW6ydvOR = BigInt("1385")
		const addresswdGWNpm = accounts[4]
		const uintKmSlCv = await YieldFarmLP2lrmFaqT.getPoolSize.call(uintMwB6NE, {from: accounts[0]});
		const uintIqSmwOY = await YieldFarmLP2lrmFaqT.getEpochStake.call(addresswdGWNpm, uintW6ydvOR, {from: accounts[3]});
		const uintsWnev2q = await YieldFarmLP2lrmFaqT.getCurrentEpoch.call({from: accounts[2]});

		await expect(YieldFarmLP2lrmFaqT.getPoolSize.call(uintMwB6NE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2RWLGf0n = await YieldFarmLP2.new({from: accounts[4]});
		const addressVG6HX3 = accounts[2]
		const address1GJPSW = accounts[4]
		const addresskzO4p2J = accounts[4]
		const addressUrjiYgY = "0x0000000000000000000000000000000000000001"
		const addressLG6c5Ys = accounts[1]
		const addresssVbky5 = accounts[0]
		const addressks4ftdl = accounts[2]
		const address6Q7nFY = accounts[3]
		const addressPo2QNck = accounts[2]
		const addressfOwfOgv = await YieldFarmLP2RWLGf0n.initialize.call(addressUrjiYgY, addresskzO4p2J, address1GJPSW, addressVG6HX3, {from: accounts[0]});
		const uintyzXIXhc = await YieldFarmLP2RWLGf0n.getCurrentEpoch.call({from: accounts[0]});
		const uintjwxsETw = await YieldFarmLP2RWLGf0n.claimable.call(addressLG6c5Ys, {from: accounts[1]});
		const addressr3hCguA = await YieldFarmLP2RWLGf0n.initialize.call(addressPo2QNck, address6Q7nFY, addressks4ftdl, addresssVbky5, {from: accounts[2]});
		const uintkBYw0Z = await YieldFarmLP2RWLGf0n.getCurrentEpoch.call({from: accounts[2]});

		await expect(YieldFarmLP2RWLGf0n.initialize.call(addressUrjiYgY, addresskzO4p2J, address1GJPSW, addressVG6HX3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2JAI3jPp = await YieldFarmLP2.new({from: accounts[4]});
		const uintUvvKmk3 = BigInt("1718")
		const uintXq13k0 = BigInt("998")
		const uintxUXcJ2J = BigInt("1326")
		const addressf0OBc67 = accounts[0]
		const uintRpvWOpi = await YieldFarmLP2JAI3jPp.harvest.call(uintUvvKmk3, {from: accounts[2]});
		const uinthlRvGbX = await YieldFarmLP2JAI3jPp.harvest.call(uintXq13k0, {from: accounts[3]});
		const uintRH6mfzV = await YieldFarmLP2JAI3jPp.massHarvest.call({from: accounts[3]});
		const uinttBxXjUT = await YieldFarmLP2JAI3jPp.getEpochStake.call(addressf0OBc67, uintxUXcJ2J, {from: accounts[3]});
		const uintRf3Cuwz = await YieldFarmLP2JAI3jPp.getCurrentEpoch.call({from: accounts[0]});

		await expect(YieldFarmLP2JAI3jPp.harvest.call(uintUvvKmk3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2K06P2Wp = await YieldFarmLP2.new({from: accounts[0]});
		const addressjlRy2Z = accounts[4]
		const addressN4OrWGc = accounts[3]
		const addresskzRrFRY = accounts[5]
		const addresseRF8TxC = accounts[1]
		const addressW7jBKNi = accounts[1]
		const uintqRGFKyk = await YieldFarmLP2K06P2Wp.claimable.call(addressjlRy2Z, {from: accounts[0]});
		const uintlyA3dCT = await YieldFarmLP2K06P2Wp.massHarvest.call({from: accounts[3]});
		const addressaIohUdv = await YieldFarmLP2K06P2Wp.initialize.call(addressW7jBKNi, addresseRF8TxC, addresskzRrFRY, addressN4OrWGc, {from: accounts[1]});

		await expect(YieldFarmLP2K06P2Wp.claimable.call(addressjlRy2Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2TFfRKdp = await YieldFarmLP2.new({from: accounts[1]});
		const addressOySrTko = accounts[1]
		const addressNNYDU3 = accounts[5]
		const uintSZsbWnz = await YieldFarmLP2TFfRKdp.getCurrentEpoch.call({from: accounts[1]});
		const uintgSKK0x = await YieldFarmLP2TFfRKdp.claimable.call(addressOySrTko, {from: accounts[4]});
		const uintkctk9xv = await YieldFarmLP2TFfRKdp.claimable.call(addressNNYDU3, {from: accounts[2]});
		const uintxOppx7M = await YieldFarmLP2TFfRKdp.massHarvest.call({from: accounts[3]});
		const uintW9sWw80 = await YieldFarmLP2TFfRKdp.getCurrentEpoch.call({from: accounts[3]});

		await expect(YieldFarmLP2TFfRKdp.getCurrentEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2HpRCu7m = await YieldFarmLP2.new({from: accounts[0]});
		const uintbHMOLjs = BigInt("1406")
		const addresso1izFsK = accounts[0]
		const addressN9NPdUE = accounts[4]
		const uintI5xQbeM = BigInt("369")
		const addressLwmJvUV = accounts[2]
		const addressHM3JiOK = "0x0000000000000000000000000000000000000001"
		const uintyjEgXUT = await YieldFarmLP2HpRCu7m.getEpochStake.call(addresso1izFsK, uintbHMOLjs, {from: accounts[1]});
		const uintad9Y9oK = await YieldFarmLP2HpRCu7m.massHarvest.call({from: accounts[4]});
		const uintLo18Gf = await YieldFarmLP2HpRCu7m.claimable.call(addressN9NPdUE, {from: accounts[3]});
		const uintjUchy0d = await YieldFarmLP2HpRCu7m.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});
		const uintFFF2BGx = await YieldFarmLP2HpRCu7m.getEpochStake.call(addressLwmJvUV, uintI5xQbeM, {from: accounts[0]});
		const uintDsymmbj = await YieldFarmLP2HpRCu7m.claimable.call(addressHM3JiOK, {from: accounts[5]});

		await expect(YieldFarmLP2HpRCu7m.getEpochStake.call(addresso1izFsK, uintbHMOLjs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2LyE7p2j = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintD5BKbtC = BigInt("384")
		const addressYfeM0tD = accounts[0]
		const uintKlts263 = BigInt("1869")
		const uintKrfNgMg = BigInt("661")
		const addressNzt518 = accounts[0]
		const uintEI4Hzq1 = BigInt("1067")
		const uintQzj4zNb = await YieldFarmLP2LyE7p2j.getEpochStake.call(addressYfeM0tD, uintD5BKbtC, {from: "0x0000000000000000000000000000000000000001"});
		const uintOFAU5Uo = await YieldFarmLP2LyE7p2j.getCurrentEpoch.call({from: accounts[4]});
		const uintXGgxsSS = await YieldFarmLP2LyE7p2j.getPoolSize.call(uintKlts263, {from: accounts[3]});
		const uintIlmGRYw = await YieldFarmLP2LyE7p2j.getEpochStake.call(addressNzt518, uintKrfNgMg, {from: accounts[1]});
		const uintei1bylZ = await YieldFarmLP2LyE7p2j.massHarvest.call({from: accounts[3]});
		const uintZ3zBZQB = await YieldFarmLP2LyE7p2j.harvest.call(uintEI4Hzq1, {from: accounts[2]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Z1QrjTN = await YieldFarmLP2.new({from: accounts[3]});
		const uintTl7C3vf = await YieldFarmLP2Z1QrjTN.userLastEpochIdHarvested.call({from: accounts[3]});
		const uintsWuun7f = await YieldFarmLP2Z1QrjTN.massHarvest.call({from: accounts[2]});

		assert.equal(uintTl7C3vf, BigInt("0"))
		await expect(YieldFarmLP2Z1QrjTN.massHarvest.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})