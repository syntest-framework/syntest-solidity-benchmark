const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressAeuvElN = accounts[0]
		const address0lDPK5 = accounts[3]
		const addressA0fljrx = accounts[0]
		const GardenContractV2gQX6jbO = await GardenContractV2.new(addressAeuvElN, address0lDPK5, addressA0fljrx, {from: accounts[1]});
		const uintkDlfGcD = BigInt("110")
		const stringDIb6X6Z = "ugwLpyfLXVr6KrJrlTgtzP4l1KpMPQFSCJg1dklwog6UGRjc0enpQDsHEcb3PyLfGaMaJMqftSurIPOpkuqU1R"
		const uintTH14dEh = BigInt("31")
		const uintTqVJFSi = BigInt("247")
		const stringcCvtnvK = "LdHeuFM2jbBc2skxGGm2FF8boIpe34W9Y8Ksy9tM"
//		const uint256qYzrsne = await GardenContractV2gQX6jbO.timeUntilNextTLP.call(stringDIb6X6Z, uintkDlfGcD, {from: accounts[5]});
//		const uint256bKEb6x2 = await GardenContractV2gQX6jbO.getTotalsTLPHarvest.call(uintTH14dEh, {from: accounts[0]});
//		const stringuDhvnTP = await GardenContractV2gQX6jbO.harvest.call(stringcCvtnvK, uintTqVJFSi, {from: accounts[1]});

		await expect(GardenContractV2gQX6jbO.timeUntilNextTLP.call(stringDIb6X6Z, uintkDlfGcD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressuUFoT2a = accounts[2]
		const addressT0FYI6v = accounts[1]
		const addressBGQbLPQ = accounts[2]
		const GardenContractV2Dvgq9iL = await GardenContractV2.new(addressuUFoT2a, addressT0FYI6v, addressBGQbLPQ, {from: accounts[0]});
		const uintYaw3Pfw = BigInt("1364")
		const uintRCSMwnO = BigInt("178")
		const stringBjyVE9B = "8VgF4a"
		const stringOttAjD9 = "W9endUTHlie8uPHwDDMDiygYKEnkC8wfn39bUgVtEbK4l81BwI7DWqPlOLOq73RimHPhl6cVx7Nk"
//		const stringJwncyiF = await GardenContractV2Dvgq9iL.decompose.call(stringBjyVE9B, uintRCSMwnO, uintYaw3Pfw, {from: accounts[3]});
//		const stringVkNkEx6 = await GardenContractV2Dvgq9iL.harvestAllBeds.call(stringOttAjD9, {from: accounts[5]});

		await expect(GardenContractV2Dvgq9iL.decompose.call(stringBjyVE9B, uintRCSMwnO, uintYaw3Pfw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressq8tnGk = accounts[4]
		const addressrANUuw9 = accounts[3]
		const addressd88BKT = accounts[3]
		const GardenContractV2dRXiWNU = await GardenContractV2.new(addressq8tnGk, addressrANUuw9, addressd88BKT, {from: accounts[3]});
		const uintCitMzD4 = BigInt("226")
		const stringL6fwsz9 = "SUy9yDvcxcgYScvx4EBlH0WAjvMwR1DGnFEYTdFSpmjEdVBS5fqXkMQaJoedrum47Iek"
		const addressQW9oByB = accounts[0]
		const addressxP17dTA = accounts[0]
		const stringTRcL2W7 = "lpmPBapqt30SVt6v1qWjoXtyNeNPQzWusYG0FunqEBe6fMLrnlhkkBvy33pweeUYKb7jrbjax0rXlzrdOZVUsBl2kLYTGqfc"
		const addressbM2g0Vg = accounts[1]
		const uintKAvnqCa = BigInt("1984")
		const uintDzJi9jq = BigInt("71")
		const uintNTl89lY = BigInt("145")
//		const stringflajpKA = await GardenContractV2dRXiWNU.withdraw.call(stringL6fwsz9, uintCitMzD4, {from: accounts[3]});
//		const addressfg5j6xW = await GardenContractV2dRXiWNU.renounceTokenOwner.call(addressQW9oByB, {from: accounts[0]});
//		const addresslkpqeA2 = await GardenContractV2dRXiWNU.changeOwner.call(addressxP17dTA, {from: accounts[4]});
//		const uint256Ju4QtTh = await GardenContractV2dRXiWNU.totalTLPGrowing.call(stringTRcL2W7, {from: accounts[1]});
//		const addressdpOsVBg = await GardenContractV2dRXiWNU.changeBenefitiary.call(addressbM2g0Vg, {from: accounts[0]});
//		const uint8cSRnRl = await GardenContractV2dRXiWNU.operationBurnMint.call(uintNTl89lY, uintDzJi9jq, uintKAvnqCa, {from: accounts[3]});

		await expect(GardenContractV2dRXiWNU.withdraw.call(stringL6fwsz9, uintCitMzD4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressqyipzHx = accounts[1]
		const addresskhqMiVz = "0x0000000000000000000000000000000000000001"
		const addresse7wdoXF = accounts[3]
		const GardenContractV2uAjx5Q4 = await GardenContractV2.new(addressqyipzHx, addresskhqMiVz, addresse7wdoXF, {from: accounts[4]});
		const addressmdcxAFy = accounts[1]
		const uintEmCUVai = BigInt("105")
		const uintmzKD5j = BigInt("41")
		const stringAyYDM89 = "jCgJCCdRZBISuofE8cVWQvMkrKMnuON5GTXsW221RWFM"
		const uintDwCTYro = BigInt("118")
		const stringO3JSe1F = "k1UAD6cl9acuJch7edMyfRnppfx3bt2QRph8JZr5MF6WVdPLkyzaUjHKLvDAxVFaVhYy25dV9vXi7T9qCl"
//		const addressZZlbYI = await GardenContractV2uAjx5Q4.changeBenefitiary.call(addressmdcxAFy, {from: accounts[2]});
//		const uint256UPrclGh = await GardenContractV2uAjx5Q4.getTotalrTLPHarvest.call(uintEmCUVai, {from: accounts[4]});
//		const stringv1RkZbx = await GardenContractV2uAjx5Q4.harvest.call(stringAyYDM89, uintmzKD5j, {from: accounts[4]});
//		const stringRpXyYEm = await GardenContractV2uAjx5Q4.claimDecompose.call(stringO3JSe1F, uintDwCTYro, {from: accounts[3]});

		await expect(GardenContractV2uAjx5Q4.changeBenefitiary.call(addressmdcxAFy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresssEFqqe7 = accounts[0]
		const addressSo0yizz = accounts[1]
		const addressV4kFo82 = accounts[4]
		const GardenContractV2opUo2Xx = await GardenContractV2.new(addresssEFqqe7, addressSo0yizz, addressV4kFo82, {from: accounts[3]});
		const stringj1i5gso = "KS0HaWQaeOidINxH0eKFS5UUIgI5hW3EAyIprHFt9rjS6Z"
		const stringwjnBuov = "6rnTRNsBz3YV9xhkNdUFdCfvGndGtkfm4x5BjcK3EXBCgG1AlFl5kYoYV6NY"
//		const uint256zGEeOaR = await GardenContractV2opUo2Xx.totalTLPGrowing.call(stringj1i5gso, {from: accounts[0]});
//		const uint256MGtAKgg = await GardenContractV2opUo2Xx.totalTLPGrowing.call(stringwjnBuov, {from: accounts[0]});

		await expect(GardenContractV2opUo2Xx.totalTLPGrowing.call(stringj1i5gso, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressLavivu0 = accounts[1]
		const addressSaKk7aQ = accounts[2]
		const addressEu9iavs = accounts[2]
		const GardenContractV2Dg2qfbl = await GardenContractV2.new(addressLavivu0, addressSaKk7aQ, addressEu9iavs, {from: accounts[5]});
		const uintvgTPQEk = BigInt("50")
		const stringF88r2Q0 = "HhNDjhwKJryvaUbwLxEzbmyjctXr1eKN87LSKVU3D"
		const addressdKRQrDg = accounts[0]
		const addressLNEiyJr = "0x0000000000000000000000000000000000000001"
//		await GardenContractV2Dg2qfbl.totalBedSupply.call(stringF88r2Q0, uintvgTPQEk, {from: accounts[3]});
//		const addressVivDlKF = await GardenContractV2Dg2qfbl.changeBenefitiary.call(addressdKRQrDg, {from: accounts[3]});
//		const addressq2wNefL = await GardenContractV2Dg2qfbl.changeBenefitiary.call(addressLNEiyJr, {from: accounts[2]});

		await expect(GardenContractV2Dg2qfbl.totalBedSupply.call(stringF88r2Q0, uintvgTPQEk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressD4r3sf0 = accounts[0]
		const addressf7ZFz2 = accounts[3]
		const addressgSm5byq = accounts[0]
		const GardenContractV2gQX6jbO = await GardenContractV2.new(addressD4r3sf0, addressf7ZFz2, addressgSm5byq, {from: accounts[1]});
		const uintzxuHDQ5 = BigInt("31")
		const uintvF6eM0A = BigInt("247")
		const stringcCvtnvK = "LdHeuFM2jbBc2skxGGm2FF8boIpe34W9Y8Ksy9tM"
//		const uint256bKEb6x2 = await GardenContractV2gQX6jbO.getTotalsTLPHarvest.call(uintzxuHDQ5, {from: accounts[0]});
//		const stringuDhvnTP = await GardenContractV2gQX6jbO.harvest.call(stringcCvtnvK, uintvF6eM0A, {from: accounts[1]});

		await expect(GardenContractV2gQX6jbO.getTotalsTLPHarvest.call(uintzxuHDQ5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressyUD3aiq = accounts[5]
		const addressUeu2zHT = accounts[2]
		const addresswZCwfzz = accounts[4]
		const GardenContractV2lUpYhaz = await GardenContractV2.new(addressyUD3aiq, addressUeu2zHT, addresswZCwfzz, {from: accounts[5]});
		const uintKd4QwdY = BigInt("124")
		const uintYWwetyo = BigInt("184")
		const uintZd6u5S = BigInt("28")
		const stringvlVJCZ4 = "34X"
		const boolmXQQEmm = true
		const uintCub2ydc = BigInt("200")
		const stringPMnV06b = "siHc0MsUyd6sdEE3ot5v54fHAqs3M2J"
		const uintJNVqaDr = BigInt("1461")
		const uintb5ABGgP = BigInt("234")
		const uintcmxqJd = BigInt("132")
//		const uint8urOBtbQ = await GardenContractV2lUpYhaz.setTimeStamp.call(uintYWwetyo, uintKd4QwdY, {from: accounts[2]});
//		await GardenContractV2lUpYhaz.totalBedSupply.call(stringvlVJCZ4, uintZd6u5S, {from: accounts[1]});
//		const uint256HaKb8AZ = await GardenContractV2lUpYhaz.plant.call(uintJNVqaDr, stringPMnV06b, uintCub2ydc, boolmXQQEmm, {from: accounts[5]});
//		const uint8F0cRIgd = await GardenContractV2lUpYhaz.zeroHoldings.call(uintcmxqJd, uintb5ABGgP, {from: accounts[3]});

		await expect(GardenContractV2lUpYhaz.setTimeStamp.call(uintYWwetyo, uintKd4QwdY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressxm5Tok2 = accounts[1]
		const addressjnft90u = accounts[4]
		const addressGZHiNTt = accounts[5]
		const GardenContractV2KEraDcn = await GardenContractV2.new(addressxm5Tok2, addressjnft90u, addressGZHiNTt, {from: "0x0000000000000000000000000000000000000001"});
		const uintfZOxuuJ = BigInt("179")
		const stringZhy5yXO = "vlA0v7RSz60Cuuikn2R4OnyqVn72AchV1i7sTR37j"
		const uintt3vsB3q = BigInt("114")
		const stringsiKzjK = "RnCD5eT5C6SgqUq77ob3JIHaACGl1bnnsuiPc9SUyJYC"
		const uintWQXxk7f = BigInt("105")
		const stringzUK7i2n = "27yjMBbyd0xnNwOoDg2jYtcJ57T8Io0jWMux4VuKdYP219FKbb8s3hvnrly5rM8ErKeyZeCXJDXxd2PmRu30Tji"
		const stringx5Hwlsl = await GardenContractV2KEraDcn.withdraw.call(stringZhy5yXO, uintfZOxuuJ, {from: accounts[2]});
		const uint256T3b7jgq = await GardenContractV2KEraDcn.timeUntilNextTLP.call(stringsiKzjK, uintt3vsB3q, {from: accounts[2]});
		await GardenContractV2KEraDcn.totalBedSupply.call(stringzUK7i2n, uintWQXxk7f, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addresszLB7W0O = accounts[2]
		const addressaveFnFC = accounts[1]
		const addressq5LyaB1 = accounts[2]
		const GardenContractV2Dvgq9iL = await GardenContractV2.new(addresszLB7W0O, addressaveFnFC, addressq5LyaB1, {from: accounts[0]});
		const uinthLFdyGz = BigInt("97")
		const uintvEcb8p6 = BigInt("1364")
		const uintbuUMnYT = BigInt("178")
		const stringBjyVE9B = "8VgF4a"
//		const uint256Px60nKS = await GardenContractV2Dvgq9iL.getTotalrTLPHarvest.call(uinthLFdyGz, {from: accounts[3]});
//		const stringJwncyiF = await GardenContractV2Dvgq9iL.decompose.call(stringBjyVE9B, uintbuUMnYT, uintvEcb8p6, {from: accounts[3]});

		await expect(GardenContractV2Dvgq9iL.getTotalrTLPHarvest.call(uinthLFdyGz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressVWmiDLt = accounts[2]
		const addressEBI908L = accounts[1]
		const addressCGJkcZe = accounts[2]
		const GardenContractV2Dvgq9iL = await GardenContractV2.new(addressVWmiDLt, addressEBI908L, addressCGJkcZe, {from: accounts[0]});
		const stringOttAjD9 = "W9endUTHlie8uPHwDDMDiygYKEnkC8wfn39bUgVtEbK4l81BwI7DWqPlOLOq73RimHPhl6cVx7Nk"
//		const stringVkNkEx6 = await GardenContractV2Dvgq9iL.harvestAllBeds.call(stringOttAjD9, {from: accounts[5]});

		await expect(GardenContractV2Dvgq9iL.harvestAllBeds.call(stringOttAjD9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressOQEBfql = accounts[2]
		const addressFFk60ZC = accounts[1]
		const addresszsTodHK = accounts[2]
		const GardenContractV2Dvgq9iL = await GardenContractV2.new(addressOQEBfql, addressFFk60ZC, addresszsTodHK, {from: accounts[0]});
		const boolciwwx3L = false
		const uintblBHe8S = BigInt("183")
		const stringRDPLFIa = "xkS8mH6tHteM6JM9KecqceI3EPGP0IC"
		const uintfMqfvvC = BigInt("585")
		const uintU7X5C3h = BigInt("1364")
		const uint3VaTXv = BigInt("178")
		const stringBjyVE9B = "8VgF4a"
//		const uint256M4HW8hn = await GardenContractV2Dvgq9iL.plant.call(uintfMqfvvC, stringRDPLFIa, uintblBHe8S, boolciwwx3L, {from: accounts[4]});
//		const stringJwncyiF = await GardenContractV2Dvgq9iL.decompose.call(stringBjyVE9B, uint3VaTXv, uintU7X5C3h, {from: accounts[3]});

		await expect(GardenContractV2Dvgq9iL.plant.call(uintfMqfvvC, stringRDPLFIa, uintblBHe8S, boolciwwx3L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressfJv8xct = accounts[2]
		const addressifQ0JUW = accounts[1]
		const addressSBENnw = accounts[2]
		const GardenContractV2Dvgq9iL = await GardenContractV2.new(addressfJv8xct, addressifQ0JUW, addressSBENnw, {from: accounts[0]});
		const uintD4voytq = BigInt("21")
		const stringWuQIqFE = "7"
		const uintxcgZsLT = BigInt("252")
		const stringBUXBM1h = "SxHJgLO1UqrYGzfeeiRfiRN5BhpAfk"
		const uintNP3qQN3 = BigInt("97")
		const uintzTO7Czu = BigInt("1358")
		const uintxOeU4F = BigInt("178")
		const stringBjyVE9B = "8VgF4a"
//		const stringgm02UCl = await GardenContractV2Dvgq9iL.claimDecompose.call(stringWuQIqFE, uintD4voytq, {from: accounts[4]});
//		await GardenContractV2Dvgq9iL.totalBedSupply.call(stringBUXBM1h, uintxcgZsLT, {from: accounts[3]});
//		const uint256Px60nKS = await GardenContractV2Dvgq9iL.getTotalrTLPHarvest.call(uintNP3qQN3, {from: accounts[3]});
//		const stringJwncyiF = await GardenContractV2Dvgq9iL.decompose.call(stringBjyVE9B, uintxOeU4F, uintzTO7Czu, {from: accounts[3]});

		await expect(GardenContractV2Dvgq9iL.claimDecompose.call(stringWuQIqFE, uintD4voytq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressdci5QYu = accounts[4]
		const addressTGJMChU = accounts[3]
		const addressVECVAdn = accounts[3]
		const GardenContractV2dRXiWNU = await GardenContractV2.new(addressdci5QYu, addressTGJMChU, addressVECVAdn, {from: accounts[3]});
		const string4nXeaX = "2wHW9vbxGVr2ezOqrNHkv2j2aYsM6DNZAp1xSeYjNM4nWLDudDdxn3mdE4Xi4oh3GUR2TOe4LM4UOJ8t4ijWEdFbwR85"
		const uinthQvCdix = BigInt("188")
		const uintHV6x4NW = BigInt("226")
		const stringL6fwsz9 = "SUy9yDvcxcgYScvx4EBlH0WAjvMwR1DGnFEYTdFSpmjEdVBS5fqXkMQaJoedrum47Iek"
		const uintoOvAlGV = BigInt("82")
		const stringlyIFGCr = "KR473IAQxEhc9pdbvEDzYWGvXVBZNFFV3zh5fTsz5TmhzYb3riet9ti"
		const addressv5lZsZ = accounts[0]
		const stringPkFzIXq = "CHWQiW1rZKUlB5DNGlYcwCVmRbOTT4KqfmAnybc7j3x1F9nxTPTNDInOMlXHbFFKqfBTlwDXsE5MuXlPQxaC9ai"
		const addresszBsHca3 = accounts[4]
//		const uint256q9sh31u = await GardenContractV2dRXiWNU.totalTLPGrown.call(string4nXeaX, {from: "0x0000000000000000000000000000000000000001"});
//		const uint2561IS9k0 = await GardenContractV2dRXiWNU.getTotalrTLPHarvest.call(uinthQvCdix, {from: "0x0000000000000000000000000000000000000001"});
//		const stringflajpKA = await GardenContractV2dRXiWNU.withdraw.call(stringL6fwsz9, uintHV6x4NW, {from: accounts[3]});
//		const uint256awIB1F5 = await GardenContractV2dRXiWNU.timeUntilNextTLP.call(stringlyIFGCr, uintoOvAlGV, {from: "0x0000000000000000000000000000000000000001"});
//		const addresslkpqeA2 = await GardenContractV2dRXiWNU.changeOwner.call(addressv5lZsZ, {from: accounts[4]});
//		const uint256IcNXT27 = await GardenContractV2dRXiWNU.balanceOf.call(addresszBsHca3, stringPkFzIXq, {from: accounts[4]});

		await expect(GardenContractV2dRXiWNU.totalTLPGrown.call(string4nXeaX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscKXP09p = accounts[2]
		const addressA65PyB = accounts[1]
		const addresspoiH41j = accounts[2]
		const GardenContractV2Dvgq9iL = await GardenContractV2.new(addresscKXP09p, addressA65PyB, addresspoiH41j, {from: accounts[0]});
		const uintCNprkK6 = BigInt("126")
		const stringE60urHC = "AUmPEno6DgsdDq3WcpmSfSEkt18T7qHggewQ4Jrg02HutQOqDgOEOnOobGlrrMSk1wDUAYw5tc"
		const stringOttAjD9 = "W9endUTHlie8uPHwDDMDiygYKEnkC8wfn39bUgVtbK4l81BwI7DWqPlOLOq73RimHPhl6cVx7Nk"
//		const stringB6SXGkC = await GardenContractV2Dvgq9iL.harvest.call(stringE60urHC, uintCNprkK6, {from: accounts[0]});
//		const stringVkNkEx6 = await GardenContractV2Dvgq9iL.harvestAllBeds.call(stringOttAjD9, {from: accounts[5]});

		await expect(GardenContractV2Dvgq9iL.harvest.call(stringE60urHC, uintCNprkK6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressH8agXEw = accounts[2]
		const addressmj7ot4m = accounts[1]
		const addressolFmQve = accounts[2]
		const GardenContractV2Dvgq9iL = await GardenContractV2.new(addressH8agXEw, addressmj7ot4m, addressolFmQve, {from: accounts[0]});
		const uint907SRy = BigInt("99")
		const stringoaPMNxb = ""
		const addresscmTrgOj = accounts[4]
		const uintdbbsSUc = BigInt("241")
		const stringRlGN9j = "oJg8BDXbdXfo8FmeAoXtgCNGAd5"
		const stringOttAjD9 = "W9endUTHlie8uPHwDDMDiygYKEnkCPwfn39bUgVtEbK4l81BwI7DWqPlOLOq73RimHPhl6cVx7Nk"
//		const uint256g3iPHiX = await GardenContractV2Dvgq9iL.growthRemaining.call(addresscmTrgOj, stringoaPMNxb, uint907SRy, {from: accounts[5]});
//		const stringN9Blsl9 = await GardenContractV2Dvgq9iL.harvest.call(stringRlGN9j, uintdbbsSUc, {from: accounts[1]});
//		const stringVkNkEx6 = await GardenContractV2Dvgq9iL.harvestAllBeds.call(stringOttAjD9, {from: accounts[5]});

		await expect(GardenContractV2Dvgq9iL.growthRemaining.call(addresscmTrgOj, stringoaPMNxb, uint907SRy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressICYb5X4 = accounts[3]
		const addressPBWWXOj = accounts[1]
		const addressjEkDigU = accounts[4]
		const GardenContractV2cJE7wxC = await GardenContractV2.new(addressICYb5X4, addressPBWWXOj, addressjEkDigU, {from: accounts[0]});
		const stringUuGy7n4 = "JSp8JieiLVqA0bHn1rNdNRDIyHYnlexH2SY2"
		const uintZrTUcix = BigInt("203")
		const stringIa7gFvE = "tQPfQCz2vwsnYlACJK6L9rXNb1iDF7u4AyaRme7"
		const addressK9uo49A = accounts[2]
		const uintqLx2Pop = BigInt("225")
		const stringj3j937 = "1X6TrA9bjS16pr6oeEhR"
//		const uint256Vym1zR = await GardenContractV2cJE7wxC.totalTLPDecomposed.call(stringUuGy7n4, {from: accounts[1]});
//		const stringULzqlsQ = await GardenContractV2cJE7wxC.claimDecompose.call(stringIa7gFvE, uintZrTUcix, {from: accounts[0]});
//		const addressQ308OhJ = await GardenContractV2cJE7wxC.changeBenefitiary.call(addressK9uo49A, {from: "0x0000000000000000000000000000000000000001"});
//		const stringyS979e7 = await GardenContractV2cJE7wxC.withdraw.call(stringj3j937, uintqLx2Pop, {from: accounts[0]});

		await expect(GardenContractV2cJE7wxC.totalTLPDecomposed.call(stringUuGy7n4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressuCpxusH = accounts[2]
		const addressEyOfwlY = accounts[1]
		const addressoHxPbau = accounts[2]
		const GardenContractV2Dvgq9iL = await GardenContractV2.new(addressuCpxusH, addressEyOfwlY, addressoHxPbau, {from: accounts[0]});
		const addressAI410L3 = accounts[1]
		const boolciwwx3L = false
		const uintMBW9n1y = BigInt("55")
		const stringRDPLFIa = "xkS8mH6cHteM6JM9KecqceI3EPGP0IC"
		const uintm3TVWzH = BigInt("585")
		const uintLEiedq8 = BigInt("16")
		const stringBZaFhnQ = "DLLKS27bflyVdatmPAEY2NLvOloNdwbljcOTRApadsv5McYNwNjT2d6rRb5VSeLSuvvyznuWAMVnMCM6yXIjN"
		const addressE5bXz67 = accounts[4]
		const uintQC2QXZO = BigInt("44")
		const uintOhqrzg = BigInt("11")
		const stringpvjn1L = "TVLdD1V8guToTX6Uh4rhCcLc2zlC0nXxshkyp2uapEdKskeQ6xl8f7hw"
		const addressUPI9zb3 = await GardenContractV2Dvgq9iL.changeOwner.call(addressAI410L3, {from: accounts[0]});
//		const uint256M4HW8hn = await GardenContractV2Dvgq9iL.plant.call(uintm3TVWzH, stringRDPLFIa, uintMBW9n1y, boolciwwx3L, {from: accounts[4]});
//		const uint256g9zsrJJ = await GardenContractV2Dvgq9iL.growthRemaining.call(addressE5bXz67, stringBZaFhnQ, uintLEiedq8, {from: accounts[4]});
//		const uint256TwkLL3n = await GardenContractV2Dvgq9iL.getTotalsTLPHarvest.call(uintQC2QXZO, {from: accounts[5]});
//		const stringBQVgW6e = await GardenContractV2Dvgq9iL.claimDecompose.call(stringpvjn1L, uintOhqrzg, {from: accounts[1]});

		await expect(GardenContractV2Dvgq9iL.plant.call(uintm3TVWzH, stringRDPLFIa, uintMBW9n1y, boolciwwx3L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressBvGLhyU = accounts[2]
		const addresscnY0SWY = accounts[3]
		const addresspjOoV2k = accounts[3]
		const GardenContractV2xuwarc9 = await GardenContractV2.new(addressBvGLhyU, addresscnY0SWY, addresspjOoV2k, {from: accounts[0]});
		const addressxolypyE = accounts[2]
		const uintcDp5DSJ = BigInt("123")
		const uintGBkJj0t = BigInt("205")
		const uintA1LoTIL = BigInt("210")
		const stringmgeDpV3 = "q3NwN4udfV0xDypxBKFlC1dZb8KzFJonL"
		const addressnzR20fZ = accounts[2]
		const addressv74yT3j = accounts[1]
		const addressQrzgDUV = accounts[2]
		const uintrQn8uJq = BigInt("111")
		const stringKeQWb2J = "kF1eAV37l0V"
		const addressmuxFC8h = await GardenContractV2xuwarc9.changeBenefitiary.call(addressxolypyE, {from: accounts[0]});
//		const uint8feKnMOL = await GardenContractV2xuwarc9.setTimeStamp.call(uintGBkJj0t, uintcDp5DSJ, {from: accounts[3]});
//		const uint256TH2SPjp = await GardenContractV2xuwarc9.growthRemaining.call(addressnzR20fZ, stringmgeDpV3, uintA1LoTIL, {from: accounts[4]});
//		const addressbM8R54s = await GardenContractV2xuwarc9.addTokenOwner.call(addressQrzgDUV, addressv74yT3j, {from: accounts[2]});
//		const stringdT6LQif = await GardenContractV2xuwarc9.claimDecompose.call(stringKeQWb2J, uintrQn8uJq, {from: accounts[5]});

		await expect(GardenContractV2xuwarc9.setTimeStamp.call(uintGBkJj0t, uintcDp5DSJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressi7L2R5W = accounts[2]
		const addressgXbLxps = accounts[1]
		const addressUNHbXhS = accounts[2]
		const GardenContractV2Dvgq9iL = await GardenContractV2.new(addressi7L2R5W, addressgXbLxps, addressUNHbXhS, {from: accounts[0]});
		const addressTTpsUkA = accounts[1]
		const stringHaRsN86 = "x"
		const addressJNzO0Cf = accounts[3]
		const uintxgQjWP = BigInt("84")
		const stringjaYU0Q = "dbhMknb7C"
		const uintbu6eTm2 = BigInt("125")
//		const addressZY2SWIz = await GardenContractV2Dvgq9iL.renounceTokenOwner.call(addressTTpsUkA, {from: accounts[0]});
//		const uint256TcT4SW = await GardenContractV2Dvgq9iL.balanceOf.call(addressJNzO0Cf, stringHaRsN86, {from: accounts[4]});
//		const stringchevZnK = await GardenContractV2Dvgq9iL.harvest.call(stringjaYU0Q, uintxgQjWP, {from: accounts[1]});
//		const uint256Px60nKS = await GardenContractV2Dvgq9iL.getTotalrTLPHarvest.call(uintbu6eTm2, {from: accounts[3]});

		await expect(GardenContractV2Dvgq9iL.renounceTokenOwner.call(addressTTpsUkA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressncJE2cw = accounts[2]
		const addresseLS2UQ4 = accounts[1]
		const addressSfZvv5O = accounts[2]
		const GardenContractV2Dvgq9iL = await GardenContractV2.new(addressncJE2cw, addresseLS2UQ4, addressSfZvv5O, {from: accounts[0]});
		const stringh4frrsG = "VoPQNXtgKG3"
		const uintQUECgs = BigInt("108")
//		const uint256Xcy05Mt = await GardenContractV2Dvgq9iL.totalGardenSupply.call(stringh4frrsG, {from: accounts[4]});
//		const uint256Px60nKS = await GardenContractV2Dvgq9iL.getTotalrTLPHarvest.call(uintQUECgs, {from: accounts[3]});

		await expect(GardenContractV2Dvgq9iL.totalGardenSupply.call(stringh4frrsG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressDlsQEVg = accounts[0]
		const addresshr9XySg = accounts[1]
		const addressk34hDRG = accounts[1]
		const GardenContractV2rPDJa2r = await GardenContractV2.new(addressDlsQEVg, addresshr9XySg, addressk34hDRG, {from: accounts[4]});
		const stringzemeHR1 = "U6jJ"
		const addressfnGeQTZ = accounts[1]
		const uintbwVmDOI = BigInt("130")
		const stringXpZvPkE = "wd86aDLAwBDgOkek92C9rmuX"
//		const uint256gSbWVtu = await GardenContractV2rPDJa2r.balanceOf.call(addressfnGeQTZ, stringzemeHR1, {from: accounts[3]});
//		const uint256neCHJDO = await GardenContractV2rPDJa2r.timeUntilNextTLP.call(stringXpZvPkE, uintbwVmDOI, {from: accounts[5]});

		await expect(GardenContractV2rPDJa2r.balanceOf.call(addressfnGeQTZ, stringzemeHR1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressMEJCZRn = accounts[2]
		const addressQMTXSJh = accounts[1]
		const address7IMeK7 = accounts[2]
		const GardenContractV2Dvgq9iL = await GardenContractV2.new(addressMEJCZRn, addressQMTXSJh, address7IMeK7, {from: accounts[0]});
		const stringT4OHwOr = "Jvu5cYHU9nVB8WZ4WpfGhM5MeewYp"
		const boolciwwx3L = false
		const uinteJkN3yR = BigInt("55")
		const stringRDPLFIa = "xkS8mH6tHteMiJM9KecqceI3EPGP0IC"
		const uintklIbGw0 = BigInt("585")
//		const uint256dhwKL0o = await GardenContractV2Dvgq9iL.totalTLPBurnt.call(stringT4OHwOr, {from: accounts[4]});
//		const uint256M4HW8hn = await GardenContractV2Dvgq9iL.plant.call(uintklIbGw0, stringRDPLFIa, uinteJkN3yR, boolciwwx3L, {from: accounts[4]});

		await expect(GardenContractV2Dvgq9iL.totalTLPBurnt.call(stringT4OHwOr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressAIeNvl9 = accounts[2]
		const addresseqvZd0y = accounts[1]
		const addressvrBvCyN = accounts[2]
		const GardenContractV2Dvgq9iL = await GardenContractV2.new(addressAIeNvl9, addresseqvZd0y, addressvrBvCyN, {from: accounts[0]});
		const uintHJxhnd5 = BigInt("10")
		const addressEUnIusf = accounts[0]
		const stringKcweXm = "nu1djbYhfhugOIyMaWNJPJ6xIxzjn7Fk6oFqcqR2"
		const addressCE0EowE = accounts[3]
//		const uint256Px60nKS = await GardenContractV2Dvgq9iL.getTotalrTLPHarvest.call(uintHJxhnd5, {from: accounts[3]});
//		const addressLsBdrzs = await GardenContractV2Dvgq9iL.renounceTokenOwner.call(addressEUnIusf, {from: accounts[0]});
//		const uint256ZhJ59L7 = await GardenContractV2Dvgq9iL.balanceOf.call(addressCE0EowE, stringKcweXm, {from: accounts[4]});

		await expect(GardenContractV2Dvgq9iL.getTotalrTLPHarvest.call(uintHJxhnd5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})