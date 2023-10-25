const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2PaUqIJt = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgW6JdWJ = accounts[0]
		const uintpyTH6JT = BigInt("87")
		const uintdywL4r = await YieldFarmLP2PaUqIJt.claimable.call(addressgW6JdWJ, {from: accounts[0]});
		const uintY8vDvX4 = await YieldFarmLP2PaUqIJt.getPoolSize.call(uintpyTH6JT, {from: accounts[4]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2kKru5IP = await YieldFarmLP2.new({from: accounts[2]});
		const uintE3PNMtF = BigInt("107")
		const addressVrYhBRt = accounts[3]
		const uintyBNCZx2 = BigInt("545")
		const addressSUWeNOY = accounts[3]
		const uintF5lM7K8 = BigInt("1480")
//		const uintZ9dMpek = await YieldFarmLP2kKru5IP.harvest.call(uintE3PNMtF, {from: accounts[1]});
//		const uintvtR72nS = await YieldFarmLP2kKru5IP.claimable.call(addressVrYhBRt, {from: accounts[2]});
//		const uintaOaSRtq = await YieldFarmLP2kKru5IP.getEpochStake.call(addressSUWeNOY, uintyBNCZx2, {from: accounts[1]});
//		const uintp1greZe = await YieldFarmLP2kKru5IP.harvest.call(uintF5lM7K8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2kKru5IP.harvest.call(uintE3PNMtF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2sGKKPf = await YieldFarmLP2.new({from: accounts[1]});
		const uintSX797KT = BigInt("634")
		const addressO70B2cq = accounts[2]
		const uintzWE5ETe = BigInt("39")
		const addresskoBC9hx = "0x0000000000000000000000000000000000000001"
		const uintPxvUNtH = BigInt("770")
//		const uintB67Q6WJ = await YieldFarmLP2sGKKPf.getEpochStake.call(addressO70B2cq, uintSX797KT, {from: accounts[2]});
//		const uintd4OVVrg = await YieldFarmLP2sGKKPf.getCurrentEpoch.call({from: accounts[0]});
//		const uintBwFjvAi = await YieldFarmLP2sGKKPf.getEpochStake.call(addresskoBC9hx, uintzWE5ETe, {from: accounts[3]});
//		const uintTVBvbhI = await YieldFarmLP2sGKKPf.getPoolSize.call(uintPxvUNtH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2sGKKPf.getEpochStake.call(addressO70B2cq, uintSX797KT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2cCWyOU = await YieldFarmLP2.new({from: accounts[2]});
		const addressgzNFghh = "0x0000000000000000000000000000000000000001"
		const addressGy96pjX = accounts[1]
		const addressi8nh7fO = accounts[4]
		const addressqhdg4AP = accounts[5]
//		const uinttE1RYoH = await YieldFarmLP2cCWyOU.massHarvest.call({from: accounts[2]});
//		const addressOdJMewH = await YieldFarmLP2cCWyOU.initialize.call(addressqhdg4AP, addressi8nh7fO, addressGy96pjX, addressgzNFghh, {from: accounts[4]});
//		const uintoU7AI22 = await YieldFarmLP2cCWyOU.userLastEpochIdHarvested.call({from: accounts[3]});
//		const uintGjz0I4 = await YieldFarmLP2cCWyOU.userLastEpochIdHarvested.call({from: accounts[3]});
//		const uintMRAjLVv = await YieldFarmLP2cCWyOU.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2cCWyOU.massHarvest.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2GA5Fpdc = await YieldFarmLP2.new({from: accounts[1]});
		const addressKf35KN = accounts[4]
		const addressV3mxIox = "0x0000000000000000000000000000000000000001"
		const address9w3ZNl = accounts[0]
		const addressDlJrDDw = accounts[0]
		const uintQx34rnq = BigInt("293")
		const addresszwo5g65 = accounts[1]
//		const addressyUjETVz = await YieldFarmLP2GA5Fpdc.initialize.call(addressDlJrDDw, address9w3ZNl, addressV3mxIox, addressKf35KN, {from: accounts[0]});
//		const uinthsfgaBo = await YieldFarmLP2GA5Fpdc.userLastEpochIdHarvested.call({from: accounts[0]});
//		const uintUvTxVtm = await YieldFarmLP2GA5Fpdc.harvest.call(uintQx34rnq, {from: accounts[0]});
//		const uintX2dRFm3 = await YieldFarmLP2GA5Fpdc.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintYq8Pxev = await YieldFarmLP2GA5Fpdc.claimable.call(addresszwo5g65, {from: accounts[2]});

		await expect(YieldFarmLP2GA5Fpdc.initialize.call(addressDlJrDDw, address9w3ZNl, addressV3mxIox, addressKf35KN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2c2h9TjV = await YieldFarmLP2.new({from: accounts[0]});
		const uintKzSy2n7 = BigInt("1795")
		const uintx08Y3Xw = BigInt("1331")
		const addressKgqiqcb = accounts[4]
//		const uintN5j0eda = await YieldFarmLP2c2h9TjV.getPoolSize.call(uintKzSy2n7, {from: accounts[0]});
//		const uint5YFUeM = await YieldFarmLP2c2h9TjV.getCurrentEpoch.call({from: accounts[3]});
//		const uintTn157tF = await YieldFarmLP2c2h9TjV.getPoolSize.call(uintx08Y3Xw, {from: accounts[3]});
//		const uintK3OCjKN = await YieldFarmLP2c2h9TjV.claimable.call(addressKgqiqcb, {from: accounts[2]});

		await expect(YieldFarmLP2c2h9TjV.getPoolSize.call(uintKzSy2n7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2JnhW8f = await YieldFarmLP2.new({from: accounts[0]});
		const uintOeWk7Bf = BigInt("1704")
		const addressWByfeiH = accounts[3]
		const addressG9Ql4yI = accounts[4]
		const addressBKhqlqU = "0x0000000000000000000000000000000000000001"
		const addresstyljdt = accounts[0]
		const uintS5PWhRW = BigInt("1691")
		const uintaC95FF = BigInt("1786")
		const addressKq3yZgP = accounts[1]
//		const uintluqBFHk = await YieldFarmLP2JnhW8f.getCurrentEpoch.call({from: accounts[1]});
//		const uintzNxniWs = await YieldFarmLP2JnhW8f.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintNYuGQV = await YieldFarmLP2JnhW8f.massHarvest.call({from: accounts[0]});
//		const uinta7XAq4u = await YieldFarmLP2JnhW8f.getCurrentEpoch.call({from: accounts[0]});
//		const uintIhbEabu = await YieldFarmLP2JnhW8f.harvest.call(uintOeWk7Bf, {from: "0x0000000000000000000000000000000000000001"});
//		const addressjCLjxU = await YieldFarmLP2JnhW8f.initialize.call(addresstyljdt, addressBKhqlqU, addressG9Ql4yI, addressWByfeiH, {from: accounts[3]});
//		const uint2e8ekW = await YieldFarmLP2JnhW8f.massHarvest.call({from: accounts[4]});
//		const uintMaHEnGk = await YieldFarmLP2JnhW8f.harvest.call(uintS5PWhRW, {from: accounts[2]});
//		const uintO5cBBWH = await YieldFarmLP2JnhW8f.getEpochStake.call(addressKq3yZgP, uintaC95FF, {from: accounts[1]});

		await expect(YieldFarmLP2JnhW8f.getCurrentEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2kKru5IP = await YieldFarmLP2.new({from: accounts[2]});
		const addresspGU0dOb = accounts[4]
		const uintD0eZmQ8 = BigInt("107")
		const addresstdDGK9M = accounts[3]
		const uintwBC70qG = BigInt("545")
		const addressg0OiLOF = accounts[4]
		const uintLZ8HTwP = BigInt("1480")
//		const uintS0J7ssA = await YieldFarmLP2kKru5IP.claimable.call(addresspGU0dOb, {from: accounts[0]});
//		const uintZ9dMpek = await YieldFarmLP2kKru5IP.harvest.call(uintD0eZmQ8, {from: accounts[1]});
//		const uintvtR72nS = await YieldFarmLP2kKru5IP.claimable.call(addresstdDGK9M, {from: accounts[2]});
//		const uintaOaSRtq = await YieldFarmLP2kKru5IP.getEpochStake.call(addressg0OiLOF, uintwBC70qG, {from: accounts[1]});
//		const uintp1greZe = await YieldFarmLP2kKru5IP.harvest.call(uintLZ8HTwP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2kKru5IP.claimable.call(addresspGU0dOb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ghUdh8 = await YieldFarmLP2.new({from: accounts[2]});
		const addressZhTDNe9 = accounts[2]
		const uintnPENOdi = await YieldFarmLP2ghUdh8.userLastEpochIdHarvested.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintt5NRBQ = await YieldFarmLP2ghUdh8.claimable.call(addressZhTDNe9, {from: accounts[2]});
//		const uintrVP2ruw = await YieldFarmLP2ghUdh8.getCurrentEpoch.call({from: accounts[1]});
//		const uintu7UTJ2e = await YieldFarmLP2ghUdh8.getCurrentEpoch.call({from: accounts[0]});
//		const uintYk1w618 = await YieldFarmLP2ghUdh8.massHarvest.call({from: accounts[1]});
//		const uintzqRMGEe = await YieldFarmLP2ghUdh8.massHarvest.call({from: accounts[2]});

		assert.equal(uintnPENOdi, BigInt("0"))
		await expect(YieldFarmLP2ghUdh8.claimable.call(addressZhTDNe9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})