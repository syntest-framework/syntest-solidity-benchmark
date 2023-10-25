const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressRKJeKkk = accounts[3]
		const Layerxi9U2cFX = await Layerx.new(addressRKJeKkk, {from: accounts[4]});
		const addressnICTRgr = accounts[1]
		const uinteEMEBY = BigInt("902")
		const addressDHeay6 = accounts[5]
		const addressbm0UDwz = await Layerxi9U2cFX.setNewStakeCreator.call(addressnICTRgr, {from: accounts[0]});
		await Layerxi9U2cFX.f.call({from: accounts[1]});
		const boolzuMnHmI = await Layerxi9U2cFX.approve.call(addressDHeay6, uinteEMEBY, {from: accounts[4]});

		await expect(Layerxi9U2cFX.setNewStakeCreator.call(addressnICTRgr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressmmCrWv8 = accounts[0]
		const LayerxAB1JI06 = await Layerx.new(addressmmCrWv8, {from: accounts[0]});
		const uintm012LeS = BigInt("845")
		const uintvjZElv = BigInt("821")
		const addressjlhlT2h = accounts[4]
		const addresslaMIIYt = accounts[0]
		const addressgyGlNrs = accounts[3]
		const uintfVW9JFa = await LayerxAB1JI06.exist.call(uintm012LeS, {from: accounts[4]});
		await LayerxAB1JI06.paused.call({from: accounts[1]});
		const boolxoSYSfR = await LayerxAB1JI06.approve.call(addressjlhlT2h, uintvjZElv, {from: accounts[3]});
		const addresswj1HubR = await LayerxAB1JI06.setNewStakeCreator.call(addresslaMIIYt, {from: accounts[1]});
		const uintjl2MoHp = await LayerxAB1JI06.balanceOf.call(addressgyGlNrs, {from: accounts[1]});

		await expect(LayerxAB1JI06.exist.call(uintm012LeS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressOxEZv77 = accounts[3]
		const LayerxWaxbzbR = await Layerx.new(addressOxEZv77, {from: accounts[4]});
		const addressYE9CLYi = accounts[3]
		const addressSNJuBRT = accounts[4]
		await LayerxWaxbzbR.unlock.call({from: accounts[3]});
		const uintqf7vV49 = await LayerxWaxbzbR.allowance.call(addressSNJuBRT, addressYE9CLYi, {from: accounts[0]});

		await expect(LayerxWaxbzbR.unlock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressErYfGm3 = accounts[4]
		const LayerxAxpwGuq = await Layerx.new(addressErYfGm3, {from: "0x0000000000000000000000000000000000000001"});
		const uintXHaiKXr = BigInt("1649")
		await LayerxAxpwGuq.paused.call({from: accounts[2]});
		const uintsezSMro = await LayerxAxpwGuq.exist.call(uintXHaiKXr, {from: accounts[4]});
	});

	it('test for Layerx', async () => {
		const addressQ8tDJxn = accounts[1]
		const LayerxxWWlNwR = await Layerx.new(addressQ8tDJxn, {from: accounts[3]});
		const boolhEzLr8 = true
		const uintueOuly6 = BigInt("1105")
		const addressrgACmRT = accounts[0]
		const uintFrccpX = await LayerxxWWlNwR.totalSupply.call({from: accounts[0]});
		const boolePXeP4e = await LayerxxWWlNwR.setIsPaused.call(boolhEzLr8, {from: accounts[1]});
		const boolQ1NK0I = await LayerxxWWlNwR.approve.call(addressrgACmRT, uintueOuly6, {from: accounts[2]});
		const uintxtueCf3 = await LayerxxWWlNwR.totalSupply.call({from: accounts[3]});

		assert.equal(boolQ1NK0I, true)
		assert.equal(uintFrccpX, BigInt("40000000000000000000000"))
		assert.equal(uintxtueCf3, BigInt("40000000000000000000000"))
	});

	it('test for Layerx', async () => {
		const addresswmFD37 = accounts[3]
		const LayerxlhvqrhQ = await Layerx.new(addresswmFD37, {from: accounts[0]});
		const addressGflrEzk = accounts[2]
		const addressuixABi = accounts[1]
		const uintl2hB3wy = BigInt("1308")
		const addresswu1FZ9n = accounts[0]
		const uintz8ds4n4 = await LayerxlhvqrhQ.balanceOf.call(addressGflrEzk, {from: accounts[3]});
		const addressTbrdsH0 = await LayerxlhvqrhQ.transferOwnership.call(addressuixABi, {from: accounts[3]});
		const boolaykmewx = await LayerxlhvqrhQ.transfer.call(addresswu1FZ9n, uintl2hB3wy, {from: accounts[0]});

		assert.equal(uintz8ds4n4, BigInt("0"))
		await expect(LayerxlhvqrhQ.transfer.call(addresswu1FZ9n, uintl2hB3wy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNSJta7 = accounts[3]
		const LayerxWaxbzbR = await Layerx.new(addressNSJta7, {from: accounts[4]});
		const addressLqeWvtC = accounts[3]
		const addressmv1oub9 = accounts[4]
		const uintqf7vV49 = await LayerxWaxbzbR.allowance.call(addressmv1oub9, addressLqeWvtC, {from: accounts[0]});

		assert.equal(uintqf7vV49, BigInt("0"))
	});

	it('test for Layerx', async () => {
		const addressyjUpTO = accounts[3]
		const LayerxWaxbzbR = await Layerx.new(addressyjUpTO, {from: accounts[4]});
		const uintZAZLrxe = BigInt("609")
		const addresstBUrTfa = accounts[0]
		const addressVHR7xdp = accounts[3]
		const addresscSOvvKQ = accounts[4]
		const uintGqBUSyN = await LayerxWaxbzbR.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});
		const boolINm5zN = await LayerxWaxbzbR.transfer.call(addresstBUrTfa, uintZAZLrxe, {from: accounts[1]});
		const uintqf7vV49 = await LayerxWaxbzbR.allowance.call(addresscSOvvKQ, addressVHR7xdp, {from: accounts[0]});

		assert.equal(uintGqBUSyN, BigInt("1"))
		await expect(LayerxWaxbzbR.transfer.call(addresstBUrTfa, uintZAZLrxe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresshHV6zM = accounts[3]
		const LayerxWaxbzbR = await Layerx.new(addresshHV6zM, {from: accounts[4]});
		const addressvoW9bbe = accounts[3]
		const addressBYshH18 = accounts[4]
		const byteTrfrxUm = "0x18180c18060a0d161c07180e1a010a0709201e060f0709060c1c"
		const uintsUCte7 = BigInt("281")
		const addressgpWoJm2 = accounts[1]
		const uintqf7vV49 = await LayerxWaxbzbR.allowance.call(addressBYshH18, addressvoW9bbe, {from: accounts[0]});
		const boolugTdIph = await LayerxWaxbzbR.approveAndCall.call(addressgpWoJm2, uintsUCte7, byteTrfrxUm, {from: accounts[3]});

		assert.equal(uintqf7vV49, BigInt("0"))
		await expect(LayerxWaxbzbR.approveAndCall.call(addressgpWoJm2, uintsUCte7, byteTrfrxUm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressWCKrsWv = accounts[3]
		const LayerxWaxbzbR = await Layerx.new(addressWCKrsWv, {from: accounts[4]});
		const addressI8AjVz8 = accounts[3]
		const addressTFT4w3l = accounts[5]
		const uintQsPjDaL = BigInt("1708")
		await LayerxWaxbzbR.f.call({from: accounts[3]});
		const uintqf7vV49 = await LayerxWaxbzbR.allowance.call(addressTFT4w3l, addressI8AjVz8, {from: accounts[0]});
		const uintrWfH30r = await LayerxWaxbzbR.lock.call(uintQsPjDaL, {from: accounts[1]});

		await expect(LayerxWaxbzbR.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresstTWGtii = accounts[3]
		const LayerxWaxbzbR = await Layerx.new(addresstTWGtii, {from: accounts[4]});
		const addressmjk20ch = accounts[5]
		const addressT67mQQo = accounts[3]
		const addressCV6whL1 = accounts[3]
		const uintqf7vV49 = await LayerxWaxbzbR.allowance.call(addressT67mQQo, addressmjk20ch, {from: accounts[0]});
		const addressPmTrtLk = await LayerxWaxbzbR.setNewStakeCreator.call(addressCV6whL1, {from: accounts[3]});

		assert.equal(uintqf7vV49, BigInt("0"))
	});

	it('test for Layerx', async () => {
		const address6Hf4ss = accounts[3]
		const LayerxWaxbzbR = await Layerx.new(address6Hf4ss, {from: accounts[4]});
		const addressIfo6Uoa = accounts[3]
		const addresskMPQHUV = accounts[5]
		const uintl0qNJn8 = BigInt("23")
		const addressLO0CF1F = accounts[1]
		const addresshqc96Nm = accounts[5]
		const uintqf7vV49 = await LayerxWaxbzbR.allowance.call(addresskMPQHUV, addressIfo6Uoa, {from: accounts[0]});
		const boolazFc3oA = await LayerxWaxbzbR.transferFrom.call(addresshqc96Nm, addressLO0CF1F, uintl0qNJn8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintqf7vV49, BigInt("0"))
		await expect(LayerxWaxbzbR.transferFrom.call(addresshqc96Nm, addressLO0CF1F, uintl0qNJn8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressExBsDVw = accounts[3]
		const LayerxWaxbzbR = await Layerx.new(addressExBsDVw, {from: accounts[4]});
		const boolYS3pMHU = false
		const addressLFlGYf = accounts[3]
		const addressNFqyVB4 = accounts[5]
		await LayerxWaxbzbR.addStakePayment.call({from: accounts[4]});
		const boolv3D0xL2 = await LayerxWaxbzbR.setIsPaused.call(boolYS3pMHU, {from: accounts[2]});
		const uintqf7vV49 = await LayerxWaxbzbR.allowance.call(addressNFqyVB4, addressLFlGYf, {from: accounts[0]});

		await expect(LayerxWaxbzbR.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressjz5KMbL = accounts[3]
		const LayerxWaxbzbR = await Layerx.new(addressjz5KMbL, {from: accounts[4]});
		const uintcYCGTak = BigInt("510")
		const addressV76Cwl = accounts[3]
		const addressoT4M3Rn = accounts[4]
		const uintGXuSmSx = BigInt("1569")
		const addressZUI4CS = accounts[0]
		const uinttWmUdTq = BigInt("927")
		const uintshxOXw3 = await LayerxWaxbzbR.withdraw.call(uintcYCGTak, {from: accounts[4]});
		const uintqf7vV49 = await LayerxWaxbzbR.allowance.call(addressoT4M3Rn, addressV76Cwl, {from: accounts[0]});
		const boolFys5mL4 = await LayerxWaxbzbR.approve.call(addressZUI4CS, uintGXuSmSx, {from: accounts[2]});
		const uintyCgxiEy = await LayerxWaxbzbR.lock.call(uinttWmUdTq, {from: accounts[1]});

		await expect(LayerxWaxbzbR.withdraw.call(uintcYCGTak, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressk2OSWmr = accounts[3]
		const LayerxWaxbzbR = await Layerx.new(addressk2OSWmr, {from: accounts[4]});
		const addressHhbql4G = accounts[5]
		const addressOC9DOcJ = accounts[3]
		await LayerxWaxbzbR.addStakePayment.call({from: accounts[3]});
		const uintqf7vV49 = await LayerxWaxbzbR.allowance.call(addressOC9DOcJ, addressHhbql4G, {from: accounts[0]});

		await expect(LayerxWaxbzbR.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressDNo49L8 = accounts[3]
		const LayerxWaxbzbR = await Layerx.new(addressDNo49L8, {from: accounts[4]});
		const addressMwm38U6 = accounts[3]
		const addressG4F2IT2 = accounts[4]
		const uintk1LQ94B = BigInt("978")
		const uintqf7vV49 = await LayerxWaxbzbR.allowance.call(addressG4F2IT2, addressMwm38U6, {from: accounts[0]});
		const uint256VGve6RP = await LayerxWaxbzbR.burn.call(uintk1LQ94B, {from: accounts[3]});

		assert.equal(uintqf7vV49, BigInt("0"))
	});
})