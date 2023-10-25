const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addresscQHrTJY = accounts[2]
		const addressg18OMv = accounts[1]
		const addresswM1tmYB = accounts[2]
		const GardenContractV2R7p0Mnp = await GardenContractV2.new(addresscQHrTJY, addressg18OMv, addresswM1tmYB, {from: accounts[1]});
		const stringwoXDcJK = "A292EwuvwERoNtROgfKNLjAa0GKDQKB8SxWKxWUOhvPbydWK4KVZucDwEGo9stoHWy8rOHH7PEzbV7rxjpOe0a9axC2"
		const stringamwIsZE = "OKKGxZ4pxHFwibuYEP8vPU5CqAxZF6mKFjsUn4wIla7"
		const stringY4YI013 = "9nqtdap5DGvn5YhuyS1Tn5o8WdXDqaxOwW56K1UWCzhgUNqsznLjmSexhSATZ42bUCPrsGOLFPZBXg857sn"
		const stringvVvxUjX = "nOgtI36bZ9vArifPEsyJu7at7upZGBWoKaBkTfdJEhbef24CdJex7p30gFpzNzi8Aj"
		const uint256mhmVOAQ = await GardenContractV2R7p0Mnp.totalTLPGrown.call(stringwoXDcJK, {from: accounts[5]});
		const stringCEWkgi3 = await GardenContractV2R7p0Mnp.harvestAllBeds.call(stringamwIsZE, {from: accounts[0]});
		const uint256Jr4EZBH = await GardenContractV2R7p0Mnp.totalTLPGrowing.call(stringY4YI013, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Ztwgg8 = await GardenContractV2R7p0Mnp.totalTLPBurnt.call(stringvVvxUjX, {from: accounts[1]});

		await expect(GardenContractV2R7p0Mnp.totalTLPGrown.call(stringwoXDcJK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressgHc2ZKv = accounts[1]
		const addresskZ96l91 = accounts[1]
		const addresscaSDlEX = accounts[4]
		const GardenContractV2m1sNYdM = await GardenContractV2.new(addressgHc2ZKv, addresskZ96l91, addresscaSDlEX, {from: accounts[4]});
		const stringkZk6d0 = "qsMrSmT1YrOTWpGvVi5OKbpZ4F1zbfgI4uS1v"
		const addressEvRgQ4I = accounts[3]
		const uint256Pw8GqjK = await GardenContractV2m1sNYdM.totalTLPBurnt.call(stringkZk6d0, {from: accounts[2]});
		const addressGyJaqDb = await GardenContractV2m1sNYdM.changeBenefitiary.call(addressEvRgQ4I, {from: accounts[2]});

		await expect(GardenContractV2m1sNYdM.totalTLPBurnt.call(stringkZk6d0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressBtZaHj1 = "0x0000000000000000000000000000000000000001"
		const addressl2POKW4 = accounts[5]
		const addressKpUsfDj = accounts[4]
		const GardenContractV2SPwKTT4 = await GardenContractV2.new(addressBtZaHj1, addressl2POKW4, addressKpUsfDj, {from: accounts[4]});
		const stringNFgmM3 = "13LTYTXQRoSbZng5G8wXG12NYzZWB374OFcgz3FeLfabHJlBIywdLzIc0ChtwzKD"
		const addresstOSCj8B = accounts[4]
		const stringPk0ozZT = "64KeysadV6dZBCXrZO889e"
		const uintd4lzU63 = BigInt("31")
		const uintyBUQfqV = BigInt("102")
		const uint256iL1Nseb = await GardenContractV2SPwKTT4.balanceOf.call(addresstOSCj8B, stringNFgmM3, {from: accounts[3]});
		const uint256R1L1Gze = await GardenContractV2SPwKTT4.totalTLPGrown.call(stringPk0ozZT, {from: accounts[4]});
		const uint8M3m9ucH = await GardenContractV2SPwKTT4.zeroHoldings.call(uintyBUQfqV, uintd4lzU63, {from: accounts[4]});

		await expect(GardenContractV2SPwKTT4.balanceOf.call(addresstOSCj8B, stringNFgmM3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresszCGqqcC = accounts[4]
		const addresssHZyaF = accounts[2]
		const addressfhCHa0F = accounts[2]
		const GardenContractV2qHyd8ht = await GardenContractV2.new(addresszCGqqcC, addresssHZyaF, addressfhCHa0F, {from: accounts[0]});
		const stringz1MRRh3 = "6aM0wLxk3QK4bgping9N5iaBtJuIi2Fa6KbMe0QB6MXjph236OKpy07allF"
		const uintHoy2hd6 = BigInt("133")
		const stringHkgJxFE = "AQ2b8QItezHZRaDsV6P9jBZLzIZmCG7EwoF4aKIZgIahqwQKP4nLZRs"
		const addressmc4M8Gp = accounts[0]
		const uintkVeSr1 = BigInt("253")
		const stringELGpVSi = "6X7YmWYhmeVTIzHCkdJWKiJq4dKG7SUVgc5eklNr9H9rK5hewx6AfLrM7bQu5uIBcgJeg"
		const stringPWZRZD6 = "Dr78MbYRbLTKfgSQuSdfA2Q0LwmYC2J9Il3BPHa9EKzMqInUE"
		const stringvFsFAgp = await GardenContractV2qHyd8ht.harvestAllBeds.call(stringz1MRRh3, {from: accounts[0]});
		const uint256MMaeXfO = await GardenContractV2qHyd8ht.getTotalsTLPHarvest.call(uintHoy2hd6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rYSgVTa = await GardenContractV2qHyd8ht.balanceOf.call(addressmc4M8Gp, stringHkgJxFE, {from: accounts[0]});
		const stringV0ej3YI = await GardenContractV2qHyd8ht.harvest.call(stringELGpVSi, uintkVeSr1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VN3OwSy = await GardenContractV2qHyd8ht.totalTLPGrowing.call(stringPWZRZD6, {from: accounts[2]});

		await expect(GardenContractV2qHyd8ht.harvestAllBeds.call(stringz1MRRh3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressOUdRVSw = accounts[0]
		const addressxuzPeuE = accounts[4]
		const addresseTRAERK = accounts[4]
		const GardenContractV2gzCHwO = await GardenContractV2.new(addressOUdRVSw, addressxuzPeuE, addresseTRAERK, {from: accounts[0]});
		const uintDRSjFqP = BigInt("214")
		const stringz4VyP12 = "ltUqLeCWE6B8K6FbphSwvxGXGlrkGarOEUqe4Rp1rsWym4ILfKIrqLBcm6E6X9gEznoxSloBKz5cbeDhrdJ7Z26PkS"
		const uintkQdADsJ = BigInt("20")
		const uintgJTz8vR = BigInt("230")
		const addressrj5CbxE = accounts[0]
		const uintVEmSr9G = BigInt("21")
		const stringdvrJdFi = "lXNTatCVXfwyyu5m5aYCPRPCy1UjkGkKaTgsEoHsGzh6"
		const stringabh1rZp = "QcMwt7v2JpuZCI55bxqLpstNyJiAz1aXTKl33"
		const addressvjSzEh = accounts[4]
		const stringh1WBj6v = await GardenContractV2gzCHwO.claimDecompose.call(stringz4VyP12, uintDRSjFqP, {from: "0x0000000000000000000000000000000000000001"});
		const uint8fQ59JR = await GardenContractV2gzCHwO.zeroHoldings.call(uintgJTz8vR, uintkQdADsJ, {from: accounts[3]});
		const addressto3Hlyb = await GardenContractV2gzCHwO.renounceTokenOwner.call(addressrj5CbxE, {from: accounts[0]});
		const uint256TaYIfn = await GardenContractV2gzCHwO.timeUntilNextTLP.call(stringdvrJdFi, uintVEmSr9G, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eF4SNNY = await GardenContractV2gzCHwO.balanceOf.call(addressvjSzEh, stringabh1rZp, {from: accounts[4]});

		await expect(GardenContractV2gzCHwO.claimDecompose.call(stringz4VyP12, uintDRSjFqP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressvMfc2sA = accounts[0]
		const addressZI9Ysf4 = "0x0000000000000000000000000000000000000001"
		const address5lVcrg = accounts[1]
		const GardenContractV2dSikFrs = await GardenContractV2.new(addressvMfc2sA, addressZI9Ysf4, address5lVcrg, {from: "0x0000000000000000000000000000000000000001"});
		const stringt88TpWO = "lILCadrcDtMRKu28hLAgVPEkN82AoAInsHeyOLPosHYmRCNJmay8wmk1nIWgtFEgbhW67qfmCzU23xf"
		const uintA2lQ2z1 = BigInt("229")
		const uintjCt31Jq = BigInt("172")
		const uintidv7jl0 = BigInt("23")
		const uintf8bD3ac = BigInt("153")
		const uintTQmgkMX = BigInt("41")
		const uint256Hz3xTWI = await GardenContractV2dSikFrs.totalTLPGrown.call(stringt88TpWO, {from: accounts[4]});
		const uint256X02uWxV = await GardenContractV2dSikFrs.getTotalsTLPHarvest.call(uintA2lQ2z1, {from: accounts[5]});
		const uint8hb7Yb1X = await GardenContractV2dSikFrs.zeroHoldings.call(uintidv7jl0, uintjCt31Jq, {from: "0x0000000000000000000000000000000000000001"});
		const uint8r8FCkf4 = await GardenContractV2dSikFrs.setTimeStamp.call(uintTQmgkMX, uintf8bD3ac, {from: accounts[2]});
	});

	it('test for GardenContractV2', async () => {
		const addressPIakpK0 = accounts[2]
		const addressMSCBGL = accounts[1]
		const addresspcqQSRG = accounts[5]
		const GardenContractV2jSaCtrE = await GardenContractV2.new(addressPIakpK0, addressMSCBGL, addresspcqQSRG, {from: accounts[2]});
		const uintFXR305 = BigInt("108")
		const uintZPlY6H = BigInt("251")
		const uintvqMoBy7 = BigInt("189")
		const uintvfIDUQL = BigInt("139")
		const stringehmO9N0 = "vfxFQ6bpPPwJSU9WNwsw9v5oa5wIkMP9nWSFYXSphEzcMVDd6W8dedk6jbLGza7A80yyWodO7Mv0DCpkn"
		const uintoEABhX4 = BigInt("253")
		const stringP4qf6tf = "yo73IXBF9Py5qgr4FksFxqnNENoaIYJAyaiXks7rvFeQSy2cJ63eOrIk9"
		const uintVy5S3OS = BigInt("102")
		const stringfNTivKC = "1Rk85rwK6DL1HDEldcpGdWAEwSX"
		const uintmHrNH8h = BigInt("209")
		const stringg0xXR6M = "bBell4xuByNE2NHavtLR9M"
		const uint8LVI3iE = await GardenContractV2jSaCtrE.operationBurnMint.call(uintvqMoBy7, uintZPlY6H, uintFXR305, {from: accounts[1]});
		const stringuqikoJn = await GardenContractV2jSaCtrE.withdraw.call(stringehmO9N0, uintvfIDUQL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NgAdgY = await GardenContractV2jSaCtrE.getTotalsTLPHarvest.call(uintoEABhX4, {from: accounts[4]});
		const uint256Ufn8VqY = await GardenContractV2jSaCtrE.totalGardenSupply.call(stringP4qf6tf, {from: accounts[2]});
		const uint256KUKk5n = await GardenContractV2jSaCtrE.timeUntilNextTLP.call(stringfNTivKC, uintVy5S3OS, {from: accounts[2]});
		const stringdpxr6p5 = await GardenContractV2jSaCtrE.claimDecompose.call(stringg0xXR6M, uintmHrNH8h, {from: accounts[5]});

		await expect(GardenContractV2jSaCtrE.operationBurnMint.call(uintvqMoBy7, uintZPlY6H, uintFXR305, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswtKhP4P = accounts[3]
		const addressJ8VDm7B = accounts[2]
		const addressQMgg6ZJ = accounts[0]
		const GardenContractV2luTLfQc = await GardenContractV2.new(addresswtKhP4P, addressJ8VDm7B, addressQMgg6ZJ, {from: accounts[4]});
		const boolRA6J9D9 = false
		const uintBrF9Kxh = BigInt("177")
		const stringpao0EpI = "4vbNrBVev9uGHFPOa3hme"
		const uintTSO8ITg = BigInt("1256")
		const addressnY5QxaW = accounts[2]
		const stringwz5RzLL = "6av5TMT0jPRjjm4fET4JPi9mJimDINb"
		const addressiK1e9Lw = accounts[1]
		const uint256V3XhC69 = await GardenContractV2luTLfQc.plant.call(uintTSO8ITg, stringpao0EpI, uintBrF9Kxh, boolRA6J9D9, {from: "0x0000000000000000000000000000000000000001"});
		const addressJQvm8Q7 = await GardenContractV2luTLfQc.changeOwner.call(addressnY5QxaW, {from: accounts[3]});
		const uint256RXrk4Se = await GardenContractV2luTLfQc.balanceOf.call(addressiK1e9Lw, stringwz5RzLL, {from: accounts[3]});

		await expect(GardenContractV2luTLfQc.plant.call(uintTSO8ITg, stringpao0EpI, uintBrF9Kxh, boolRA6J9D9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQmIKzgu = "0x0000000000000000000000000000000000000001"
		const addressY97a1lt = accounts[5]
		const addressCFLQwCF = accounts[4]
		const GardenContractV2SPwKTT4 = await GardenContractV2.new(addressQmIKzgu, addressY97a1lt, addressCFLQwCF, {from: accounts[4]});
		const addressxbX16U3 = accounts[3]
		const stringNFgmM3 = "13LTYTXQRoSbZng5G8wXG12NYzZWB374OFcgz3FeLfabHJlBIywdLzIc0ChtwzKD"
		const addressJBuTZQN = accounts[4]
		const stringPk0ozZT = "64teysadV6dZBCXrZO889e"
		const uintugmtTR2 = BigInt("31")
		const uintnhD92Aj = BigInt("102")
		const addresslTQOPA = await GardenContractV2SPwKTT4.changeOwner.call(addressxbX16U3, {from: accounts[3]});
		const uint256iL1Nseb = await GardenContractV2SPwKTT4.balanceOf.call(addressJBuTZQN, stringNFgmM3, {from: accounts[3]});
		const uint256R1L1Gze = await GardenContractV2SPwKTT4.totalTLPGrown.call(stringPk0ozZT, {from: accounts[4]});
		const uint8M3m9ucH = await GardenContractV2SPwKTT4.zeroHoldings.call(uintnhD92Aj, uintugmtTR2, {from: accounts[4]});

		await expect(GardenContractV2SPwKTT4.changeOwner.call(addressxbX16U3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressGiu8AsA = accounts[0]
		const addresslZMivVx = accounts[4]
		const addressi7ZlAO = accounts[4]
		const GardenContractV2gzCHwO = await GardenContractV2.new(addressGiu8AsA, addresslZMivVx, addressi7ZlAO, {from: accounts[0]});
		const uintf4fDEFd = BigInt("252")
		const stringfvNpEhU = "S8TUYfVnlgnQJ58BQz7WSEJjIGNLHxOH0h4"
		const uintDIL3ZIk = BigInt("214")
		const stringz4VyP12 = "ltUqLeCWE6B8K6FbphSwvxGXGlrkGarOEUqe4Rp1rsWym4ILfKIrqLBcm6E6X9gEznoxSloBKz5cbeDhrdJ7Z26PkS"
		const addressx7VZDlB = accounts[3]
		const addressJnVpd3G = accounts[5]
		const stringf4vVc7X = "QpJGBvBa6uc2XMAjkJ6NlmGYbfruyTAtLIAOsMPj73WVbrn7vJ"
		const uintIoOl4ft = BigInt("20")
		const uintJD56OI = BigInt("230")
		const uintPzwTYi = BigInt("43")
		const stringIWNGe8 = "dJf0U2EcsWm65iubUCx2MNxJ"
		const addressmZKdRzJ = accounts[2]
		const addresstARXI1W = accounts[0]
		const uintocTtt8o = BigInt("21")
		const stringdvrJdFi = "lXNTatCVXfwyyu5m5aYCPRPCy1UjkGkKaTgsEoHsGzh6"
		const stringabh1rZp = "QcMwt7v2JpuZCI55bxqLpstNyJiAz1aXTKl33"
		const addressn9K1jZa = accounts[4]
		const uint256JAuAAu5 = await GardenContractV2gzCHwO.timeUntilNextTLP.call(stringfvNpEhU, uintf4fDEFd, {from: accounts[4]});
		const stringh1WBj6v = await GardenContractV2gzCHwO.claimDecompose.call(stringz4VyP12, uintDIL3ZIk, {from: "0x0000000000000000000000000000000000000001"});
		const addressi8JzMe9 = await GardenContractV2gzCHwO.addTokenOwner.call(addressJnVpd3G, addressx7VZDlB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oUTnTB = await GardenContractV2gzCHwO.totalTLPGrowing.call(stringf4vVc7X, {from: accounts[1]});
		const uint8fQ59JR = await GardenContractV2gzCHwO.zeroHoldings.call(uintJD56OI, uintIoOl4ft, {from: accounts[3]});
		const uint256Av4XVEc = await GardenContractV2gzCHwO.growthRemaining.call(addressmZKdRzJ, stringIWNGe8, uintPzwTYi, {from: accounts[0]});
		const addressto3Hlyb = await GardenContractV2gzCHwO.renounceTokenOwner.call(addresstARXI1W, {from: accounts[0]});
		const uint256TaYIfn = await GardenContractV2gzCHwO.timeUntilNextTLP.call(stringdvrJdFi, uintocTtt8o, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eF4SNNY = await GardenContractV2gzCHwO.balanceOf.call(addressn9K1jZa, stringabh1rZp, {from: accounts[4]});

		await expect(GardenContractV2gzCHwO.timeUntilNextTLP.call(stringfvNpEhU, uintf4fDEFd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressYLLkA5i = "0x0000000000000000000000000000000000000001"
		const addressKMuKPk6 = accounts[5]
		const addresskrhZ36z = accounts[4]
		const GardenContractV2SPwKTT4 = await GardenContractV2.new(addressYLLkA5i, addressKMuKPk6, addresskrhZ36z, {from: accounts[4]});
		const uintzBdOkKS = BigInt("87")
		const stringfKdU40J = "KpaGOvPLqUAYm3owcJ1KTzifk9WK3nPfs2bufcbzLyiW1CRlcjXJuekkMmQiJ9LfOJ4JzcGHf61Npm4IOBU3Ok8A9D"
		const uintuQGc5Ee = BigInt("55")
		const string7FRf5Z = "vix2B7nMQHgbci913DG3BRG5V6bbooQBng1jkMYz"
		const uintzXCE5Gg = BigInt("20")
		const uintsuGnscI = BigInt("131")
		const stringfOqb3f4 = await GardenContractV2SPwKTT4.harvest.call(stringfKdU40J, uintzBdOkKS, {from: accounts[3]});
		const stringbCfW7Cl = await GardenContractV2SPwKTT4.claimDecompose.call(string7FRf5Z, uintuQGc5Ee, {from: "0x0000000000000000000000000000000000000001"});
		const uint8M3m9ucH = await GardenContractV2SPwKTT4.zeroHoldings.call(uintsuGnscI, uintzXCE5Gg, {from: accounts[4]});

		await expect(GardenContractV2SPwKTT4.harvest.call(stringfKdU40J, uintzBdOkKS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressYbLZxFl = accounts[3]
		const addressMYwuZqY = accounts[2]
		const addressWCh8Vm = accounts[0]
		const GardenContractV2luTLfQc = await GardenContractV2.new(addressYbLZxFl, addressMYwuZqY, addressWCh8Vm, {from: accounts[4]});
		const uintaPltqDS = BigInt("72")
		const stringMbQmbAI = "heIo6P7OUOuRmftGCKTFqIaVg"
		const boolRA6J9D9 = true
		const uintPiZqLm0 = BigInt("177")
		const stringpao0EpI = "4vbNrBVev9uGHFPOa3hme"
		const uintvOB5lTW = BigInt("1256")
		const addressukIVLUv = accounts[2]
		const stringdxJaTFs = "9E1DOjAiYCKRqyFfljOWWdARVV78lZUv9i"
		const stringwz5RzLL = "6av5TMT0jPRjjm4fET4JPi9mJimDINb"
		const addressKMnnEa2 = accounts[5]
		const stringAR9q3sV = await GardenContractV2luTLfQc.withdraw.call(stringMbQmbAI, uintaPltqDS, {from: accounts[5]});
		const uint256V3XhC69 = await GardenContractV2luTLfQc.plant.call(uintvOB5lTW, stringpao0EpI, uintPiZqLm0, boolRA6J9D9, {from: "0x0000000000000000000000000000000000000001"});
		const addressJQvm8Q7 = await GardenContractV2luTLfQc.changeOwner.call(addressukIVLUv, {from: accounts[3]});
		const uint256ssPiNyX = await GardenContractV2luTLfQc.totalTLPBurnt.call(stringdxJaTFs, {from: accounts[2]});
		const uint256RXrk4Se = await GardenContractV2luTLfQc.balanceOf.call(addressKMnnEa2, stringwz5RzLL, {from: accounts[3]});

		await expect(GardenContractV2luTLfQc.withdraw.call(stringMbQmbAI, uintaPltqDS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressENcRvW9 = "0x0000000000000000000000000000000000000001"
		const addressuXe0LwS = accounts[5]
		const addresso9h9JHI = accounts[4]
		const GardenContractV2SPwKTT4 = await GardenContractV2.new(addressENcRvW9, addressuXe0LwS, addresso9h9JHI, {from: accounts[4]});
		const uintdnY5C2 = BigInt("522")
		const uintN7u2BLG = BigInt("148")
		const stringiFKtf0F = "x28HYnpflOd04mparFpqLuGU35"
		const uintHOJRVo8 = BigInt("51")
		const uintE5suJba = BigInt("102")
		const stringDcLFgne = await GardenContractV2SPwKTT4.decompose.call(stringiFKtf0F, uintN7u2BLG, uintdnY5C2, {from: accounts[3]});
		const uint8M3m9ucH = await GardenContractV2SPwKTT4.zeroHoldings.call(uintE5suJba, uintHOJRVo8, {from: accounts[4]});

		await expect(GardenContractV2SPwKTT4.decompose.call(stringiFKtf0F, uintN7u2BLG, uintdnY5C2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressgt4ZXfp = "0x0000000000000000000000000000000000000001"
		const addressPurpDfV = accounts[5]
		const addressukYL1Xi = accounts[4]
		const GardenContractV2SPwKTT4 = await GardenContractV2.new(addressgt4ZXfp, addressPurpDfV, addressukYL1Xi, {from: accounts[4]});
		const addresspSIVNt9 = accounts[2]
		const uintIY92zGo = BigInt("25")
		const stringKqiAQL9 = "noRFa1u02PCeTK4Quy5Qp2xNqGjrzFzsdtLWXubO3LRIJbUxmm7gqqZmqnxuFDLqfDqLdQf617UiF1LzafJvJcjM7GwAIudKBRS"
		const uinthFwgi0U = BigInt("20")
		const uintIcfssIi = BigInt("197")
		const uintJKYPmwa = BigInt("63")
		const stringMgB2WEv = "LC25xfqswP7SwUh6oKUcKHfXrkuHiV31HXyvvNg7cc6UkvQvA4iPDbsN62ROsm"
		const stringz6WuvV = "YBlG4o7e"
		const addressgZaqwSL = await GardenContractV2SPwKTT4.changeBenefitiary.call(addresspSIVNt9, {from: accounts[4]});
		const uint256OOarAZt = await GardenContractV2SPwKTT4.timeUntilNextTLP.call(stringKqiAQL9, uintIY92zGo, {from: accounts[0]});
		const uint8M3m9ucH = await GardenContractV2SPwKTT4.zeroHoldings.call(uintIcfssIi, uinthFwgi0U, {from: accounts[4]});
		const stringqSOlPbP = await GardenContractV2SPwKTT4.withdraw.call(stringMgB2WEv, uintJKYPmwa, {from: accounts[1]});
		const uint256ewPVYYR = await GardenContractV2SPwKTT4.totalTLPDecomposed.call(stringz6WuvV, {from: accounts[4]});

		await expect(GardenContractV2SPwKTT4.timeUntilNextTLP.call(stringKqiAQL9, uintIY92zGo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressLsHGdU = "0x0000000000000000000000000000000000000001"
		const addresswEi66F6 = accounts[5]
		const addressSFF6hxJ = accounts[4]
		const GardenContractV2SPwKTT4 = await GardenContractV2.new(addressLsHGdU, addresswEi66F6, addressSFF6hxJ, {from: accounts[4]});
		const uintL18q2iV = BigInt("53")
		const stringzwHX2mE = "u2wU7FqH4KgouFAwENBVBgA5zjyEk8amultxjPkyFq"
		const uintwxYlzyF = BigInt("88")
		const stringjC3WT0 = "Uve0Rno9JXIysXeGxxnzfyxm2M199RNDq7V6hrk"
		const stringxL7eb8h = "4zcIpideOVwrJEGHktsdbLnvsBecK2P"
		await GardenContractV2SPwKTT4.totalBedSupply.call(stringzwHX2mE, uintL18q2iV, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iWOFB4V = await GardenContractV2SPwKTT4.getTotalrTLPHarvest.call(uintwxYlzyF, {from: accounts[5]});
		const uint256a6aKvp6 = await GardenContractV2SPwKTT4.totalTLPDecomposed.call(stringjC3WT0, {from: accounts[4]});
		const stringbhA1UML = await GardenContractV2SPwKTT4.harvestAllBeds.call(stringxL7eb8h, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2SPwKTT4.totalBedSupply.call(stringzwHX2mE, uintL18q2iV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressjtJ7O8 = "0x0000000000000000000000000000000000000001"
		const addressMi5zlel = accounts[5]
		const addressBiFAazb = accounts[4]
		const GardenContractV2SPwKTT4 = await GardenContractV2.new(addressjtJ7O8, addressMi5zlel, addressBiFAazb, {from: accounts[4]});
		const uintdjtnZ9 = BigInt("158")
		const uintQQ2Y8xl = BigInt("15")
		const uintOzdxw9t = BigInt("102")
		const uint256YLLLjWM = await GardenContractV2SPwKTT4.getTotalsTLPHarvest.call(uintdjtnZ9, {from: accounts[5]});
		const uint8M3m9ucH = await GardenContractV2SPwKTT4.zeroHoldings.call(uintOzdxw9t, uintQQ2Y8xl, {from: accounts[4]});

		await expect(GardenContractV2SPwKTT4.getTotalsTLPHarvest.call(uintdjtnZ9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresse17jlxf = "0x0000000000000000000000000000000000000001"
		const addressoPYa6bt = accounts[2]
		const addresst28D3Uf = accounts[0]
		const GardenContractV2CjKkNA = await GardenContractV2.new(addresse17jlxf, addressoPYa6bt, addresst28D3Uf, {from: accounts[5]});
		const stringueoJ5H7 = "5ZhmEFuSNVJD1mmZCN3wHkfpOJoubUUNDDW3EJByMvwlDb4GdhkfAvbGpr"
		const addressqUM8iU6 = accounts[0]
		const stringuh4puU = "AqQ2LBdTAbrQslToUvVFBzPxdnADMSqhl7S0TFEvGXykx5h7Cfpcndsf7mgmsSpUrcLiczjcJ7uY1F221gLu4LGcaMPFQc"
		const uintIwKjZT5 = BigInt("63")
		const stringq44PtVq = "ru9CSnce5AafvsG3cy3r5aLy4Hlfu1QzeSjlYXaTw5XPx"
		const addressSoDFuGi = accounts[4]
		const uint256zO3OQmF = await GardenContractV2CjKkNA.totalGardenSupply.call(stringueoJ5H7, {from: accounts[1]});
		const addressNPbUyO = await GardenContractV2CjKkNA.renounceTokenOwner.call(addressqUM8iU6, {from: accounts[4]});
		const stringZk6g2JK = await GardenContractV2CjKkNA.harvestAllBeds.call(stringuh4puU, {from: accounts[2]});
		const uint256L722ivT = await GardenContractV2CjKkNA.getTotalrTLPHarvest.call(uintIwKjZT5, {from: accounts[2]});
		const uint256h4NzGX = await GardenContractV2CjKkNA.totalTLPBurnt.call(stringq44PtVq, {from: accounts[2]});
		const addressUNzYR4N = await GardenContractV2CjKkNA.changeBenefitiary.call(addressSoDFuGi, {from: accounts[0]});

		await expect(GardenContractV2CjKkNA.totalGardenSupply.call(stringueoJ5H7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressuZTpAdY = "0x0000000000000000000000000000000000000001"
		const addressxLy0xfC = accounts[5]
		const addressnkgyyOR = accounts[4]
		const GardenContractV2SPwKTT4 = await GardenContractV2.new(addressuZTpAdY, addressxLy0xfC, addressnkgyyOR, {from: accounts[4]});
		const uintkRmkLQO = BigInt("85")
		const stringOlGz2Ds = "WF2d5SkzzjrzuWUezWdLqRAXpeVVQJLaSdP0KQoUgAYnX4aagDCByq2u"
		const addressXQUyj2S = accounts[0]
		const stringxL7eb8h = "4zTIpideOVwrJEGHktsdbLnvsBecKP"
		const uint256pxUJMNA = await GardenContractV2SPwKTT4.growthRemaining.call(addressXQUyj2S, stringOlGz2Ds, uintkRmkLQO, {from: accounts[2]});
		const stringbhA1UML = await GardenContractV2SPwKTT4.harvestAllBeds.call(stringxL7eb8h, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2SPwKTT4.growthRemaining.call(addressXQUyj2S, stringOlGz2Ds, uintkRmkLQO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressrc7bi4u = accounts[0]
		const addressnYV7cKG = accounts[3]
		const addressITMdkIv = accounts[2]
		const GardenContractV2rm9JRMo = await GardenContractV2.new(addressrc7bi4u, addressnYV7cKG, addressITMdkIv, {from: accounts[1]});
		const uintcEs9tkH = BigInt("70")
		const uintuoxRmiA = BigInt("246")
		const stringHmlHepC = "AXsDqVNjGjVXrKppLwI4GnzGfuQtTRcvowgMkPKpPPsfTE7RiQBoykcCF"
		const uintsRBwwCr = BigInt("183")
		const stringSTyvXqm = "LDt7dZxAOXtvB4jeeQFgmFpuIPzPX2HmsE38C4Rl9qMMd8"
		const stringsSQX2qR = "PdAIYfvX9VUjyqF4dkPwXT1XXjWNaYju"
		const uint256OAkLYq8 = await GardenContractV2rm9JRMo.getTotalrTLPHarvest.call(uintcEs9tkH, {from: accounts[5]});
		const stringUWXN1MG = await GardenContractV2rm9JRMo.claimDecompose.call(stringHmlHepC, uintuoxRmiA, {from: accounts[4]});
		const uint256U8fk3G = await GardenContractV2rm9JRMo.timeUntilNextTLP.call(stringSTyvXqm, uintsRBwwCr, {from: accounts[0]});
		const uint256FzwrUHG = await GardenContractV2rm9JRMo.totalTLPDecomposed.call(stringsSQX2qR, {from: accounts[1]});

		await expect(GardenContractV2rm9JRMo.getTotalrTLPHarvest.call(uintcEs9tkH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressVzUVeNc = "0x0000000000000000000000000000000000000001"
		const addressaPjtVhp = accounts[5]
		const addressUB7CAnj = accounts[4]
		const GardenContractV2SPwKTT4 = await GardenContractV2.new(addressVzUVeNc, addressaPjtVhp, addressUB7CAnj, {from: accounts[4]});
		const stringikBwUSS = "Bcg9X"
		const stringHX6KXTD = "gJwPCtyVNoKN3V0oDWlhksRdhvBVq"
		const stringNFgmM3 = "13LTYTXQRoSbZng5G8wXG12NYzZWB374OFcgz3FeLfabHJlBIywdLzIc0ChtwzKD"
		const addressSSSxBRo = accounts[4]
		const uintGxRdyNj = BigInt("58")
		const uintoQ024g = BigInt("111")
		const uint256apaHtG = await GardenContractV2SPwKTT4.totalTLPDecomposed.call(stringikBwUSS, {from: accounts[0]});
		const uint256GG5QpgV = await GardenContractV2SPwKTT4.totalTLPBurnt.call(stringHX6KXTD, {from: accounts[1]});
		const uint256iL1Nseb = await GardenContractV2SPwKTT4.balanceOf.call(addressSSSxBRo, stringNFgmM3, {from: accounts[3]});
		const uint8qYJGzWG = await GardenContractV2SPwKTT4.setTimeStamp.call(uintoQ024g, uintGxRdyNj, {from: accounts[0]});

		await expect(GardenContractV2SPwKTT4.totalTLPDecomposed.call(stringikBwUSS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressvuaw5tW = accounts[3]
		const addressZncU6R = accounts[2]
		const addressil2oliv = accounts[0]
		const GardenContractV2luTLfQc = await GardenContractV2.new(addressvuaw5tW, addressZncU6R, addressil2oliv, {from: accounts[4]});
		const stringfxE46WV = "kLT2y2qgMz6tpb4wv"
		const uintaGvKjJA = BigInt("164")
		const stringUA1FMQl = "NdeF1Ip6Y9nkHnLW8gJXgXsyXNl8k5gXvS5zRrGlqQFl2WPL1DsjzOSTh8koRUXoTOKMGJpS8"
		const uintLR6DDvV = BigInt("1490")
		const uintPIJPwW4 = BigInt("154")
		const stringBKzw8ro = "ebPx8UfWOx53N3PjeQLrQgOADQF6UlD2xc"
		const boolRA6J9D9 = false
		const uintzjFrFXS = BigInt("177")
		const stringpao0EpI = "4vbNrBVev9uGHFPOa3hme"
		const uintcTYc48e = BigInt("311")
		const uintj8ejaNp = BigInt("228")
		const stringr6gJLPV = "PGjNImF0wB1nVvLGhvliuazbv23Drquc5ptA4Ds9FYEBDLaFd8B6Sn2"
		const uint256oMHuob7 = await GardenContractV2luTLfQc.totalTLPGrowing.call(stringfxE46WV, {from: accounts[1]});
		const stringBl4aaK = await GardenContractV2luTLfQc.harvest.call(stringUA1FMQl, uintaGvKjJA, {from: accounts[0]});
		const stringFgaWQfc = await GardenContractV2luTLfQc.decompose.call(stringBKzw8ro, uintPIJPwW4, uintLR6DDvV, {from: accounts[0]});
		const uint256V3XhC69 = await GardenContractV2luTLfQc.plant.call(uintcTYc48e, stringpao0EpI, uintzjFrFXS, boolRA6J9D9, {from: "0x0000000000000000000000000000000000000001"});
		const stringrJ2zOHv = await GardenContractV2luTLfQc.claimDecompose.call(stringr6gJLPV, uintj8ejaNp, {from: accounts[2]});

		await expect(GardenContractV2luTLfQc.totalTLPGrowing.call(stringfxE46WV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWdEFjOV = accounts[4]
		const addressUNW4MY2 = accounts[3]
		const addressFBeoefK = accounts[4]
		const GardenContractV2OHzlPIZ = await GardenContractV2.new(addressWdEFjOV, addressUNW4MY2, addressFBeoefK, {from: accounts[3]});
		const addressPbZDkE8 = accounts[0]
		const addressjd8uHyt = accounts[2]
		const addressbXKG4U9 = accounts[1]
		const uintdbvxN8X = BigInt("254")
		const stringkoptHrD = "sDFNHYh"
		const addressYSW4jgO = accounts[2]
		const uintGMcommU = BigInt("241")
		const addresscd8XYB4 = await GardenContractV2OHzlPIZ.changeOwner.call(addressPbZDkE8, {from: accounts[3]});
		const addressnM4POt4 = await GardenContractV2OHzlPIZ.addTokenOwner.call(addressbXKG4U9, addressjd8uHyt, {from: accounts[3]});
		const uint256kKqkaEk = await GardenContractV2OHzlPIZ.growthRemaining.call(addressYSW4jgO, stringkoptHrD, uintdbvxN8X, {from: accounts[2]});
		const uint256SisvTJR = await GardenContractV2OHzlPIZ.getTotalsTLPHarvest.call(uintGMcommU, {from: accounts[2]});

		await expect(GardenContractV2OHzlPIZ.addTokenOwner.call(addressbXKG4U9, addressjd8uHyt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address5nwJSc = accounts[0]
		const addressTEfVDPo = accounts[4]
		const addressZ1f6Fw3 = accounts[4]
		const GardenContractV2gzCHwO = await GardenContractV2.new(address5nwJSc, addressTEfVDPo, addressZ1f6Fw3, {from: accounts[0]});
		const uint43Br2j = BigInt("7")
		const uintBjXOd2e = BigInt("200")
		const stringOUgpLHZ = "eEYtRUE8IDL9g130GkmLp8IPxgmMtOGGDYuaL05n62SzX8Tvbwi4OA1n89FlkDtHLrUiZSo6PQYgX26dfsggWbEFUe"
		const uint256OjSmUjK = await GardenContractV2gzCHwO.getTotalrTLPHarvest.call(uint43Br2j, {from: accounts[5]});
		const uint256Ryba198 = await GardenContractV2gzCHwO.timeUntilNextTLP.call(stringOUgpLHZ, uintBjXOd2e, {from: accounts[4]});

		await expect(GardenContractV2gzCHwO.getTotalrTLPHarvest.call(uint43Br2j, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressKsZjXp5 = "0x0000000000000000000000000000000000000001"
		const addressn7Qtj0G = accounts[5]
		const addressKCf8VW = accounts[4]
		const GardenContractV2SPwKTT4 = await GardenContractV2.new(addressKsZjXp5, addressn7Qtj0G, addressKCf8VW, {from: accounts[4]});
		const addressrlygKU = accounts[5]
		const uintsST6kEW = BigInt("44")
		const uints56Pomo = BigInt("65")
		const stringMgB2WEv = "LC25xfqswP7SwUh6opUcKHfXrkuHiV3HXyvvNg7cc6UkvQvA4iPDbsN62ROsm"
		const addressk66M3IP = await GardenContractV2SPwKTT4.renounceTokenOwner.call(addressrlygKU, {from: accounts[4]});
		const uint256OLk7uN = await GardenContractV2SPwKTT4.getTotalsTLPHarvest.call(uintsST6kEW, {from: accounts[0]});
		const stringqSOlPbP = await GardenContractV2SPwKTT4.withdraw.call(stringMgB2WEv, uints56Pomo, {from: accounts[1]});

		await expect(GardenContractV2SPwKTT4.renounceTokenOwner.call(addressrlygKU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})