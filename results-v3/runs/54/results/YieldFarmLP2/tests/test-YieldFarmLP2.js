const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2IcJu4cd = await YieldFarmLP2.new({from: accounts[3]});
		const uintu4LN0O6 = BigInt("105")
		const uintTbTn5vw = BigInt("1231")
		const addressezC78y = accounts[0]
		const uintleBGDbW = BigInt("754")
		const uintbExqOdf = await YieldFarmLP2IcJu4cd.getPoolSize.call(uintu4LN0O6, {from: accounts[0]});
		const uintIQGkqQz = await YieldFarmLP2IcJu4cd.getEpochStake.call(addressezC78y, uintTbTn5vw, {from: accounts[3]});
		const uintkuwGeTM = await YieldFarmLP2IcJu4cd.getPoolSize.call(uintleBGDbW, {from: accounts[0]});
		const uintLc5RlwV = await YieldFarmLP2IcJu4cd.getCurrentEpoch.call({from: accounts[2]});

		await expect(YieldFarmLP2IcJu4cd.getPoolSize.call(uintu4LN0O6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2iNqokXd = await YieldFarmLP2.new({from: accounts[1]});
		const uintHGveQRj = BigInt("536")
		const addresstaV9hs9 = accounts[0]
		const addressGNikfUr = accounts[3]
		const addressGywEPc5 = accounts[0]
		const addressg8w1MzU = accounts[5]
		const uintpbxWs4 = BigInt("1940")
		const addresspcZzbrg = accounts[2]
		const addressYsqk9uE = accounts[1]
		const uintF2eF0y = await YieldFarmLP2iNqokXd.massHarvest.call({from: accounts[3]});
		const uinto4A0shc = await YieldFarmLP2iNqokXd.getPoolSize.call(uintHGveQRj, {from: accounts[2]});
		const addressrpbwIeW = await YieldFarmLP2iNqokXd.initialize.call(addressg8w1MzU, addressGywEPc5, addressGNikfUr, addresstaV9hs9, {from: accounts[2]});
		const uintlbd5tjg = await YieldFarmLP2iNqokXd.getEpochStake.call(addresspcZzbrg, uintpbxWs4, {from: "0x0000000000000000000000000000000000000001"});
		const uintv1IreGW = await YieldFarmLP2iNqokXd.claimable.call(addressYsqk9uE, {from: accounts[4]});

		await expect(YieldFarmLP2iNqokXd.massHarvest.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2v9ogQI4 = await YieldFarmLP2.new({from: accounts[4]});
		const uintCzzuWk5 = await YieldFarmLP2v9ogQI4.getCurrentEpoch.call({from: accounts[0]});
		const uintvEXtr8 = await YieldFarmLP2v9ogQI4.userLastEpochIdHarvested.call({from: accounts[1]});

		await expect(YieldFarmLP2v9ogQI4.getCurrentEpoch.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2jNLQVhZ = await YieldFarmLP2.new({from: accounts[3]});
		const uinth7X88xf = BigInt("1766")
		const address3tuAof = accounts[2]
		const addressptoVCDU = accounts[0]
		const uint0PszPt = BigInt("1955")
		const uintgxTruY2 = await YieldFarmLP2jNLQVhZ.getEpochStake.call(address3tuAof, uinth7X88xf, {from: accounts[0]});
		const uintamdROxb = await YieldFarmLP2jNLQVhZ.massHarvest.call({from: accounts[2]});
		const uintrARbHDK = await YieldFarmLP2jNLQVhZ.claimable.call(addressptoVCDU, {from: accounts[0]});
		const uintWZlh12m = await YieldFarmLP2jNLQVhZ.harvest.call(uint0PszPt, {from: accounts[5]});

		await expect(YieldFarmLP2jNLQVhZ.getEpochStake.call(address3tuAof, uinth7X88xf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2y2KjdMc = await YieldFarmLP2.new({from: accounts[0]});
		const uintow05nnA = BigInt("20")
		const uintPFx2T8 = BigInt("279")
		const uintpgMPpS = BigInt("345")
		const addressv0FLfSJ = accounts[2]
		const uintI9QCWBw = await YieldFarmLP2y2KjdMc.harvest.call(uintow05nnA, {from: accounts[3]});
		const uintAxHqqjY = await YieldFarmLP2y2KjdMc.harvest.call(uintPFx2T8, {from: accounts[2]});
		const uintQPb6LGi = await YieldFarmLP2y2KjdMc.getEpochStake.call(addressv0FLfSJ, uintpgMPpS, {from: accounts[1]});
		const uintejfE0hO = await YieldFarmLP2y2KjdMc.massHarvest.call({from: accounts[2]});
		const uintNfy9fjX = await YieldFarmLP2y2KjdMc.massHarvest.call({from: accounts[3]});

		await expect(YieldFarmLP2y2KjdMc.harvest.call(uintow05nnA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2DOjT97S = await YieldFarmLP2.new({from: accounts[1]});
		const addressxIXVVgJ = accounts[0]
		const uintSTz36O = BigInt("1560")
		const addresseSUAML9 = accounts[4]
		const addressjNkyPoa = "0x0000000000000000000000000000000000000001"
		const addressSp6Ndkz = accounts[2]
		const addressARFrU0l = accounts[4]
		const uintfwFplfj = BigInt("813")
		const addressGzvNq7F = "0x0000000000000000000000000000000000000001"
		const addressoaxw02T = accounts[0]
		const addressLAoHl2P = accounts[2]
		const addressgN714DQ = accounts[3]
		const uintYXwVGJM = await YieldFarmLP2DOjT97S.claimable.call(addressxIXVVgJ, {from: accounts[3]});
		const uinthswq66p = await YieldFarmLP2DOjT97S.harvest.call(uintSTz36O, {from: accounts[1]});
		const addresse0je4lw = await YieldFarmLP2DOjT97S.initialize.call(addressARFrU0l, addressSp6Ndkz, addressjNkyPoa, addresseSUAML9, {from: accounts[5]});
		const uintNnq2Qqy = await YieldFarmLP2DOjT97S.getPoolSize.call(uintfwFplfj, {from: accounts[4]});
		const addresstE9Z3my = await YieldFarmLP2DOjT97S.initialize.call(addressgN714DQ, addressLAoHl2P, addressoaxw02T, addressGzvNq7F, {from: accounts[0]});

		await expect(YieldFarmLP2DOjT97S.claimable.call(addressxIXVVgJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2RHu73RP = await YieldFarmLP2.new({from: accounts[3]});
		const addressdA5py3o = accounts[5]
		const addressctd5RzX = accounts[2]
		const addressT8eH7fW = accounts[1]
		const addressdlbu7RT = accounts[2]
		const uintwyDD79X = BigInt("794")
		const uintdQYiUYj = BigInt("1753")
		const addressxbu6Fve = await YieldFarmLP2RHu73RP.initialize.call(addressdlbu7RT, addressT8eH7fW, addressctd5RzX, addressdA5py3o, {from: accounts[3]});
		const uintB0IKnD5 = await YieldFarmLP2RHu73RP.harvest.call(uintwyDD79X, {from: accounts[4]});
		const uinto1gdQE3 = await YieldFarmLP2RHu73RP.harvest.call(uintdQYiUYj, {from: accounts[1]});

		await expect(YieldFarmLP2RHu73RP.initialize.call(addressdlbu7RT, addressT8eH7fW, addressctd5RzX, addressdA5py3o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Q4Y8Gwc = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const addresseOczv7U = accounts[3]
		const uintS7xJ6uo = BigInt("1519")
		const addressoI6C8J9 = accounts[0]
		const address4i3i5Q = accounts[0]
		const addressb70H5sL = accounts[0]
		const addressRlyg2kr = accounts[3]
		const addressvARDy6 = "0x0000000000000000000000000000000000000001"
		const addressPJSua8l = accounts[1]
		const addressYkfdv1g = accounts[1]
		const addressojWpwR7 = accounts[1]
		const addressnnQuMSb = accounts[4]
		const uintrPkxQ3j = await YieldFarmLP2Q4Y8Gwc.massHarvest.call({from: accounts[4]});
		const uintPqSgRXC = await YieldFarmLP2Q4Y8Gwc.claimable.call(addresseOczv7U, {from: accounts[5]});
		const uintU0iETK = await YieldFarmLP2Q4Y8Gwc.getPoolSize.call(uintS7xJ6uo, {from: accounts[0]});
		const addresstWfEpgC = await YieldFarmLP2Q4Y8Gwc.initialize.call(addressRlyg2kr, addressb70H5sL, address4i3i5Q, addressoI6C8J9, {from: "0x0000000000000000000000000000000000000001"});
		const uintLx2zDOw = await YieldFarmLP2Q4Y8Gwc.claimable.call(addressvARDy6, {from: accounts[5]});
		const addressdyYfflm = await YieldFarmLP2Q4Y8Gwc.initialize.call(addressnnQuMSb, addressojWpwR7, addressYkfdv1g, addressPJSua8l, {from: accounts[3]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2RHu73RP = await YieldFarmLP2.new({from: accounts[3]});
		const uintsaBnOt9 = BigInt("1997")
		const uintkIk9Su6 = BigInt("1643")
		const addressENTn6NR = accounts[1]
		const uintXzRuVLf = await YieldFarmLP2RHu73RP.userLastEpochIdHarvested.call({from: accounts[1]});
		const uintB0IKnD5 = await YieldFarmLP2RHu73RP.harvest.call(uintsaBnOt9, {from: accounts[4]});
		const uintdHBP89G = await YieldFarmLP2RHu73RP.getEpochStake.call(addressENTn6NR, uintkIk9Su6, {from: accounts[5]});

		assert.equal(uintXzRuVLf, BigInt("0"))
		await expect(YieldFarmLP2RHu73RP.harvest.call(uintsaBnOt9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})